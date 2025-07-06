import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { TPropertyDTO } from "../types/property.types";

export const useGetSuggestedProperties = (propertyId: string) => {
	const { data, isFetching, error } = useApiQuery<TPropertyDTO[]>({
		queryKey: ["properties", { propertyId }],
		requestURL: `/properties/suggested/${propertyId}`,
	});

	return {
		suggestedProperties: data,
		isLoadingSuggestedProperties: isFetching,
		errorSuggestedProperties: error,
	};
};
