import { Property } from "../../models/property.model";
import { NEXT, REQUEST, RESPONSE, TStatus } from "../../types/server.types";

export const deleteProperty = async (
	req: REQUEST,
	res: RESPONSE,
	next: NEXT
) => {
	const { id } = req.params;
	try {
		await Property.findByIdAndDelete(id);
		res.status(200).json({
			status: TStatus.SUCCESS,
			message: "Property deleted successfully",
		});
	} catch (error) {
		next(error);
	}
};
