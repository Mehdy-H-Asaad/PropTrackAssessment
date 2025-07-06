import { Client } from "../../models/client.model";
import { NEXT, REQUEST, RESPONSE, EStatus } from "../../types/server.types";

export const getClientsInquiries = async (
	req: REQUEST,
	res: RESPONSE,
	next: NEXT
) => {
	const { page, limit } = req.query;
	try {
		const pageNumber = Number(page) || 1;
		const limitNumber = Number(limit) || 10;
		const skip = (pageNumber - 1) * limitNumber;

		const query: Record<string, any> = {};

		const clients = await Client.find(query)
			.skip(skip)
			.limit(limitNumber)
			.populate("propertyId");

		res.status(200).json({
			status: EStatus.SUCCESS,
			data: clients,
		});
	} catch (error) {
		next(error);
	}
};
