import { Schema, Types, model } from "mongoose";

export const clientSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		viewings: [{ type: Types.ObjectId, ref: "Viewing" }],
	},
	{ timestamps: true }
);

export const Client = model("Client", clientSchema);
