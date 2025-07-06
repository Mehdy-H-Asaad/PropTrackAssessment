import { useInfiniteQuery } from "@tanstack/react-query";
import { axiosClient } from "@/shared/api/axios";
import { TPropertyDTO } from "../types/property.types";
import { usePropertyFiltersStore } from "../store/property-filters.store";

type ServerResponse = {
	status: string;
	data: TPropertyDTO[];
	totalResults: number;
	totalPages?: number;
	page?: number;
	limit?: number;
};

export const useGetInfiniteProperties = () => {
	const { filters } = usePropertyFiltersStore();

	const query = useInfiniteQuery({
		queryKey: ["properties", JSON.stringify(filters)],
		queryFn: async ({ pageParam = 1 }) => {
			const response = await axiosClient.get("/properties?active=true", {
				params: {
					...filters,
					page: pageParam,
					limit: 10,
					pagination: "true",
				},
			});
			return response.data;
		},
		getNextPageParam: (lastPage: ServerResponse) => {
			if (
				lastPage.page &&
				lastPage.totalPages &&
				lastPage.page < lastPage.totalPages
			) {
				return lastPage.page + 1;
			}
			return undefined;
		},
		initialPageParam: 1,
	});

	const properties = query.data?.pages.flatMap(page => page.data) ?? [];

	return {
		properties,
		isLoading: query.isLoading,
		error: query.error,
		hasNextPage: query.hasNextPage,
		fetchNextPage: query.fetchNextPage,
		isFetchingNextPage: query.isFetchingNextPage,
	};
};
