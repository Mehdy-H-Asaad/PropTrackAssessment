import { Skeleton } from "@/components/ui/skeleton";
import {
	SuggestedPropertiesCard,
	useGetSuggestedProperties,
} from "../../index";

export const SuggestedProperties = ({ propertyId }: { propertyId: string }) => {
	const { suggestedProperties, isLoadingSuggestedProperties } =
		useGetSuggestedProperties(propertyId);

	return (
		<div className="mt-10">
			<h1 className="text-3xl font-bold mb-8">Related Properties</h1>

			{isLoadingSuggestedProperties ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4	">
					{Array.from({ length: 4 }).map((_, index) => (
						<Skeleton key={index} className="w-full h-[200px] rounded-lg" />
					))}
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{suggestedProperties?.map(property => (
						<SuggestedPropertiesCard key={property._id} {...property} />
					))}
				</div>
			)}
		</div>
	);
};
