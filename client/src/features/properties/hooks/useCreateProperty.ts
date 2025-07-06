import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { propertySchema, TCreatePropertyDTO } from "../schema/property.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TPropertyDTO } from "../types/property.types";

export const useCreateProperty = () => {
	const { mutate, isPending } = useApiMutation<
		TPropertyDTO,
		TCreatePropertyDTO
	>({
		axiosRequestMethod: "post",
		queryKey: ["properties"],
		requestURL: "/properties",
		successMsg: "Property created successfully",
		onSuccess: () => {
			CreatePropertyForm.reset();
		},
	});

	const CreatePropertySchema = propertySchema;

	const CreatePropertyForm = useForm<TCreatePropertyDTO>({
		resolver: zodResolver(CreatePropertySchema),
		defaultValues: {
			description: "",
			price: undefined,
			amenities: [
				{
					value: "",
				},
			],
			bedrooms: undefined,
			bathrooms: undefined,
			area: undefined,
			propertyType: undefined,
			location: "",
			image: [],
			type: undefined,
			active: true,
			title: "",
		},
	});

	const onCreateProperty = (values: TCreatePropertyDTO) => {
		mutate({ ...values });
	};

	return {
		CreatePropertyForm,
		onCreateProperty,
		isCreatePropertyPending: isPending,
	};
};
