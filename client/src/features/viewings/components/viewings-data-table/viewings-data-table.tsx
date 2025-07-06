import { DataTable } from "@/components/common/data-table";
import { ViewingsColumns } from "../../index";
import { useGetViewings } from "../../index";
import { ViewingsFilters } from "../../index";
import { Skeleton } from "@/components/ui/skeleton";

export const ViewingsDataTable = () => {
	const { viewings, isLoadingViewings } = useGetViewings();

	if (isLoadingViewings) {
		return <Skeleton className="w-full h-[34rem] my-10 bg-neutral-200" />;
	}
	return (
		<div>
			<DataTable
				columns={ViewingsColumns}
				data={viewings || []}
				searchableField="client-name"
				searchablePlaceholder="Search by client name"
				skeletonRows={10}
				manualPagination={false}
				isLoading={isLoadingViewings}
			>
				<ViewingsFilters />
			</DataTable>
		</div>
	);
};
