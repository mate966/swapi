export type AvailableFilters = {
    [key: string]: string[];
};

export interface FilterSectionProps {
    availableFilters: AvailableFilters;
    activeFilters: Record<string, string[]>;
    onFilterChange: (filterKey: string, value: string) => void;
}
