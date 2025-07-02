import { Property } from "../../models/property.model";
import { NEXT, REQUEST, RESPONSE, TStatus } from "../../types/server.types";
import { ApiError } from "../../utils/api-error";

export const updateProperty = async (
	req: REQUEST,
	res: RESPONSE,
	next: NEXT
) => {
	const { id } = req.params;
	console.log(id);
	const {
		title,
		description,
		price,
		type,
		location,
		amenities,
		active,
		propertyType,
		bedrooms,
		bathrooms,
		area,
	} = req.body;

	try {
		if (id === undefined) {
			throw new ApiError(400, "Property ID is required");
		}

		const property = await Property.findByIdAndUpdate(
			id,
			{
				title,
				description,
				price,
				type,
				location,
				amenities,
				active,
				propertyType,
				bedrooms,
				bathrooms,
				area,
			},
			{ new: true }
		);
		res.status(200).json({
			status: TStatus.SUCCESS,
			data: property,
		});
	} catch (error) {
		next(error);
	}
};
