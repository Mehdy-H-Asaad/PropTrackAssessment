import { Button } from "@/components/ui/button";
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	SortingState,
	getSortedRowModel,
	VisibilityState,
	ColumnFiltersState,
	getFilteredRowModel,
	useReactTable,
	PaginationState,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	pagination?: PaginationState;
	isLoading?: boolean;
	pageCount?: number;
	setPagination?: React.Dispatch<React.SetStateAction<PaginationState>>;
	skeletonRows: number;
	searchablePlaceholder: string;
	searchableField: string;
	children?: React.ReactNode;
	manualPagination?: boolean;
}

export function DataTable<TData, TValue>({
	columns,
	data,
	pagination,
	setPagination,
	pageCount,
	isLoading,
	searchablePlaceholder,
	searchableField,
	skeletonRows,
	children,
	manualPagination = true,
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = useState<SortingState>([]);

	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

	const [rowSelection, setRowSelection] = useState({});

	const table = manualPagination
		? useReactTable({
				data,
				columns,
				pageCount: pageCount,
				manualPagination: manualPagination,
				onPaginationChange: setPagination,
				getCoreRowModel: getCoreRowModel(),
				getPaginationRowModel: getPaginationRowModel(),
				onSortingChange: setSorting,
				getSortedRowModel: getSortedRowModel(),
				onColumnFiltersChange: setColumnFilters,
				getFilteredRowModel: getFilteredRowModel(),
				onColumnVisibilityChange: setColumnVisibility,
				state: {
					pagination,
					sorting,
					columnFilters,
					columnVisibility,
					rowSelection,
				},
				onRowSelectionChange: setRowSelection,
		  })
		: useReactTable({
				data,
				columns,
				getCoreRowModel: getCoreRowModel(),
				getPaginationRowModel: getPaginationRowModel(),

				onSortingChange: setSorting,
				getSortedRowModel: getSortedRowModel(),
				onColumnFiltersChange: setColumnFilters,
				getFilteredRowModel: getFilteredRowModel(),
				onColumnVisibilityChange: setColumnVisibility,
				state: {
					sorting,
					columnFilters,
					columnVisibility,
					rowSelection,
				},
				onRowSelectionChange: setRowSelection,
		  });

	return (
		<div className="w-full rounded-md">
			<div className="flex items-center justify-between w-full flex-wrap">
				<Input
					placeholder={searchablePlaceholder}
					value={
						(table.getColumn(searchableField)?.getFilterValue() as string) ?? ""
					}
					onChange={event =>
						table.getColumn(searchableField)?.setFilterValue(event.target.value)
					}
					className="max-w-sm w-60 bg-transparent border-gray-500 my-6"
				/>
				{children}
			</div>
			{isLoading ? (
				<Skeleton className="w-full h-[34rem] my-0 bg-neutral-200" />
			) : (
				<>
					<div className="rounded-md border border-gray-500">
						<Table>
							<TableHeader>
								{table.getHeaderGroups().map(headerGroup => (
									<TableRow
										className=" rounded-md border border-gray-500"
										key={headerGroup.id}
									>
										{headerGroup.headers.map(header => {
											return (
												<TableHead className="rtl:text-right" key={header.id}>
													{header.isPlaceholder
														? null
														: flexRender(
																header.column.columnDef.header,
																header.getContext()
														  )}
												</TableHead>
											);
										})}
									</TableRow>
								))}
							</TableHeader>
							<TableBody>
								{isLoading ? (
									<Skeleton className="w-full h-[34rem] my-10 bg-neutral-200" />
								) : table.getRowModel().rows?.length ? (
									table.getRowModel().rows.map(row => (
										<TableRow
											className="rounded-md border border-gray-500"
											key={row.id}
											data-state={row.getIsSelected() && "selected"}
										>
											{row.getVisibleCells().map(cell => (
												<TableCell key={cell.id}>
													{flexRender(
														cell.column.columnDef.cell,
														cell.getContext()
													)}
												</TableCell>
											))}
										</TableRow>
									))
								) : (
									<TableRow>
										<TableCell
											colSpan={columns.length}
											className="h-24 text-center"
										>
											No results.
										</TableCell>
									</TableRow>
								)}
							</TableBody>
						</Table>
					</div>
					<div className="flex items-center justify-end space-x-2 py-4">
						<Button
							className="bg-transparent hover:bg-black hover:text-white duration-200 border dark:text-white text-black border-gray-500 cursor-pointer"
							size="sm"
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}
						>
							Previous
						</Button>
						<Button
							className="bg-transparent hover:bg-black hover:text-white duration-200 border dark:text-white text-black border-gray-500 cursor-pointer"
							size="sm"
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage()}
						>
							Next
						</Button>
					</div>
				</>
			)}
		</div>
	);
}
