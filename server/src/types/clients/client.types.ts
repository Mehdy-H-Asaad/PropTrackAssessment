export type TClientDTO = {
	_id?: string;
	name: string;
	email: string;
	phone: string;
	message: string;
	propertyId: string;
	createdAt?: Date;
	updatedAt?: Date;
};

export type TCreateClientDTO = Omit<
	TClientDTO,
	"createdAt" | "updatedAt" | "_id"
>;

export type TUpdateClientDTO = Omit<
	TClientDTO,
	"createdAt" | "updatedAt" | "_id"
>;
