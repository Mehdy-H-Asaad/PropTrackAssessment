import { Property } from "../../models/property.model";
import { Client } from "../../models/client.model";
import { Viewing } from "../../models/viewings.model";
import { NEXT, REQUEST, RESPONSE, EStatus } from "../../types/server.types";
import { ApiError } from "../../utils/api-error";

export const deleteProperty = async (
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

		const deletedClients = await Client.deleteMany({ propertyId: id });

		const deletedViewings = await Viewing.deleteMany({ propertyId: id });

		await Property.findByIdAndDelete(id);

		res.status(200).json({
			status: EStatus.SUCCESS,
			message: "Property and all related data deleted successfully",
			data: {
				deletedProperty: property.title,
				deletedClients: deletedClients.deletedCount,
				deletedViewings: deletedViewings.deletedCount,
			},
		});
	} catch (error) {
		next(error);
	}
};
