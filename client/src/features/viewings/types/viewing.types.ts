import { TClientInquiryDTO } from "@/features/clients/types/client.types";
import { TPropertyDTO } from "@/features/properties/types/property.types";

export type TViewingDTO = {
	_id?: string;
	propertyId: TPropertyDTO;
	clientId: TClientInquiryDTO;
	date: Date;
	time: string;
	status: "scheduled" | "completed" | "cancelled";
	notes: string | null;
};
