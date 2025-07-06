import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { TViewingDTO } from "../types/viewing.types";
import { TUpdateViewingDTO, viewingSchema } from "../index";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useUpdateViewings = (viewing: TViewingDTO) => {
	const { mutate, isPending, error } = useApiMutation<
		TViewingDTO,
		TUpdateViewingDTO
	>({
		requestURL: `/viewings/${viewing._id}`,
		axiosRequestMethod: "put",
		queryKey: ["viewings"],
		successMsg: "Viewing updated successfully",
		onSuccess: () => {
			UpdateViewingForm.reset();
		},
	});

	const UpdateViewingSchema = viewingSchema.pick({
		date: true,
		time: true,
		notes: true,
		status: true,
	});

	const UpdateViewingForm = useForm<TUpdateViewingDTO>({
		resolver: zodResolver(UpdateViewingSchema),
		defaultValues: {
			date: new Date(viewing.date),
			time: viewing.time,
			notes: viewing.notes,
			status: viewing.status,
		},
	});

	const onUpdateViewing = (values: TUpdateViewingDTO) => {
		mutate(values);
	};

	return {
		UpdateViewingForm,
		onUpdateViewing,
		isLoadingUpdateViewing: isPending,
		errorUpdateViewing: error,
	};
};
