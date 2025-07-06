import { Schema, Types, model } from "mongoose";

const viewingSchema = new Schema(
	{
		propertyId: { type: Types.ObjectId, ref: "Property", required: true },
		clientId: { type: Types.ObjectId, ref: "Client", required: true },
		date: { type: Date, required: true },
		time: { type: String, required: true },
		status: {
			type: String,
			enum: ["scheduled", "completed", "cancelled"],
			default: "scheduled",
		},
		notes: { type: String },
	},
	{ timestamps: true }
);

export const Viewing = model("Viewing", viewingSchema);
