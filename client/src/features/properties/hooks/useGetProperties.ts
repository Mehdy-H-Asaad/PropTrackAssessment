import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { TPropertyDTO } from "../types/property.types";
import { usePropertyFiltersStore } from "../store/property-filters.store";

export const useGetProperties = () => {
	const { filters } = usePropertyFiltersStore();
	const { data, isLoading, error } = useApiQuery<TPropertyDTO[]>({
		queryKey: ["properties", { ...filters }],
		requestURL: "/properties",
		axiosConfig: {
			params: {
				...filters,
			},
		},
	});

	return {
		properties: data,
		isLoadingProperties: isLoading,
		errorProperties: error,
	};
};
