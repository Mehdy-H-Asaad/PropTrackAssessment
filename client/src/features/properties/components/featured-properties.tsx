import { motion, Variants } from "framer-motion";
import { useGetProperties } from "../hooks/useGetProperties";
import { PropertyCard } from "./property-card";
import { Skeleton } from "@/components/ui/skeleton";
import { useAnimationOptions } from "@/shared/hooks/useAnimationOptions";
import { MainButton } from "@/components/common/main-button";
import { Link } from "react-router-dom";

export const FeaturedProperties = () => {
	const { isInView, ref, textAnimation } = useAnimationOptions();

	const { properties, isLoadingProperties } = useGetProperties({
		limit: 3,
		page: 1,
		pagination: false,
	});

	return (
		<section className="py-20" id="properties">
			<div className="container">
				<div ref={ref}>
					<div className="overflow-hidden mb-10">
						<motion.div
							variants={textAnimation as unknown as Variants}
							initial="initial"
							animate={isInView ? "enter" : ""}
							className="text-5xl font-bold w-fit mx-auto"
						>
							<span className="text-blue">
								Featured{" "}
								<span className="text-main-blue font-bold">Properties</span>
							</span>
						</motion.div>
					</div>
				</div>
				{isLoadingProperties ? (
					<div className="grid grid-cols-1 gap-5">
						{Array.from({ length: 3 }).map((_, index) => (
							<Skeleton key={index} className="w-full h-64 bg-neutral-400" />
						))}
					</div>
				) : (
					<div className="grid grid-cols-1 gap-4 mt-10">
						{properties?.map(property => (
							<PropertyCard key={property._id} {...property} />
						))}
					</div>
				)}
				<div className="flex justify-center mt-10">
					<Link to="/properties">
						<MainButton>View All Properties</MainButton>
					</Link>
				</div>
			</div>
		</section>
	);
};
