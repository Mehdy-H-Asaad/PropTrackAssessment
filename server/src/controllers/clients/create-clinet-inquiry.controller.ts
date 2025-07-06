import { Client } from "../../models/client.model";
import { NEXT, REQUEST, RESPONSE, EStatus } from "../../types/server.types";
import { ApiError } from "../../utils/api-error";

export const createClientInquiry = async (
	req: REQUEST,
	res: RESPONSE,
	next: NEXT
) => {
	const { name, email, phone, message } = req.body;

	try {
		if (!name || !email || !phone || !message) {
			throw new ApiError(400, "All fields are required");
		}

		const client = await Client.create({ name, email, phone, message });
		res.status(201).json({
			status: EStatus.SUCCESS,
			message: "Client inquiry created successfully",
			client,
		});
	} catch (error) {
		next(error);
	}
};
