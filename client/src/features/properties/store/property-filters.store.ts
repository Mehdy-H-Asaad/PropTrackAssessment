import { create } from "zustand";

type TPropertyFiltersDTO = {
	// page?: number;
	// limit?: number;
	type?: string;
	minPrice?: number;
	maxPrice?: number;
	location?: string;
	propertyType?: string;
	bedrooms?: number;
	bathrooms?: number;
	area?: number;
};

type TPropertyFiltersStore = {
	filters: TPropertyFiltersDTO;
	setFilters: (filters: TPropertyFiltersDTO) => void;
};

export const usePropertyFiltersStore = create<TPropertyFiltersStore>(set => ({
	filters: {},
	setFilters: filters => set({ filters }),
}));
