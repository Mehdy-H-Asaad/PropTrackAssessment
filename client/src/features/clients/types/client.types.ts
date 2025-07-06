import { TPropertyDTO } from "@/features/properties/types/property.types";

export type TClientInquiryDTO = {
	_id?: string;
	message: string;
	email: string;
	name: string;
	phone: string;
	propertyId: TPropertyDTO;
};
