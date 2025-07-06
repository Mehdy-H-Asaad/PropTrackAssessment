import { Property } from "../../models/property.model";
import { EStatus, NEXT, REQUEST, RESPONSE } from "../../types/server.types";
import { ApiError } from "../../utils/api-error";

export const getSuggestedProperties = async (
	req: REQUEST,
	res: RESPONSE,
	next: NEXT
) => {
	const { id } = req.params;
	try {
		const property = await Property.findById(id);

		if (!property) {
			throw new ApiError(404, "Property not found");
		}

		const suggestedProperties = await Property.find({
			_id: { $ne: id },
			propertyType: property.propertyType,
			location: property.location,
			price: { $gte: property.price - 10000, $lte: property.price + 10000 },
		});

		res.status(200).json({
			status: EStatus.SUCCESS,
			data: suggestedProperties,
		});
	} catch (error) {
		next(error);
	}
};
