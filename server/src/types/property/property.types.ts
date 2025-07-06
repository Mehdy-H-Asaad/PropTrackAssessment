export type TPropertyDTO = {
	_id?: string;
	title: string;
	description: string;
	price: number;
	type: string;
	location: string;
	amenities: string[];
	propertyType: string;
	bedrooms: number;
	bathrooms: number;
	area: number;
	active: boolean;
	createdAt: Date;
	updatedAt: Date;
};

export type TCreatePropertyDTO = Omit<
	TPropertyDTO,
	"createdAt" | "updatedAt" | "active" | "_id"
>;

export type TUpdatePropertyDTO = Omit<
	TPropertyDTO,
	"createdAt" | "updatedAt" | "_id"
>;
