import axios from "axios";

interface AIExtractionResult {
	date: string;
	time: string;
	notes: string | null;
	confidence: number;
}

export class AIService {
	private apiKey: string;
	private baseURL = "https://api.deepseek.com/v1";

	constructor() {
		this.apiKey = "sk-22bd38c99ec84b34bcb9fe1817839831";
		if (!this.apiKey) {
			throw new Error("DEEPSEEK_API_KEY is not configured");
		}
	}

	private async callDeepSeekAPI(
		messages: Array<{ role: string; content: string }>
	) {
		try {
			const response = await axios.post(
				`${this.baseURL}/chat/completions`,
				{
					model: "deepseek-chat",
					messages,
					temperature: 0.1,
					max_tokens: 500,
				},
				{
					headers: {
						Authorization: `Bearer ${this.apiKey}`,
						"Content-Type": "application/json",
					},
				}
			);

			return response.data.choices[0].message.content;
		} catch (error) {
			console.error("DeepSeek API error:", error);
			throw error;
		}
	}

	async extractViewingDetails(prompt: string): Promise<AIExtractionResult> {
		const systemPrompt = `You are an AI assistant that extracts viewing details from natural language text. 
    
    Extract the following information from the user's prompt:
    1. Date (in YYYY-MM-DD format)
    2. Time (in HH:MM 24-hour format)
    3. Notes (any additional comments or observations)
    
    Respond with a JSON object in this exact format:
    {
      "date": "2024-07-13",
      "time": "12:30",
      "notes": "this client is so serious about buying this property",
      "confidence": 0.95
    }
    
    If you cannot extract a field, set it to null. Confidence should be between 0 and 1.
    
    Examples:
    - "13 of july" → "2024-07-13"
    - "12:30 pm" → "12:30"
    - "3:00 am" → "03:00"
    - "july 15" → "2024-07-15"`;

		const userPrompt = `Extract viewing details from this text: "${prompt}"`;

		try {
			const response = await this.callDeepSeekAPI([
				{ role: "system", content: systemPrompt },
				{ role: "user", content: userPrompt },
			]);

			// Parse the JSON response
			const extractedData = JSON.parse(response);

			return {
				date: extractedData.date,
				time: extractedData.time,
				notes: extractedData.notes,
				confidence: extractedData.confidence || 0.5,
			};
		} catch (error) {
			console.error("AI extraction failed, falling back to regex:", error);
			// Fallback to regex-based extraction
			return this.fallbackExtraction(prompt);
		}
	}

	private fallbackExtraction(prompt: string): AIExtractionResult {
		const date = this.extractDate(prompt);
		const time = this.extractTime(prompt);
		const notes = this.extractNotes(prompt);

		return {
			date,
			time,
			notes,
			confidence: 0.3,
		};
	}

	private extractDate(text: string): string {
		const dateRegex =
			/(\d{1,2})\s+(?:of\s+)?(january|february|march|april|may|june|july|august|september|october|november|december)/i;
		const match = text.match(dateRegex);

		if (match) {
			const day = match[1].padStart(2, "0");
			const month = this.getMonthNumber(match[2].toLowerCase());
			const year = new Date().getFullYear();
			return `${year}-${month}-${day}`;
		}

		return new Date().toISOString().split("T")[0];
	}

	private extractTime(text: string): string {
		const timeRegex = /(\d{1,2}):(\d{2})\s*(am|pm)/i;
		const match = text.match(timeRegex);

		if (match) {
			let hour = parseInt(match[1]);
			const minute = match[2];
			const period = match[3].toLowerCase();

			if (period === "pm" && hour !== 12) {
				hour += 12;
			} else if (period === "am" && hour === 12) {
				hour = 0;
			}

			return `${hour.toString().padStart(2, "0")}:${minute}`;
		}

		return "12:00";
	}

	private extractNotes(text: string): string | null {
		const notesRegex = /(?:notes?|description|comment):\s*(.+)/i;
		const match = text.match(notesRegex);

		if (match) {
			return match[1].trim();
		}

		const sentences = text.split(/[.!?]+/);
		for (const sentence of sentences) {
			const trimmed = sentence.trim();
			if (
				trimmed.length > 10 &&
				(trimmed.toLowerCase().includes("serious") ||
					trimmed.toLowerCase().includes("interested") ||
					trimmed.toLowerCase().includes("wants") ||
					trimmed.toLowerCase().includes("needs"))
			) {
				return trimmed;
			}
		}

		return null;
	}

	private getMonthNumber(monthName: string): string {
		const months: { [key: string]: string } = {
			january: "01",
			february: "02",
			march: "03",
			april: "04",
			may: "05",
			june: "06",
			july: "07",
			august: "08",
			september: "09",
			october: "10",
			november: "11",
			december: "12",
		};

		return months[monthName] || "01";
	}
}
