import { Property } from "../../models/property.model";
import { NEXT, REQUEST, RESPONSE, EStatus } from "../../types/server.types";
import { ApiError } from "../../utils/api-error";

export const getSingleProperty = async (
	req: REQUEST,
	res: RESPONSE,
	next: NEXT
) => {
	try {
		const { id } = req.params;

		const property = await Property.findById(id);

		if (!property) {
			throw new ApiError(404, "Property not found");
		}

		res.status(200).json({
			status: EStatus.SUCCESS,
			data: property,
		});
	} catch (error) {
		next(error);
	}
};
