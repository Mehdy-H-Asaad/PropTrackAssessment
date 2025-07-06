import { Property } from "../../models/property.model";
import { NEXT, REQUEST, RESPONSE, EStatus } from "../../types/server.types";
import { ApiError } from "../../utils/api-error";
import { TUpdatePropertyDTO } from "../../types/property/property.types";

export const updateProperty = async (
	req: REQUEST,
	res: RESPONSE,
	next: NEXT
) => {
	const { id } = req.params;

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
	}: TUpdatePropertyDTO = req.body;

	try {
		if (id === undefined) {
			throw new ApiError(400, "Property ID is required");
		}

		if (
			bedrooms !== undefined &&
			(typeof bedrooms !== "number" || bedrooms < 0)
		) {
			throw new ApiError(400, "Bedrooms must be a non-negative number");
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
			status: EStatus.SUCCESS,
			data: property,
		});
	} catch (error) {
		next(error);
	}
};
