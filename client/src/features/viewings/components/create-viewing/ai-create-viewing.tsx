import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { MainButton } from "@/components/common/main-button";
import { useGenerateViewing } from "../../index";
import { TClientInquiryDTO } from "@/features/clients/types/client.types";
import { TPropertyDTO } from "@/features/properties/types/property.types";
import { Bot, MessageSquare } from "lucide-react";

interface AICreateViewingProps {
	client: TClientInquiryDTO;
	property: TPropertyDTO;
}

export const AICreateViewing = ({ client, property }: AICreateViewingProps) => {
	const [prompt, setPrompt] = useState("");

	const { generateViewing, isLoadingGenerateViewing } = useGenerateViewing();

	const handleSubmit = () => {
		if (!prompt.trim()) return;

		generateViewing(prompt, client._id!, property._id!);
		// setIsOpen(false);
		setPrompt("");
	};

	return (
		<Dialog>
			<DialogTrigger className="w-full" asChild>
				<MainButton className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600">
					<Bot className="h-4 w-4" />
					AI Create Viewing
				</MainButton>
			</DialogTrigger>
			<DialogContent className="max-w-md">
				<DialogHeader>
					<DialogTitle className="flex items-center gap-2">
						<Bot className="h-5 w-5" />
						AI Viewing Generator
					</DialogTitle>
					<DialogDescription>
						Describe the viewing in natural language and AI will create it
						automatically.
					</DialogDescription>
				</DialogHeader>
				<div className="space-y-4">
					<div className="text-sm text-muted-foreground">
						<strong>Client:</strong> {client.name}
					</div>
					<div className="text-sm text-muted-foreground">
						<strong>Property:</strong> {property.title}
					</div>

					<div className="space-y-2">
						<label className="text-sm font-medium">Describe the viewing:</label>
						<Textarea
							value={prompt}
							onChange={e => setPrompt(e.target.value)}
							placeholder="Example: Schedule a viewing for 15th of July at 2:30 PM, notes: client is very interested in buying this property"
							rows={4}
							className="resize-none"
						/>
					</div>

					<div className="bg-muted p-3 rounded-lg">
						<h4 className="text-sm font-medium mb-2 flex items-center gap-1">
							<MessageSquare className="h-4 w-4" />
							Examples:
						</h4>
						<ul className="text-xs space-y-1 text-muted-foreground">
							<li>• "15th of July at 2:30 PM"</li>
							<li>• "Schedule for August 20th at 10 AM"</li>
							<li>• "July 13th, 12:30 PM - client is serious about buying"</li>
						</ul>
					</div>

					<DialogFooter>
						<MainButton
							onClick={handleSubmit}
							isLoading={isLoadingGenerateViewing}
							loadingText="Generating..."
							disabled={isLoadingGenerateViewing || !prompt.trim()}
						>
							Generate Viewing
						</MainButton>
					</DialogFooter>
				</div>
			</DialogContent>
		</Dialog>
	);
};
