import { Schema, Types, model } from "mongoose";

export const clientSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
		propertyId: {
			type: Types.ObjectId,
			ref: "Property",
			required: true,
		},
	},
	{ timestamps: true }
);

export const Client = model("Client", clientSchema);
