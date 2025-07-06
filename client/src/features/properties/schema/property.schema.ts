import { z } from "zod";

export const propertySchema = z.object({
	description: z.string().min(1),
	price: z.number().min(1),
	amenities: z
		.array(
			z.object({
				value: z.string().min(1),
			})
		)
		.optional(),
	bedrooms: z.number().min(0),
	bathrooms: z.number().min(0),
	area: z.number().min(1),
	propertyType: z.enum(["apartment", "villa", "house"]),
	location: z.string().min(1),
	image: z.array(z.string()).optional(),
	type: z.enum(["sale", "rent"]),
	active: z.boolean().optional(),
	title: z.string().min(1),
});

export type TCreatePropertyDTO = z.infer<typeof propertySchema>;
