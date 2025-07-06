import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { TPropertyDTO } from "../types/property.types";

export const useGetSingleProperty = (id: string) => {
	const { data, isFetching, error } = useApiQuery<TPropertyDTO>({
		queryKey: ["property", id],
		requestURL: `/properties/${id}`,
	});

	return {
		property: data,
		isLoadingProperty: isFetching,
		errorProperty: error,
	};
};
