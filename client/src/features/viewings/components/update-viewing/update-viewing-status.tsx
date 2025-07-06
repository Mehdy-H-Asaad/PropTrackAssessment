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
import { TViewingDTO } from "../../types/viewing.types";
import { useUpdateViewings } from "../../index";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export const UpdateViewingStatus = (viewing: TViewingDTO) => {
	const { UpdateViewingForm, isLoadingUpdateViewing, onUpdateViewing } =
		useUpdateViewings(viewing);

	return (
		<Dialog>
			<DialogTrigger className="w-full" asChild>
				<MainButton>Update Viewing Status</MainButton>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Update Viewing Status</DialogTitle>
					<DialogDescription>
						Update the status of the viewing
					</DialogDescription>
				</DialogHeader>
				<Form {...UpdateViewingForm}>
					<form
						className="grid gap-4"
						onSubmit={UpdateViewingForm.handleSubmit(onUpdateViewing)}
					>
						<FormField
							control={UpdateViewingForm.control}
							name="status"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Status</FormLabel>
									<Select value={field.value} onValueChange={field.onChange}>
										<FormControl>
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Select a status" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="scheduled">Scheduled</SelectItem>
											<SelectItem value="completed">Completed</SelectItem>
											<SelectItem value="cancelled">Cancelled</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<DialogFooter>
							<MainButton
								disabled={
									isLoadingUpdateViewing || !UpdateViewingForm.formState.isValid
								}
								isLoading={isLoadingUpdateViewing}
								loadingText="Updating Viewing Status"
								type="submit"
							>
								Update Viewing Status
							</MainButton>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};
