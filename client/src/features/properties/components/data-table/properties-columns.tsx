"use client";
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
import { TPropertyDTO } from "../../types/property.types";
import { formatCurrency } from "@/shared/utils/formatCurrecny";
import { DeleteDialog } from "@/components/common/delete-dialog";
import { useDeleteProperty } from "../../hooks/useDeleteProperty";
import { MainButton } from "@/components/common/main-button";
import { Link } from "react-router-dom";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { UpdatePropertyStatus } from "../update-property/update-property-status";

export const PropertiesColumns: ColumnDef<TPropertyDTO>[] = [
	{
		accessorKey: "title",
		header: "Property",
		cell: ({ row }) => {
			return (
				<Link className="text-sm" to={`/properties/${row.original._id}`}>
					<div className="truncate max-w-40 bg-purple-800 hover:bg-purple-900 font-bold text-white px-2 py-2 w-fit rounded-md text-xs text-center">
						{row.original.title}
					</div>
				</Link>
			);
		},
	},
	{
		accessorKey: "propertyType",
		header: "Property Type",
		cell: ({ row }) => {
			return <div className="capitalize">{row.original.propertyType}</div>;
		},
	},
	{
		accessorKey: "price",
		header: "Price",
		cell: ({ row }) => {
			return (
				<div className="w-fit font-bold text-green-600 bg-green-100 py-1 px-3 rounded-full flex items-center justify-center">
					{formatCurrency(row.original.price)}
				</div>
			);
		},
	},
	{
		accessorKey: "location",
		header: "Location",
		cell: ({ row }) => {
			return <div className="capitalize">{row.original.location}</div>;
		},
	},
	{
		accessorKey: "type",
		header: "Type",
		cell: ({ row }) => {
			return <div className="capitalize">{row.original.type}</div>;
		},
	},
	{
		accessorKey: "bedrooms",
		header: "Beds",
		cell: ({ row }) => {
			return (
				<div>
					{row.original.bedrooms === 0 ? "Studio" : row.original.bedrooms}
				</div>
			);
		},
	},
	{
		accessorKey: "bathrooms",
		header: "Baths",
	},
	{
		accessorKey: "area",
		header: "Area",
		cell: ({ row }) => {
			return <div>{row.original.area} sqft</div>;
		},
	},
	{
		accessorKey: "createdAt",
		header: "Posted On",
		cell: ({ row }) => {
			return (
				<div>
					{row.original.createdAt
						? new Date(row.original.createdAt).toLocaleDateString()
						: ""}
				</div>
			);
		},
	},
	{
		accessorKey: "active",
		header: "Status",
		cell: ({ row }) => {
			return (
				<div
					className={`uppercase px-2 py-1 rounded-md text-xs font-semibold w-fit ${
						row.original.active
							? "bg-green-500 text-white"
							: "bg-red-500 text-white"
					}`}
				>
					{row.original.active ? "Active" : "Inactive"}
				</div>
			);
		},
	},
	{
		id: "actions",
		header: "Actions",
		cell: ({ row }) => {
			const property = row.original;

			const { deleteProperty, isDeletePropertyPending } = useDeleteProperty(
				property._id!
			);
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

						<DeleteDialog
							deleteFunc={deleteProperty}
							isLoading={isDeletePropertyPending}
							trigger="Delete Property"
						/>

						<div className="my-2">
							<Dialog>
								<DialogTrigger asChild>
									<MainButton className="w-full">View Amenities</MainButton>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>Amenities</DialogTitle>
									</DialogHeader>
									<DialogDescription>
										View the amenities of the property
									</DialogDescription>
									<div className="grid grid-cols-4 gap-2">
										{row.original.amenities?.map(
											(amenity: { value: string }) => (
												<div
													className="bg-gray-200 flex items-center justify-center text-sm dark:bg-neutral-200 dark:text-black px-4 text-center py-1 rounded-md"
													key={amenity.value}
												>
													{amenity.value}
												</div>
											)
										)}
									</div>
								</DialogContent>
							</Dialog>
						</div>

						<div className="my-2">
							<UpdatePropertyStatus property={row.original} />
						</div>

						<Link to={`/dashboard/properties/update/${property._id}`}>
							<MainButton>Update Property</MainButton>
						</Link>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
