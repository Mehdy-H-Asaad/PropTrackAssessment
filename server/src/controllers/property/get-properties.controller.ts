import { Property } from "../../models/property.model";
import { NEXT, REQUEST, RESPONSE, EStatus } from "../../types/server.types";

export const getProperties = async (
	req: REQUEST,
	res: RESPONSE,
	next: NEXT
) => {
	const {
		page,
		limit,
		type,
		minPrice,
		maxPrice,
		location,
		propertyType,
		bedrooms,
		bathrooms,
		area,
		active,
	} = req.query;

	const { pagination = "false" } = req.query;
	const usePagination = pagination !== "false";

	const pageNumber = Number(page) || 1;
	const limitNumber = Number(limit) || 10;
	const skip = (pageNumber - 1) * limitNumber;

	const query: Record<string, any> = {};

	if (type && (type === "rent" || type === "sale")) {
		query.type = type;
	}
	if (location && typeof location === "string" && location.trim() !== "") {
		query.location = { $regex: location.trim(), $options: "i" };
	}
	if (
		propertyType &&
		typeof propertyType === "string" &&
		propertyType.trim() !== ""
	) {
		query.propertyType = { $regex: propertyType.trim(), $options: "i" };
	}
	if (bedrooms !== undefined && !isNaN(Number(bedrooms))) {
		query.bedrooms = Number(bedrooms);
	}
	if (bathrooms && !isNaN(Number(bathrooms))) {
		query.bathrooms = Number(bathrooms);
	}
	if (area && !isNaN(Number(area))) {
		query.area = { $lte: Number(area) };
	}
	if (minPrice && !isNaN(Number(minPrice))) {
		query.price = { $gte: Number(minPrice) };
	}
	if (maxPrice && !isNaN(Number(maxPrice))) {
		query.price = { $lte: Number(maxPrice) };
	}
	if (minPrice && maxPrice) {
		query.price = { $gte: Number(minPrice), $lte: Number(maxPrice) };
	}
	if (active && typeof active === "string") {
		query.active = active === "true";
	}

	try {
		let properties, total;
		if (usePagination) {
			properties = await Property.find(query).skip(skip).limit(limitNumber);
			total = await Property.countDocuments(query);
		} else {
			properties = await Property.find(query);
			total = properties.length;
		}

		const response: any = {
			status: EStatus.SUCCESS,
			data: properties,
			totalResults: total,
		};
		if (usePagination) {
			response.totalPages = Math.ceil(total / limitNumber);
			response.page = pageNumber;
			response.limit = limitNumber;
		}

		res.status(200).json(response);
	} catch (error) {
		next(error);
	}
};
