import { Property } from "../../models/property.model";
import { NEXT, REQUEST, RESPONSE, EStatus } from "../../types/server.types";
import { ApiError } from "../../utils/api-error";
import { TCreatePropertyDTO } from "../../types/property/property.types";

export const createProperty = async (
	req: REQUEST,
	res: RESPONSE,
	next: NEXT
) => {
	const {
		title,
		description,
		price,
		type,
		location,
		amenities,
		propertyType,
		bedrooms,
		bathrooms,
		area,
	}: TCreatePropertyDTO = req.body;

	try {
		if (
			!title ||
			!description ||
			!price ||
			!type ||
			!location ||
			!amenities ||
			!propertyType ||
			bedrooms === undefined ||
			!bathrooms ||
			!area
		) {
			throw new ApiError(400, "All fields are required");
		}

		if (price < 0) {
			throw new ApiError(400, "Price must be greater than 0");
		}

		if (typeof price !== "number") {
			throw new ApiError(400, "Price must be a number");
		}

		if (typeof bedrooms !== "number" || bedrooms < 0) {
			throw new ApiError(400, "Bedrooms must be a non-negative number");
		}

		const property = await Property.create({
			title,
			description,
			price,
			type,
			location,
			amenities,
			active: true,
			propertyType,
			bedrooms,
			bathrooms,
			area,
		});

		await property.save();

		res.status(201).json({
			status: EStatus.SUCCESS,
			message: "Property created successfully",
			data: property,
		});
	} catch (error) {
		next(error);
	}
};
