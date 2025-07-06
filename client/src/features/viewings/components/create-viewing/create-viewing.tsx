import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import { useCreateViewing } from "../../index";
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
import { TPropertyDTO } from "@/features/properties/types/property.types";
import { Textarea } from "@/components/ui/textarea";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { TClientInquiryDTO } from "@/features/clients/types/client.types";
type TCreateViewingProps = {
	property: TPropertyDTO;
	client: TClientInquiryDTO;
};

export const CreateViewing = ({ property, client }: TCreateViewingProps) => {
	const { CreateViewingForm, isLoadingCreateViewing, onCreateViewing } =
		useCreateViewing(client._id!, property._id!);

	return (
		<Dialog>
			<DialogTrigger className="w-full" asChild>
				<MainButton>Create Viewing</MainButton>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Create Viewing</DialogTitle>
					<DialogDescription>
						Create a new viewing for the client
					</DialogDescription>
				</DialogHeader>
				<Form {...CreateViewingForm}>
					<form
						className="grid gap-4"
						onSubmit={CreateViewingForm.handleSubmit(onCreateViewing)}
					>
						<FormField
							control={CreateViewingForm.control}
							name="clientId"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Client</FormLabel>
									<FormControl>
										<Input {...field} disabled value={client.name} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={CreateViewingForm.control}
							name="propertyId"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Property</FormLabel>
									<FormControl>
										<Input {...field} value={property.title} disabled />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={CreateViewingForm.control}
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
							control={CreateViewingForm.control}
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
							control={CreateViewingForm.control}
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
									isLoadingCreateViewing || !CreateViewingForm.formState.isValid
								}
								isLoading={isLoadingCreateViewing}
								loadingText="Creating Viewing"
								type="submit"
							>
								Create Viewing
							</MainButton>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};
