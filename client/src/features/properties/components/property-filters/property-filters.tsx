import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { usePropertyFiltersStore } from "../../store/property-filters.store";
import {
	BATHROOM_OPTIONS,
	BEDROOM_OPTIONS,
	LOCATIONS_OPTIONS,
	PROPERTY_CATEGORIES,
	PROPERTY_TYPES,
} from "../../data/property.data";
import { PriceRange } from "./price-range-filter";

export const PropertyFilters = () => {
	const { filters, setFilters } = usePropertyFiltersStore();

	const clearFilters = () => {
		setFilters({});
	};

	return (
		<div className="my-4 rounded-lg bg-white dark:bg-main-dark dark:text-white p-8">
			<div className="flex justify-between items-center mb-6">
				<h3 className="text-lg font-semibold">Filter Properties</h3>

				<Button
					disabled={Object.keys(filters).length === 0}
					className="bg-black text-white py-2 px-4 font-semibold capitalize rounded-full"
					onClick={clearFilters}
				>
					Clear Filters
				</Button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
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

				{/* Property Category */}
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

				{/* Price Range */}

				{/* Location */}
				<div className="space-y-2">
					<Label>Location</Label>
					<Select
						value={filters.location || ""}
						onValueChange={value => setFilters({ ...filters, location: value })}
					>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Sale/Rent" />
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

				<PriceRange />
			</div>
		</div>
	);
};
