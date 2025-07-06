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
import { Input } from "@/components/ui/input";
import { FormMessage } from "@/components/ui/form";
import { MainButton } from "@/components/common/main-button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { TViewingDTO } from "../../types/viewing.types";
import { useUpdateViewings } from "../../index";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

type TUpdateViewingProps = {
	viewing: TViewingDTO;
};

export const UpdateViewing = ({ viewing }: TUpdateViewingProps) => {
	const { UpdateViewingForm, isLoadingUpdateViewing, onUpdateViewing } =
		useUpdateViewings(viewing);

	return (
		<Dialog>
			<DialogTrigger className="w-full" asChild>
				<MainButton>Update Viewing</MainButton>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Update Viewing</DialogTitle>
					<DialogDescription>
						Update the viewing for the client
					</DialogDescription>
				</DialogHeader>
				<Form {...UpdateViewingForm}>
					<form
						className="grid gap-4"
						onSubmit={UpdateViewingForm.handleSubmit(onUpdateViewing)}
					>
						<FormField
							control={UpdateViewingForm.control}
							name="date"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Date</FormLabel>
									<Popover>
										<FormControl>
											<PopoverTrigger asChild>
												<Button
													variant="outline"
													data-empty={!field.value}
													className="data-[empty=true]:text-muted-foreground w-full justify-start text-left font-normal"
												>
													<CalendarIcon />
													{field.value ? (
														format(field.value, "PPP")
													) : (
														<span>Pick a date</span>
													)}
												</Button>
											</PopoverTrigger>
										</FormControl>
										<PopoverContent className="w-auto p-0">
											<Calendar
												mode="single"
												selected={field.value}
												onSelect={field.onChange}
											/>
										</PopoverContent>
									</Popover>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={UpdateViewingForm.control}
							name="time"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Time</FormLabel>
									<FormControl>
										<Input
											{...field}
											type="time"
											step="60"
											placeholder="12:00 PM"
											className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={UpdateViewingForm.control}
							name="notes"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Notes</FormLabel>
									<FormControl>
										<Textarea
											{...field}
											value={field.value ?? ""}
											placeholder="Notes"
										/>
									</FormControl>
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
								loadingText="Updating Viewing"
								type="submit"
							>
								Update Viewing
							</MainButton>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};
