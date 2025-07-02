import { PropertyCard } from "@/features/properties/components/property-card";
import PropertyImage from "@/assets/imgs/property.webp";
import { useGetProperties } from "@/features/properties/hooks/useGetProperties";
import { Skeleton } from "@/components/ui/skeleton";
import { PropertyFilters } from "@/features/properties/components/property-filters";

export const HomePropertyListing = () => {
	const { properties, isLoadingProperties } = useGetProperties();

	return (
		<div className="py-10 flex">
			<div className="container">
				<div className="text-4xl font-bold">Property Listing</div>

				<PropertyFilters />

				{isLoadingProperties ? (
					<div className="grid grid-cols-1 gap-4">
						{Array.from({ length: 10 }).map((_, index) => (
							<Skeleton
								key={index}
								className="w-full h-[300px] rounded-lg bg-gray-300"
							/>
						))}
					</div>
				) : properties && properties.length > 0 ? (
					<div className="grid grid-cols-1 gap-4">
						{properties.map(property => (
							<PropertyCard
								key={property._id}
								{...property}
								image={[PropertyImage]}
							/>
						))}
					</div>
				) : (
					<div className="text-center py-10">
						<p className="text-lg text-gray-600">
							No properties found matching your criteria.
						</p>
						<p className="text-sm text-gray-500 mt-2">
							Try adjusting your filters or clearing them to see all properties.
						</p>
					</div>
				)}
			</div>
		</div>
	);
};
