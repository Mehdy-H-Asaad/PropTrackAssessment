export type TViewingDTO = {
	_id?: string;
	propertyId: string;
	date: Date;
	time: string;
	clientId: string;
	notes: string;
	status: string;
	createdAt?: Date;
	updatedAt?: Date;
};

export type TCreateViewingDTO = Omit<
	TViewingDTO,
	"createdAt" | "updatedAt" | "_id" | "status"
>;

export type TUpdateViewingDTO = Omit<
	TViewingDTO,
	"createdAt" | "updatedAt" | "_id"
>;
