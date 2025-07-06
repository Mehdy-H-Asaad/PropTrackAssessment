import { Client } from "../../models/client.model";
import { Property } from "../../models/property.model";
import { Viewing } from "../../models/viewings.model";
import { EStatus, NEXT, REQUEST, RESPONSE } from "../../types/server.types";
import { ApiError } from "../../utils/api-error";
import { TCreateViewingDTO } from "../../types/viewings/viewing.types";

export const createViewing = async (
	req: REQUEST,
	res: RESPONSE,
	next: NEXT
) => {
	const { propertyId, date, time, clientId, notes }: TCreateViewingDTO =
		req.body;

	try {
		if (!propertyId || !date || !time || !clientId) {
			throw new ApiError(400, "All fields are required");
		}

		const property = await Property.findById(propertyId);

		const client = await Client.findById(clientId);

		if (!client) {
			throw new ApiError(400, "Client not found");
		}

		if (!property) {
			throw new ApiError(400, "Property not found");
		}

		const viewing = await Viewing.create({
			propertyId: property._id,
			date,
			time,
			clientId: client._id,
			notes,
		});

		res.status(201).json({
			status: EStatus.SUCCESS,
			message: "Viewing created successfully",
			data: viewing,
		});
	} catch (error) {
		next(error);
	}
};
