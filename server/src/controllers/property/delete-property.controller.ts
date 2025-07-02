import { Property } from "../../models/property.model";
import { NEXT, REQUEST, RESPONSE, EStatus } from "../../types/server.types";

export const deleteProperty = async (
	req: REQUEST,
	res: RESPONSE,
	next: NEXT
) => {
	const { id } = req.params;
	try {
		await Property.findByIdAndDelete(id);
		res.status(200).json({
			status: EStatus.SUCCESS,
			message: "Property deleted successfully",
		});
	} catch (error) {
		next(error);
	}
};
