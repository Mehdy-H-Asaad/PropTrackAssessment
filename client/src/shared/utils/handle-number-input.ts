import { ChangeEvent } from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

type THandleNumberInput<T extends FieldValues> = {
	field: ControllerRenderProps<T>;
	event: ChangeEvent<HTMLInputElement>;
};

export const handleNumberInput = <T extends FieldValues>({
	field,
	event,
}: THandleNumberInput<T>) => {
	const { value } = event.target;
	const rawValue = value.replace(/,/g, "");

	if (rawValue === "") {
		field.onChange(null);
		return;
	}

	if (/^\d+$/.test(rawValue) && rawValue.length <= 8) {
		field.onChange(Number(rawValue));
	}
};
