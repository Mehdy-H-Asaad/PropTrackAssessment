import { Client } from "../../models/client.model";
import { Property } from "../../models/property.model";
import { Viewing } from "../../models/viewings.model";
import { AIService } from "../../services/ai.service";
import { EStatus, NEXT, REQUEST, RESPONSE } from "../../types/server.types";
import { ApiError } from "../../utils/api-error";

const aiService = new AIService();

export const generateViewing = async (
	req: REQUEST,
	res: RESPONSE,
	next: NEXT
) => {
	const { prompt, clientId, propertyId } = req.body;

	try {
		if (!prompt || !clientId || !propertyId) {
			throw new ApiError(400, "Prompt, clientId, and propertyId are required");
		}

		// Validate client and property exist
		const client = await Client.findById(clientId);
		const property = await Property.findById(propertyId);

		if (!client) {
			throw new ApiError(404, "Client not found");
		}

		if (!property) {
			throw new ApiError(404, "Property not found");
		}

		// Extract viewing details using AI
		const extractedDetails = await aiService.extractViewingDetails(prompt);

		// Create the viewing with extracted details
		const viewing = await Viewing.create({
			propertyId: property._id,
			clientId: client._id,
			date: extractedDetails.date,
			time: extractedDetails.time,
			notes: extractedDetails.notes,
		});

		// Populate the viewing with client and property details
		const populatedViewing = await Viewing.findById(viewing._id)
			.populate("propertyId")
			.populate("clientId");

		res.status(201).json({
			status: EStatus.SUCCESS,
			message: "Viewing generated successfully using AI",
			data: {
				viewing: populatedViewing,
				extractedDetails,
			},
		});
	} catch (error) {
		next(error);
	}
};
