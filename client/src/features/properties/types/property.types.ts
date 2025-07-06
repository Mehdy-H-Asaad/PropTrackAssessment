export type TPropertyDTO = {
	_id?: string;
	title: string;
	image?: string[];
	type: "sale" | "rent";
	price: number;
	description: string;
	location: string;
	amenities?: {
		value: string;
	}[];
	active?: boolean;
	bedrooms: number;
	bathrooms: number;
	area: number;
	propertyType: "apartment" | "villa" | "house";
	createdAt?: Date;
	updatedAt?: Date;
};

export type TUpdatePropertyDTO = Omit<TPropertyDTO, "createdAt" | "updatedAt">;
