import { z } from "zod";

export const viewingSchema = z.object({
	propertyId: z.string().min(1, { message: "Property is required" }),
	clientId: z.string().min(1, { message: "Client is required" }),
	date: z.date(),
	time: z.string().min(1, { message: "Time is required" }),
	notes: z.union([z.string(), z.null()]).optional(),
	status: z.enum(["scheduled", "completed", "cancelled"]),
});

export type TCreateViewingDTO = z.infer<typeof viewingSchema>;
export type TUpdateViewingDTO = Omit<
	TCreateViewingDTO,
	"clientId" | "propertyId"
>;
