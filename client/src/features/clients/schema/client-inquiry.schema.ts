import { z } from "zod";

export const clientInquirySchema = z.object({
	message: z.string().min(1, { message: "Message is required" }),
	email: z.string().email({ message: "Invalid email address" }).min(1, {
		message: "Email is required",
	}),
	name: z.string().min(1, { message: "Name is required" }),
	phone: z.string().min(1, { message: "Phone is required" }),
});

export type TCreateClientInquiryDTO = z.infer<typeof clientInquirySchema>;
