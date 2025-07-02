import { Schema, model } from "mongoose";

export const propertySchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		type: {
			type: String,
			enum: ["rent", "sale"],
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
		image: {
			type: [String],
			required: true,
		},
		amenities: {
			type: [String],
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		active: {
			type: Boolean,
			default: true,
		},
		propertyType: {
			type: String,
			enum: ["apartment", "villa", "office", "shop", "land"],
			required: true,
		},
		bedrooms: {
			type: Number,
			required: true,
		},
		bathrooms: {
			type: Number,
			required: true,
		},
		area: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

export const Property = model("Property", propertySchema);
