import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { TPropertyDTO } from "../types/property.types";
import { usePropertyFiltersStore } from "../store/property-filters.store";

type TUseGetPropertiesProps = {
	limit?: number;
	page?: number;
	pagination?: boolean;
};

export const useGetProperties = ({
	limit,
	page,
	pagination = false,
}: TUseGetPropertiesProps) => {
	const { filters } = usePropertyFiltersStore();
	const { data, isFetching, error } = useApiQuery<TPropertyDTO[]>({
		queryKey: ["properties", { ...filters }],
		requestURL: "/properties",
		axiosConfig: {
			params: {
				...filters,
				limit,
				page,
				pagination,
			},
		},
	});

	return {
		properties: data,
		isLoadingProperties: isFetching,
		errorProperties: error,
	};
};
