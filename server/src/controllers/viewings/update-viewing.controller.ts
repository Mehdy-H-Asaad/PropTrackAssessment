import { Viewing } from "../../models/viewings.model";
import { EStatus, NEXT, REQUEST, RESPONSE } from "../../types/server.types";
import { ApiError } from "../../utils/api-error";
import { TUpdateViewingDTO } from "../../types/viewings/viewing.types";

export const updateViewing = async (
	req: REQUEST,
	res: RESPONSE,
	next: NEXT
) => {
	const { id } = req.params;

	const { date, time, status, notes }: TUpdateViewingDTO = req.body;

	try {
		if (!id) {
			throw new ApiError(400, "Viewing ID is required");
		}

		const viewing = await Viewing.findByIdAndUpdate(id, {
			date,
			time,
			status,
			notes,
			new: true,
		});

		if (!viewing) {
			throw new ApiError(400, "Viewing not found");
		}

		res.status(200).json({
			status: EStatus.SUCCESS,
			message: "Viewing updated successfully",
			data: viewing,
		});
	} catch (error) {
		next(error);
	}
};
