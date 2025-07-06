import { DataTable } from "@/components/common/data-table";
import { PropertiesColumns } from "./properties-columns";
import { useGetProperties } from "../../hooks/useGetProperties";

import { MainButton } from "@/components/common/main-button";
import { Link } from "react-router-dom";
import { PropertiesTableFilters } from "../property-filters/properties-table-filters";
import { Skeleton } from "@/components/ui/skeleton";

export const PropertiesDataTable = () => {
	const { properties, isLoadingProperties } = useGetProperties({});

	// if (isLoadingProperties) {
	// 	return <Skeleton className="w-full h-[34rem] my-10 bg-neutral-200" />;
	// }

	return (
		<div>
			<DataTable
				columns={PropertiesColumns}
				data={properties || []}
				searchableField="title"
				searchablePlaceholder="Search by property name"
				skeletonRows={10}
				manualPagination={false}
				isLoading={true}
			>
				<PropertiesTableFilters />
				<Link
					className="flex items-center gap-2"
					to="/dashboard/properties/create"
				>
					<MainButton>Create Property</MainButton>
				</Link>
			</DataTable>
		</div>
	);
};
