import { useCreateProperty } from "../../hooks/useCreateProperty";

import { PropertyForm } from "../property-form/property-form";

export const CreateProperty = () => {
	const { CreatePropertyForm, onCreateProperty, isCreatePropertyPending } =
		useCreateProperty();

	return (
		<div className="pt-4">
			<h1 className="text-4xl font-bold mb-6">Create Property</h1>
			<PropertyForm
				form={CreatePropertyForm}
				isLoading={isCreatePropertyPending}
				onMutate={onCreateProperty}
				mode="create"
			/>
		</div>
	);
};
