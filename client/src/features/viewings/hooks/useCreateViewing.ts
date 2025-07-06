import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { TViewingDTO } from "../types/viewing.types";
import { TCreateViewingDTO, viewingSchema } from "../index";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useCreateViewing = (clientId: string, propertyId: string) => {
	const { mutate, isPending, error } = useApiMutation<
		TViewingDTO,
		TCreateViewingDTO
	>({
		requestURL: "/viewings",
		axiosRequestMethod: "post",
		queryKey: ["viewings"],
		successMsg: "Viewing created successfully",
		onSuccess: () => {
			CreateViewingForm.reset();
		},
	});

	const CreateViewingSchema = viewingSchema;

	const CreateViewingForm = useForm<TCreateViewingDTO>({
		resolver: zodResolver(CreateViewingSchema),
		defaultValues: {
			clientId: clientId,
			date: new Date(),
			propertyId: propertyId,
			time: "",
			status: "scheduled",
			notes: null,
		},
	});

	const onCreateViewing = (values: TCreateViewingDTO) => {
		mutate(values);
	};

	return {
		CreateViewingForm,
		onCreateViewing,
		isLoadingCreateViewing: isPending,
		errorCreateViewing: error,
	};
};
