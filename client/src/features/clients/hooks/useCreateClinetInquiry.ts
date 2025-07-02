import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { TClientInquiryDTO } from "../types/client.types";
import {
	clientInquirySchema,
	TCreateClientInquiryDTO,
} from "../schema/client-inquiry.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useCreateClientInquiry = () => {
	const { mutate, isPending } = useApiMutation<
		TClientInquiryDTO,
		TCreateClientInquiryDTO
	>({
		queryKey: ["client-inquiry"],
		axiosRequestMethod: "post",
		requestURL: "/clients/inquiries/create-inquiry",
		successMsg: "Inquiry created successfully",
	});

	const createClientInquirySchema = clientInquirySchema;

	const CreateClientInquiryForm = useForm<TCreateClientInquiryDTO>({
		resolver: zodResolver(createClientInquirySchema),
		defaultValues: {
			email: "",
			message: "Hey, I'm interested in your property.",
			name: "",
			phone: "",
		},
	});

	const onCreateClientInquiry = (values: TCreateClientInquiryDTO) => {
		mutate(values);
	};

	return {
		CreateClientInquiryForm,
		onCreateClientInquiry,
		isCreateClientInquiryPending: isPending,
	};
};
