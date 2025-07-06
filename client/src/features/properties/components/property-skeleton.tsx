import { Skeleton } from "@/components/ui/skeleton";

export const PropertySkeleton = () => {
	return (
		<div className="py-10 mt-16">
			<div className="container">
				<div className="flex flex-col gap-10">
					<div className="flex flex-col md:flex-row gap-4 md:h-[400px]">
						<div className="md:w-2/3 w-full h-full">
							<Skeleton className="w-full h-full bg-neutral-400" />
						</div>
						<div className="md:w-1/3 w-full flex flex-col gap-2 h-[calc(100%-8px)]">
							<Skeleton className="w-full h-1/2 bg-neutral-400" />
							<Skeleton className="w-full h-1/2 bg-neutral-400" />
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-10 mt-10">
					<Skeleton className="w-96 h-10 bg-neutral-400" />
					<Skeleton className="w-40 h-10 bg-neutral-400" />
					<Skeleton className="w-60 h-10 bg-neutral-400" />
					<Skeleton className="w-full h-10 bg-neutral-400" />
				</div>
			</div>
		</div>
	);
};
