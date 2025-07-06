import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { propertySchema } from "../schema/property.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { TPropertyDTO, TUpdatePropertyDTO } from "../types/property.types";

export const useUpdateProperty = (property: TPropertyDTO) => {
	const { mutate, isPending } = useApiMutation<
		TPropertyDTO,
		TUpdatePropertyDTO
	>({
		axiosRequestMethod: "put",
		queryKey: ["properties"],
		requestURL: `/properties/${property._id}`,
		successMsg: "Property Updated successfully",
	});

	const UpdatePropertySchema = propertySchema;

	const UpdatePropertyForm = useForm<TUpdatePropertyDTO>({
		resolver: zodResolver(UpdatePropertySchema),
		defaultValues: {
			description: property.description,
			price: property.price,
			amenities: property.amenities || [
				{
					value: "",
				},
			],
			bedrooms: property.bedrooms,
			bathrooms: property.bathrooms,
			area: property.area,
			propertyType: property.propertyType,
			location: property.location,
			image: property.image || [],
			type: property.type,
			active: property.active,
			title: property.title,
		},
	});

	const onUpdateProperty = (values: TUpdatePropertyDTO) => {
		mutate({
			...values,
		});
	};

	return {
		UpdatePropertyForm,
		onUpdateProperty,
		isUpdatePropertyPending: isPending,
	};
};
