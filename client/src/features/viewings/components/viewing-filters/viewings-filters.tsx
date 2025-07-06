import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useViewingsFiltersStore } from "../../index";

export const ViewingsFilters = () => {
	const { filters, setFilters } = useViewingsFiltersStore();

	return (
		<div>
			<Select
				value={filters.status || ""}
				onValueChange={value => setFilters({ ...filters, status: value })}
			>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Filter by status" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Status</SelectLabel>
						<SelectItem value="scheduled">Scheduled</SelectItem>
						<SelectItem value="completed">Completed</SelectItem>
						<SelectItem value="cancelled">Cancelled</SelectItem>
						<SelectItem value="all">All</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
};
