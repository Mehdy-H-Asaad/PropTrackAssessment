import { Client } from "../../models/client.model";
import { NEXT, REQUEST, RESPONSE, TStatus } from "../../types/server.types";

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

		const clients = await Client.find(query).skip(skip).limit(limitNumber);

		res.status(200).json({
			status: TStatus.SUCCESS,
			message: "Clients inquiries fetched successfully",
			clients,
		});
	} catch (error) {
		next(error);
	}
};
