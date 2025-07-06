import { ColumnDef } from "@tanstack/react-table";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { TViewingDTO } from "../../types/viewing.types";
import { UpdateViewing, UpdateViewingStatus } from "../../index";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { MainButton } from "@/components/common/main-button";
import { formatTime } from "@/shared/utils/formatTime";

export const ViewingsColumns: ColumnDef<TViewingDTO>[] = [
	{
		accessorFn: row => row.clientId.name || "",
		id: "client-name",
		header: "Client Name",
		cell: ({ row }) => {
			return <span>{row.original.clientId.name}</span>;
		},
	},
	{
		accessorKey: "propertyId",
		header: "Property",
		cell: ({ row }) => {
			return (
				<Link
					className="text-sm"
					to={`/properties/${row.original.propertyId._id}`}
				>
					<Button className="text-xs bg-purple-800 hover:bg-purple-900 font-bold dark:text-white">
						{row.original.propertyId.title}
					</Button>
				</Link>
			);
		},
	},
	{
		accessorKey: "date",
		header: "Date",
		cell: ({ row }) => {
			return <span>{new Date(row.original.date).toLocaleDateString()}</span>;
		},
	},
	{
		accessorKey: "time",
		header: "Time",
		cell: ({ row }) => {
			return <span className="uppercase">{formatTime(row.original.time)}</span>;
		},
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => {
			return (
				<span
					className={`uppercase px-2 py-1 rounded-md text-xs font-semibold ${
						row.original.status === "scheduled"
							? "bg-orange-500 text-white"
							: row.original.status === "completed"
							? "bg-green-500 text-white"
							: "bg-red-500 text-white"
					}`}
				>
					{row.original.status}
				</span>
			);
		},
	},
	{
		id: "actions",
		header: "Actions",
		cell: ({ row }) => {
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Options</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<UpdateViewing viewing={row.original} />
						<div className="my-2">
							<Dialog>
								<DialogTrigger className="w-full" asChild>
									<MainButton>View Notes</MainButton>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>Notes</DialogTitle>
									</DialogHeader>
									<DialogDescription>
										{row.original.notes || "No Notes"}
									</DialogDescription>
								</DialogContent>
							</Dialog>
						</div>
						<UpdateViewingStatus {...row.original} />
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
