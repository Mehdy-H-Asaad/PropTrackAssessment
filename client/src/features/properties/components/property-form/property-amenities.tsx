import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AiOutlineDelete } from "react-icons/ai";
import { TCreatePropertyDTO } from "../../schema/property.schema";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import { TUpdatePropertyDTO } from "../../types/property.types";
import {
	FormField,
	FormItem,
	FormControl,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

// Accept amenities and setAmenities as props
export const PropertyAmenities = ({
	form,
}: {
	form: UseFormReturn<TCreatePropertyDTO> | UseFormReturn<TUpdatePropertyDTO>;
}) => {
	const { fields, append, remove } = useFieldArray({
		control: form.control,
		name: "amenities",
	});

	return (
		<div className="bg-white dark:bg-background border p-8 rounded-lg gap-10">
			<div className="col-span-4 font-bold text-2xl">Amenities</div>
			<div className="grid grid-cols-4 gap-4 py-4">
				{fields.map((_, index) => (
					<div key={index} className="flex items-center gap-2">
						<FormField
							control={form.control}
							name={`amenities.${index}.value`}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Amenity</FormLabel>
									<FormControl className="flex items-center gap-2">
										<Input
											placeholder="Amenity"
											{...field}
											value={field.value ?? ""}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							className="hover:bg-red-500 hover:text-white duration-200 translate-y-2.5"
							type="button"
							variant="outline"
							onClick={() => remove(index)}
						>
							<AiOutlineDelete size={20} />
						</Button>
					</div>
				))}
			</div>
			<Button
				type="button"
				variant="outline"
				onClick={() => append({ value: "" })}
			>
				Add Amenity
			</Button>
		</div>
	);
};
