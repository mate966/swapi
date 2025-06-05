import { CompendiumItem, SortDirection } from '@/components/organisms/CompendiumCategory/types';
import { useCompendiumFilters } from '@/hooks/useCompendiumFilters/useCompendiumFilters';
import { CompendiumCategory as CategoryType } from '@/store/types/compendium/compendium.types';
import { useMemo, useState } from 'react';

export const useCompendiumSortAndFilter = (
    category: CategoryType,
    categoryData: CompendiumItem[],
) => {
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
    const { activeFilters, availableFilters, handleFilterChange, filterData } =
        useCompendiumFilters(category, categoryData);

    const filteredAndSortedData = useMemo(() => {
        const result = filterData(categoryData);

        return result.sort((a, b) => {
            const valueA = 'title' in a ? a.title : a.name;
            const valueB = 'title' in b ? b.title : b.name;
            const comparison = String(valueA)
                .toLowerCase()
                .localeCompare(String(valueB).toLowerCase());
            return sortDirection === 'asc' ? comparison : -comparison;
        });
    }, [categoryData, sortDirection, filterData]);

    const toggleSortDirection = () => {
        setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
    };

    return {
        sortDirection,
        toggleSortDirection,
        activeFilters,
        availableFilters,
        handleFilterChange,
        filteredAndSortedData,
    };
};
