import { Viewing } from "../../models/viewings.model";
import { EStatus, NEXT, REQUEST, RESPONSE } from "../../types/server.types";

export const getViewings = async (req: REQUEST, res: RESPONSE, next: NEXT) => {
	const { status } = req.query;
	try {
		const query: Record<string, any> = {};

		if (status) {
			query.status = status;
		}

		const viewings = await Viewing.find(query)
			.populate({
				path: "propertyId",
			})
			.populate({
				path: "clientId",
			});

		res.status(200).json({
			status: EStatus.SUCCESS,
			data: viewings,
		});
	} catch (error) {
		next(error);
	}
};
