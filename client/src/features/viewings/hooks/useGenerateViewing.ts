import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { TViewingDTO } from "../types/viewing.types";

interface GenerateViewingDTO {
	prompt: string;
	clientId: string;
	propertyId: string;
}

interface AIExtractionResult {
	date: string;
	time: string;
	notes: string | null;
	confidence: number;
}

interface GenerateViewingResponse {
	viewing: TViewingDTO;
	extractedDetails: AIExtractionResult;
}

export const useGenerateViewing = () => {
	const { mutate, isPending, error } = useApiMutation<
		GenerateViewingResponse,
		GenerateViewingDTO
	>({
		requestURL: "/ai-agent/generate-viewing",
		axiosRequestMethod: "post",
		queryKey: ["viewings"],
		successMsg: "Viewing generated successfully using AI",
	});

	const generateViewing = (
		prompt: string,
		clientId: string,
		propertyId: string
	) => {
		mutate({ prompt, clientId, propertyId });
	};

	return {
		generateViewing,
		isLoadingGenerateViewing: isPending,
		errorGenerateViewing: error,
	};
};
