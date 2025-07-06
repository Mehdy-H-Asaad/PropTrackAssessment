import { Property } from "../../models/property.model";
import { NEXT, REQUEST, RESPONSE, EStatus } from "../../types/server.types";

export const getSingleProperty = async (
	req: REQUEST,
	res: RESPONSE,
	next: NEXT
) => {
	try {
		const { id } = req.params;

		const property = await Property.findById(id);

		res.status(200).json({ status: EStatus.SUCCESS, data: property });
	} catch (error) {
		next(error);
	}
};
