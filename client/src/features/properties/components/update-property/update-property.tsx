import { useParams } from "react-router-dom";
import { useGetSingleProperty } from "../../hooks/useGetSingleProperty";
import { TPropertyDTO } from "../../types/property.types";
import { useEffect } from "react";
import { PropertyForm } from "../property-form/property-form";
import { useUpdateProperty } from "../../hooks/useUpdateProperty";
import { Skeleton } from "@/components/ui/skeleton";

export const UpdateProperty = () => {
	const { id } = useParams();

	const { property, isLoadingProperty } = useGetSingleProperty(id ?? "");

	useEffect(() => {
		if (property) {
			UpdatePropertyForm.reset(property);
		}
	}, [property]);

	const { UpdatePropertyForm, onUpdateProperty, isUpdatePropertyPending } =
		useUpdateProperty(property ?? ({} as TPropertyDTO));

	return (
		<div className="pt-4">
			<h1 className="text-4xl font-bold mb-6">Update Property</h1>
			{isLoadingProperty ? (
				<Skeleton className="w-full h-[34rem] my-10 bg-neutral-200" />
			) : (
				<PropertyForm
					form={UpdatePropertyForm}
					isLoading={isUpdatePropertyPending}
					onMutate={onUpdateProperty}
					mode="update"
				/>
			)}
		</div>
	);
};
