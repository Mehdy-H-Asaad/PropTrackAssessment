import { Client } from "../../models/client.model";
import { Property } from "../../models/property.model";
import { NEXT, REQUEST, RESPONSE, EStatus } from "../../types/server.types";
import { ApiError } from "../../utils/api-error";
import { TCreateClientDTO } from "../../types/clients/client.types";

export const createClientInquiry = async (
	req: REQUEST,
	res: RESPONSE,
	next: NEXT
) => {
	const { id } = req.params;

	const { name, email, phone, message }: TCreateClientDTO = req.body;

	try {
		if (!name || !email || !phone || !message) {
			throw new ApiError(400, "All fields are required");
		}

		if (!id) {
			throw new ApiError(400, "Property ID is required");
		}

		const property = await Property.findById(id);

		if (!property) {
			throw new ApiError(400, "Property not found");
		}

		const client = await Client.create({
			name,
			email,
			phone,
			message,
			propertyId: id,
		});

		await client.save();

		res.status(201).json({
			status: EStatus.SUCCESS,
			message: "Client inquiry created successfully",
			data: client,
		});
	} catch (error) {
		next(error);
	}
};
