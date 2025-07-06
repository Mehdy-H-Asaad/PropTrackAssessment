import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { FormMessage } from "@/components/ui/form";
import { MainButton } from "@/components/common/main-button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { TPropertyDTO } from "../../types/property.types";
import { useUpdateProperty } from "../../hooks/useUpdateProperty";

export const UpdatePropertyStatus = ({
	property,
}: {
	property: TPropertyDTO;
}) => {
	const { UpdatePropertyForm, isUpdatePropertyPending, onUpdateProperty } =
		useUpdateProperty(property);

	return (
		<Dialog>
			<DialogTrigger className="w-full" asChild>
				<MainButton>Update Status</MainButton>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Update Property Status</DialogTitle>
					<DialogDescription>
						Update the status of the property
					</DialogDescription>
				</DialogHeader>
				<Form {...UpdatePropertyForm}>
					<form
						className="grid gap-4"
						onSubmit={UpdatePropertyForm.handleSubmit(onUpdateProperty)}
					>
						<FormField
							control={UpdatePropertyForm.control}
							name="active"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Active</FormLabel>
									<Select
										value={field.value ? "true" : "false"}
										onValueChange={value => field.onChange(value === "true")}
									>
										<FormControl>
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Select a status" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="true">Active</SelectItem>
											<SelectItem value="false">Inactive</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<DialogFooter>
							<MainButton
								disabled={
									isUpdatePropertyPending ||
									!UpdatePropertyForm.formState.isValid
								}
								isLoading={isUpdatePropertyPending}
								loadingText="Updating Property Status"
								type="submit"
							>
								Update Property Status
							</MainButton>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};
