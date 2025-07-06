import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	BATHROOM_OPTIONS,
	BEDROOM_OPTIONS,
	LOCATIONS_OPTIONS,
	PROPERTY_CATEGORIES,
	PROPERTY_TYPES,
} from "../../data/property.data";
import { PriceRange } from "./price-range-filter";
import { usePropertyFiltersStore } from "../../store/property-filters.store";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaFilter } from "react-icons/fa6";

export const PropertiesTableFilters = () => {
	const { filters, setFilters } = usePropertyFiltersStore();

	return (
		<Dialog>
			<DialogTrigger className="mr-auto ml-4" asChild>
				<Button className="bg-black dark:bg-white dark:text-black flex items-center gap-2 text-white py-2 px-4 font-semibold capitalize">
					<FaFilter />
					<div>Filters</div>
				</Button>
			</DialogTrigger>

			<DialogContent className="max-w-4xl">
				<DialogHeader>
					<DialogTitle>Filter Properties</DialogTitle>
					<DialogDescription>
						Filter properties by type, purpose, location, bedrooms, bathrooms,
						and price.
					</DialogDescription>
				</DialogHeader>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full gap-4">
					{/* Property Type */}
					<div className="space-y-2">
						<Label>Property Type</Label>
						<Select
							value={filters.propertyType || ""}
							onValueChange={value =>
								setFilters({ ...filters, propertyType: value })
							}
						>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select type" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Property Types</SelectLabel>
									{PROPERTY_TYPES.map(type => (
										<SelectItem key={type.value} value={type.value}>
											{type.label}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>

					{/* Purpose */}
					<div className="space-y-2">
						<Label>Purpose</Label>
						<Select
							value={filters.type || ""}
							onValueChange={value => setFilters({ ...filters, type: value })}
						>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Sale/Rent" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									{PROPERTY_CATEGORIES.map(category => (
										<SelectItem key={category.value} value={category.value}>
											{category.label}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>

					{/* Location */}
					<div className="space-y-2">
						<Label>Location</Label>
						<Select
							value={filters.location || ""}
							onValueChange={value =>
								setFilters({ ...filters, location: value })
							}
						>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select location" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Locations</SelectLabel>
									{LOCATIONS_OPTIONS.map(location => (
										<SelectItem key={location.value} value={location.value}>
											{location.label}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>

					{/* Bedrooms */}
					<div className="space-y-2">
						<Label>Bedrooms</Label>
						<Select
							value={filters.bedrooms?.toString() || ""}
							onValueChange={value =>
								setFilters({ ...filters, bedrooms: Number(value) })
							}
						>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select bedrooms" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Bedrooms</SelectLabel>
									{BEDROOM_OPTIONS.map(bedrooms => (
										<SelectItem
											key={bedrooms.value}
											value={bedrooms.value.toString()}
										>
											{bedrooms.label}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>

					{/* Bathrooms */}
					<div className="space-y-2">
						<Label>Bathrooms</Label>
						<Select
							value={filters.bathrooms?.toString() || ""}
							onValueChange={value =>
								setFilters({ ...filters, bathrooms: Number(value) })
							}
						>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select bathrooms" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Bathrooms</SelectLabel>
									{BATHROOM_OPTIONS.map(bathrooms => (
										<SelectItem
											key={bathrooms.value}
											value={bathrooms.value.toString()}
										>
											{bathrooms.label}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>

					{/* Price Range */}
					<PriceRange />
				</div>
				<div className="flex justify-end">
					<Button onClick={() => setFilters({})}>Clear Filters</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
};
