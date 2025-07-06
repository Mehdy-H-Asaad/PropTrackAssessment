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
import { TClientInquiryDTO } from "../../types/client.types";
import { Link } from "react-router-dom";
import { CreateViewing } from "@/features/viewings";
import { AICreateViewing } from "@/features/viewings";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { MainButton } from "@/components/common/main-button";

export const ClientsColumns: ColumnDef<TClientInquiryDTO>[] = [
	{
		accessorKey: "name",
		header: "Client Name",
	},
	{
		accessorKey: "email",
		header: "Email",
	},
	{
		accessorKey: "phone",
		header: "Phone",
	},
	{
		accessorKey: "property",
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
						<CreateViewing
							client={row.original}
							property={row.original.propertyId}
						/>

						<div className="my-2">
							<Dialog>
								<DialogTrigger asChild>
									<MainButton className="w-full">View Message</MainButton>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>Message</DialogTitle>
									</DialogHeader>
									<DialogDescription>{row.original.message}</DialogDescription>
								</DialogContent>
							</Dialog>
						</div>

						<AICreateViewing
							client={row.original}
							property={row.original.propertyId}
						/>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
