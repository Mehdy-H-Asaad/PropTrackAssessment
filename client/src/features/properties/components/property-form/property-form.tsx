import { MainButton } from "@/components/common/main-button";
import {
	FormField,
	Form,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { handleNumberInput } from "@/shared/utils/handle-number-input";
import {
	BEDROOM_OPTIONS,
	BATHROOM_OPTIONS,
	PROPERTY_TYPES,
	PROPERTY_CATEGORIES,
	LOCATIONS_OPTIONS,
} from "../../data/property.data";
import { TUpdatePropertyDTO } from "../../types/property.types";
import { UseFormReturn } from "react-hook-form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { PropertyAmenities } from "./property-amenities";
import { TCreatePropertyDTO } from "../../schema/property.schema";
import { formatNumber } from "@/shared/utils/formatNumber";

type TPropertyGeneralInfoProps = {
	form: UseFormReturn<TUpdatePropertyDTO> | UseFormReturn<TCreatePropertyDTO>;

	isLoading: boolean;
	onMutate: (data: TUpdatePropertyDTO | TCreatePropertyDTO) => void;
	mode: "create" | "update";
};

export const PropertyForm = ({
	form,
	isLoading,
	onMutate,
	mode,
}: TPropertyGeneralInfoProps) => {
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onMutate)} className="grid gap-4">
				<div className="grid grid-cols-4 bg-white dark:bg-background border p-8 rounded-lg gap-x-8 gap-y-4">
					<div className="col-span-4 font-bold text-2xl">
						General Information
					</div>
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Title *</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Title"
										value={field.value ?? ""}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="price"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Price *</FormLabel>
								<FormControl>
									<Input
										{...field}
										onChange={event => handleNumberInput({ event, field })}
										value={
											typeof field.value === "number"
												? formatNumber(field.value)
												: field.value ?? ""
										}
										placeholder="Price"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="area"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Area *</FormLabel>
								<FormControl>
									<Input
										{...field}
										value={
											typeof field.value === "number"
												? formatNumber(field.value)
												: field.value ?? ""
										}
										onChange={event => handleNumberInput({ event, field })}
										placeholder="Area"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="bedrooms"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Bedrooms *</FormLabel>
								<Select
									onValueChange={value => field.onChange(Number(value))}
									value={field.value?.toString() ?? ""}
								>
									<FormControl>
										<SelectTrigger className="w-full">
											<SelectValue placeholder="Select Bedrooms" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{BEDROOM_OPTIONS.map(bedroom => (
											<SelectItem
												key={bedroom.value}
												value={bedroom.value.toString()}
											>
												{bedroom.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="bathrooms"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Bathrooms *</FormLabel>
								<Select
									onValueChange={value => field.onChange(Number(value))}
									value={field.value?.toString() ?? ""}
								>
									<FormControl>
										<SelectTrigger className="w-full">
											<SelectValue placeholder="Select Bathrooms" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{BATHROOM_OPTIONS.map(bathroom => (
											<SelectItem
												key={bathroom.value}
												value={bathroom.value.toString()}
											>
												{bathroom.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="propertyType"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Type *</FormLabel>
								<Select
									onValueChange={value => field.onChange(value)}
									value={field.value ?? ""}
								>
									<FormControl>
										<SelectTrigger className="w-full">
											<SelectValue placeholder="Select Type" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{PROPERTY_TYPES.map(type => (
											<SelectItem key={type.value} value={type.value}>
												{type.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="type"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Status *</FormLabel>
								<Select
									onValueChange={value => field.onChange(value)}
									value={field.value ?? ""}
								>
									<FormControl>
										<SelectTrigger className="w-full">
											<SelectValue placeholder="Select Status" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{PROPERTY_CATEGORIES.map(status => (
											<SelectItem key={status.value} value={status.value}>
												{status.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="location"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Location *</FormLabel>
								<Select
									onValueChange={field.onChange}
									value={field.value ?? ""}
								>
									<FormControl>
										<SelectTrigger className="w-full">
											<SelectValue placeholder="Select Location" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{LOCATIONS_OPTIONS.map(location => (
											<SelectItem key={location.value} value={location.value}>
												{location.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Description *</FormLabel>
								<FormControl>
									<Textarea
										{...field}
										className="w-96"
										placeholder="Description"
										value={field.value ?? ""}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="amenities"
					render={() => <PropertyAmenities form={form} />}
				/>
				<MainButton
					className="w-fit ml-auto"
					type="submit"
					disabled={
						isLoading ||
						!form.formState.isValid ||
						(mode === "update" && !form.formState.isDirty)
					}
				>
					{isLoading
						? mode === "create"
							? "Creating..."
							: "Updating..."
						: mode === "create"
						? "Create Property"
						: "Update Property"}
				</MainButton>
			</form>
		</Form>
	);
};
