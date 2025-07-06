import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { TViewingDTO } from "../types/viewing.types";
import { useViewingsFiltersStore } from "../store/viewing.store";

export const useGetViewings = () => {
	const { filters } = useViewingsFiltersStore();

	const { data, isFetching, error } = useApiQuery<TViewingDTO[]>({
		queryKey: ["viewings", filters],
		requestURL: "/viewings",
		axiosConfig: {
			params: {
				status: filters.status === "all" ? "" : filters.status,
			},
		},
	});

	return {
		viewings: data,
		isLoadingViewings: isFetching,
		errorViewings: error,
	};
};
