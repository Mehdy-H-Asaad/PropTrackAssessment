import { useParams } from "react-router-dom";
import { useGetSingleProperty } from "../../hooks/useGetSingleProperty";

import { useEffect, useState } from "react";
import { formatCurrency } from "@/shared/utils/formatCurrecny";
import { FaBed, FaBath, FaMapPin, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { TbRulerMeasure2 } from "react-icons/tb";
import { CreateClientInquiry } from "@/features/clients/components/create-client-inquirty/create-client-inquiry";
import { SuggestedProperties } from "../suggested-properties/suggested-properties";
import { PropertySkeleton } from "../property-skeleton";
import { StackedPropertyImage } from "./stacked-property-image";
import { NotFound } from "@/components/common";

export const SingleProperty = () => {
	const { id } = useParams<{ id: string }>();
	const [open, setOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	if (!id) {
		return <div>Property not found</div>;
	}

	const { property, isLoadingProperty } = useGetSingleProperty(id);

	const handleOpen = (img: string) => {
		setSelectedImage(img);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setSelectedImage(null);
	};

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });
	}, []);

	if (!property) {
		return (
			<div className="py-10">
				<div className="container">
					<NotFound />
				</div>
			</div>
		);
	}

	if (isLoadingProperty) {
		return <PropertySkeleton />;
	}

	const postedOn = property.createdAt
		? new Date(property.createdAt).toLocaleDateString()
		: "";

	return (
		<div className="py-10 mt-16">
			{open && (
				<div className="fixed inset-0 z-50 flex items-center justify-center">
					<div
						className="absolute inset-0 bg-black/40 backdrop-blur-sm"
						onClick={handleClose}
					/>
					<div className="relative z-10 flex items-center justify-center">
						<img
							src={selectedImage ?? ""}
							alt="Property Large"
							className="max-h-[80vh] max-w-full rounded-lg shadow-lg"
						/>
					</div>
				</div>
			)}
			<div className="container">
				<div className="flex flex-col gap-10">
					<StackedPropertyImage handleOpen={handleOpen} />
					<div className="flex flex-col gap-4">
						<div className=" text-gray-500">Posted on: {postedOn}</div>
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
									{property.bathrooms}{" "}
									{property.bathrooms > 1 ? "Baths" : "Bath"}
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
						<div className="flex items-center justify-between gap-6 w-fit dark:text-black">
							<div className="flex items-center gap-2 bg-[#ecf8eb] py-2 px-4 rounded-lg w-fit">
								<FaWhatsapp fill="green" size={20} />
								<div className="text-sm font-semibold">Whatsapp</div>
							</div>

							<CreateClientInquiry id={id} />
							<div className="flex items-center gap-2 bg-[#fff6f4] #fff6f4 py-2 px-4 rounded-lg w-fit">
								<FaPhone fill="#f74343" size={20} />
								<div className="text-sm font-semibold">Phone</div>
							</div>
						</div>
						<article className="leading-8 my-6">
							<span className="text-3xl font-semibold">Description: </span>
							<div>{property.description}</div>
						</article>
						<hr />
						<div className="flex flex-col gap-4">
							<div className="text-2xl font-semibold">Amenities</div>
							<div className="flex items-center gap-2">
								{property.amenities?.map((amenity: { value: string }) => (
									<div
										className="size-30 dark:bg-neutral-200 dark:text-black text-sm rounded-2xl flex items-center justify-center font-semibold bg-neutral-200"
										key={amenity.value}
									>
										{amenity.value}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<SuggestedProperties propertyId={id} />
			</div>
		</div>
	);
};
