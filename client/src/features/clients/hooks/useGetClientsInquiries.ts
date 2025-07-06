import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { TClientInquiryDTO } from "../types/client.types";

export const useGetClientsInquiries = () => {
	const { data, isFetching, error } = useApiQuery<TClientInquiryDTO[]>({
		queryKey: ["clients-inquiries"],
		requestURL: "/clients/inquiries",
	});

	return {
		clientsInquiries: data,
		isLoadingClientsInquiries: isFetching,
		errorClientsInquiries: error,
	};
};
