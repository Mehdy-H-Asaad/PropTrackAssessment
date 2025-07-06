import {
	Dialog,
	DialogTitle,
	DialogHeader,
	DialogContent,
	DialogTrigger,
	DialogFooter,
	DialogDescription,
} from "@/components/ui/dialog";
import { useCreateClientInquiry } from "../../index";
import { Form, FormControl, FormLabel } from "@/components/ui/form";
import { FormField, FormMessage } from "@/components/ui/form";
import { FormItem } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { MainButton } from "@/components/common/main-button";
import { FaEnvelope } from "react-icons/fa6";

export const CreateClientInquiry = ({ id }: { id: string }) => {
	const {
		CreateClientInquiryForm,
		onCreateClientInquiry,
		isCreateClientInquiryPending,
	} = useCreateClientInquiry(id);
	return (
		<Dialog>
			<DialogTrigger className="bg-[#f0f6fe] flex items-center gap-2  py-2 px-4 rounded-lg w-fit">
				<FaEnvelope fill="#4e4ef0" size={20} />
				<div className="text-sm font-semibold">Send Inquiry</div>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Create Inquiry</DialogTitle>
					<DialogDescription>
						Enter your information to contact you about the property as soon as
						possible.
					</DialogDescription>
				</DialogHeader>
				<Form {...CreateClientInquiryForm}>
					<form
						className="grid gap-4"
						onSubmit={CreateClientInquiryForm.handleSubmit(
							onCreateClientInquiry
						)}
					>
						<FormField
							control={CreateClientInquiryForm.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Full Name</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Full Name" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={CreateClientInquiryForm.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Email" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={CreateClientInquiryForm.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Phone" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={CreateClientInquiryForm.control}
							name="message"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Message</FormLabel>
									<FormControl>
										<Textarea {...field} placeholder="Message" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<DialogFooter>
							<MainButton
								type="submit"
								disabled={
									isCreateClientInquiryPending ||
									!CreateClientInquiryForm.formState.isValid
								}
							>
								{isCreateClientInquiryPending
									? "Submitting..."
									: "Submit Inquiry"}
							</MainButton>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};
