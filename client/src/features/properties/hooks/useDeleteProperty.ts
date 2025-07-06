import { useApiMutation } from "@/shared/hooks/useApiMutation";

export const useDeleteProperty = (id: string) => {
	const { mutate, isPending } = useApiMutation({
		axiosRequestMethod: "delete",
		queryKey: ["properties"],
		requestURL: `/properties/${id}`,
		successMsg: "Property deleted successfully",
	});

	return {
		deleteProperty: mutate,
		isDeletePropertyPending: isPending,
	};
};
