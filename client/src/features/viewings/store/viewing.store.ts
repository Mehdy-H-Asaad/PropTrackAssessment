import { create } from "zustand";

type TViewingFilters = {
	status: string;
};

export const useViewingsFiltersStore = create<ViewingsFiltersStore>(set => ({
	filters: {
		status: "",
	},
	setFilters: filters => set({ filters }),
}));

type ViewingsFiltersStore = {
	filters: TViewingFilters;
	setFilters: (filters: TViewingFilters) => void;
};
