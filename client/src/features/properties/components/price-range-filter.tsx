import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePropertyFiltersStore } from "../store/property-filters.store";
import { useEffect, useRef, useState } from "react";
import { formatNumber } from "@/shared/utils/formatNumber";

export const PriceRange = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const priceRangeRef = useRef<HTMLDivElement>(null);
	const handleOpen = () => {
		setIsOpen(!isOpen);
	};
	const { filters, setFilters } = usePropertyFiltersStore();

	const [minPrice, setMinPrice] = useState(filters.minPrice);
	const [maxPrice, setMaxPrice] = useState(filters.maxPrice);

	const handleApply = () => {
		setFilters({
			...filters,
			minPrice: minPrice || undefined,
			maxPrice: maxPrice || undefined,
		});
		setIsOpen(false);
	};
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				priceRangeRef.current &&
				!priceRangeRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	return (
		<div className="space-y-2 relative" ref={priceRangeRef}>
			<Label>Price Range</Label>
			<Button
				className="border w-full bg-white justify-start hover:bg-white text-[#737373]"
				onClick={handleOpen}
			>
				{minPrice && maxPrice
					? `${formatNumber(minPrice)} - ${formatNumber(maxPrice)}`
					: "Price Range"}
			</Button>
			{isOpen && (
				<div className="flex flex-col justify-center gap-4 absolute -bottom-50 right-0 bg-[#f9f9f9] p-4 w-80 z-100">
					<div className="text-lg font-semibold">Price Range</div>

					<div className="flex items-center gap-4">
						<div className="flex flex-col gap-2">
							<Label>Min Price</Label>
							<Input
								type="text"
								onChange={e => {
									const value = e.target.value.replace(/,/g, "");
									setMinPrice(Number(value) || 0);
								}}
								value={minPrice ? formatNumber(minPrice) : ""}
								placeholder="Min Price"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<Label>Max Price</Label>
							<Input
								type="text"
								onChange={e => {
									const value = e.target.value.replace(/,/g, "");
									setMaxPrice(Number(value) || 0);
								}}
								value={maxPrice ? formatNumber(maxPrice) : ""}
								placeholder="Max Price"
							/>
						</div>
					</div>
					<hr />
					<Button className="bg-[#333] text-white" onClick={handleApply}>
						Apply
					</Button>
				</div>
			)}
		</div>
	);
};
