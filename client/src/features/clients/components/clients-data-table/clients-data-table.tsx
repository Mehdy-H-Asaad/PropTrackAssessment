import { DataTable } from "@/components/common/data-table";
import { ClientsColumns } from "../../index";
import { useGetClientsInquiries } from "../../index";
import { Skeleton } from "@/components/ui/skeleton";

export const ClientsDataTable = () => {
	const { clientsInquiries, isLoadingClientsInquiries } =
		useGetClientsInquiries();

	if (isLoadingClientsInquiries) {
		return <Skeleton className="w-full h-[34rem] my-10 bg-neutral-200" />;
	}
	return (
		<div>
			<DataTable
				columns={ClientsColumns}
				data={clientsInquiries || []}
				searchableField="name"
				searchablePlaceholder="Search by name"
				skeletonRows={10}
				manualPagination={false}
				isLoading={isLoadingClientsInquiries}
			/>
		</div>
	);
};
