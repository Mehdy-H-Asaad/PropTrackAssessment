import { formatCurrency } from "@/shared/utils/formatCurrecny";
import { TPropertyDTO } from "../../types/property.types";
import propertyImage from "@/assets/imgs/property.webp";
import { FaBath, FaBed, FaMapPin } from "react-icons/fa6";
import { TbRulerMeasure2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const SuggestedPropertiesCard = (property: TPropertyDTO) => {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });
	}, []);

	return (
		<Link
			to={`/properties/${property._id}`}
			className="flex flex-col gap-0 rounded-lg bg-white shadow-lg dark:bg-neutral-900"
		>
			<img
				src={propertyImage}
				alt="PROPERTY IMAGE"
				className="rounded-l-2xl h-full object-cover w-full"
			/>

			<div className="flex flex-col gap-6 p-4 w-full">
				<div className="text-2xl font-bold">{property.title}</div>
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
				<div className="flex items-center gap-1">
					<FaMapPin size={20} />
					<div className="text-sm font-semibold capitalize">
						{property.location}
					</div>
				</div>
			</div>
		</Link>
	);
};
