import { useEffect, useRef } from "react";
import { PropertyCard } from "./property-card";
import PropertyImage from "@/assets/imgs/property.webp";
import { useGetInfiniteProperties } from "../hooks/useGetInfiniteProperties";
import { Skeleton } from "@/components/ui/skeleton";
import { PropertyFilters } from "./property-filters/property-filters";

export const PropertyListing = () => {
	const {
		properties,
		isLoading,
		error,
		hasNextPage,
		fetchNextPage,
		isFetchingNextPage,
	} = useGetInfiniteProperties();

	const observerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				const [target] = entries;
				if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
					fetchNextPage();
				}
			},
			{ threshold: 0.1 }
		);

		if (observerRef.current) {
			observer.observe(observerRef.current);
		}

		return () => observer.disconnect();
	}, [hasNextPage, isFetchingNextPage, fetchNextPage]);

	if (isLoading) {
		return (
			<div className="py-10 mt-16 flex">
				<div className="container">
					<div className=" mb-10">
						<div className="text-5xl font-bold w-fit mx-auto">
							<span className="text-blue">
								Our <span className="text-main-blue font-bold">Properties</span>
							</span>
						</div>
					</div>
					<PropertyFilters />
					<div className="grid grid-cols-1 gap-4">
						{Array.from({ length: 5 }).map((_, index) => (
							<Skeleton
								key={index}
								className="w-full h-[300px] rounded-lg bg-gray-300"
							/>
						))}
					</div>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="py-10 flex">
				<div className="container">
					<div className=" mb-10">
						<div className="text-5xl font-bold w-fit mx-auto">
							<span className="text-blue">
								Our <span className="text-main-blue font-bold">Properties</span>
							</span>
						</div>
					</div>
					<PropertyFilters />
					<div className="text-center py-10">
						<p className="text-lg text-red-600">Error loading properties</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="py-32 flex">
			<div className="container">
				<div className=" mb-10">
					<div className="text-5xl font-bold w-fit mx-auto">
						<span className="text-blue">
							Our <span className="text-main-blue font-bold">Properties</span>
						</span>
					</div>
				</div>
				<PropertyFilters />

				{properties && properties.length > 0 ? (
					<div className="grid grid-cols-1 gap-4">
						{properties.map(property => (
							<PropertyCard
								key={property._id}
								{...property}
								image={[PropertyImage]}
							/>
						))}

						<div ref={observerRef} className="h-4" />

						{isFetchingNextPage && (
							<div className="text-center py-4">
								<p className="text-gray-600">Loading more properties...</p>
							</div>
						)}

						{!hasNextPage && properties.length > 0 && (
							<div className="text-center py-4">
								<p className="text-gray-600">No more properties to load</p>
							</div>
						)}
					</div>
				) : (
					<div className="text-center py-10">
						<p className="text-lg text-gray-600">No properties found</p>
					</div>
				)}
			</div>
		</div>
	);
};
