import { formatCurrency } from "@/shared/utils/formatCurrecny";
import type { TPropertyDTO } from "../types/property.types";
import { FaBath, FaBed, FaPhone } from "react-icons/fa6";
import { TbRulerMeasure2 } from "react-icons/tb";
import { FaMapPin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { CreateClientInquiry } from "@/features/clients/components/create-client-inquirty/create-client-inquiry";
import { Link } from "react-router-dom";
import propertyImage from "@/assets/imgs/property.webp";
export const PropertyCard = (property: TPropertyDTO) => {
	return (
		<Link to={`/properties/${property._id}`}>
			<div className="flex flex-col lg:flex-row gap-0 rounded-lg bg-white shadow-lg dark:bg-neutral-900">
				<img
					src={propertyImage}
					alt="PROPERTY IMAGE"
					className="rounded-l-2xl h-full object-cover w-full lg:w-[500px]"
				/>

				<div className="flex flex-col gap-4 p-8 w-full">
					<div className="flex items-center justify-between">
						<div className="text-2xl font-bold">
							{formatCurrency(property.price)}
						</div>
						<div
							className={`uppercase font-bold border rounded-full px-4 py-1 ${
								property.type === "sale" ? "bg-[#f74343]" : "bg-main-blue"
							}  text-white`}
						>
							{property.type}
						</div>
					</div>
					<div className="capitalize text-gray-500">
						{property.propertyType}
					</div>
					<div className="flex items-center gap-10">
						<div className="flex items-center gap-2">
							<FaBed size={20} />
							<div>
								{property.bedrooms === 0
									? "Studio"
									: `${property.bedrooms} ${
											property.bedrooms > 1 ? "Beds" : "Bed"
									  }`}
							</div>
						</div>
						<div className="flex items-center gap-2">
							<FaBath size={20} />
							<div>
								{property.bathrooms} {property.bathrooms > 1 ? "Baths" : "Bath"}
							</div>
						</div>
						<div className="flex items-center gap-2">
							<TbRulerMeasure2 size={20} />
							<div>{property.area} Sqft </div>
						</div>
					</div>

					<div className="text-lg font-semibold">{property.title}</div>
					<div className="flex items-center gap-1">
						<FaMapPin size={20} />
						<div className="text-sm font-semibold capitalize">
							{property.location}
						</div>
					</div>

					<div className="flex items-center xl:justify-between flex-wrap gap-6 w-fit dark:text-black">
						<div className="flex items-center gap-2 bg-[#ecf8eb] py-2 px-4 rounded-lg w-fit">
							<FaWhatsapp fill="green" size={20} />
							<div className="text-sm font-semibold">Whatsapp</div>
						</div>

						<CreateClientInquiry id={property._id ?? ""} />
						<div className="flex items-center gap-2 bg-[#fff6f4] #fff6f4 py-2 px-4 rounded-lg w-fit">
							<FaPhone fill="#f74343" size={20} />
							<div className="text-sm font-semibold">Phone</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};
