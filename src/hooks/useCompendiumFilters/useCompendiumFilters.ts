import { FIELD_MAPPING, FILTER_OPTIONS } from '@/components/organisms/CompendiumCategory/constants';
import { CompendiumCategory as CategoryType } from '@/store/types/compendium/compendium.types';
import { useMemo, useState } from 'react';
import { ActiveFilters, CompendiumItem } from '../../components/organisms/CompendiumCategory/types';

import { AvailableFilters } from '@/components/molecules/Filters/filters.types';

export const useCompendiumFilters = (category: CategoryType, categoryData: CompendiumItem[]) => {
    const [activeFilters, setActiveFilters] = useState<ActiveFilters>({});

    const availableFilters = useMemo(() => {
        if (categoryData.length === 0) return {};

        const filters: AvailableFilters = {};

        Object.entries(FILTER_OPTIONS[category as keyof typeof FILTER_OPTIONS]).forEach(
            ([filterKey, possibleValues]) => {
                const apiField = FIELD_MAPPING[filterKey];
                if (!apiField) {
                    console.log(`Filter not found: ${filterKey}`);
                    return;
                }

                const uniqueValues = new Set<string>();

                categoryData.forEach(item => {
                    const value = item[apiField as keyof typeof item];
                    if (value) {
                        if (Array.isArray(value)) {
                            value.forEach(v => uniqueValues.add(String(v).toLowerCase()));
                        } else {
                            String(value)
                                .split(',')
                                .forEach(v => uniqueValues.add(v.trim().toLowerCase()));
                        }
                    }
                });

                const availableValues = (possibleValues as string[]).filter(possibleValue => {
                    const possibleValueLower = possibleValue.toLowerCase();
                    return Array.from(uniqueValues).some(
                        actualValue =>
                            actualValue === possibleValueLower ||
                            actualValue.includes(possibleValueLower) ||
                            possibleValueLower.includes(actualValue),
                    );
                });

                if (availableValues.length > 0) {
                    filters[filterKey] = availableValues;
                }
            },
        );

        return filters;
    }, [category, categoryData]);

    const handleFilterChange = (filterKey: string, value: string) => {
        setActiveFilters(prev => {
            const currentValues = prev[filterKey] || [];
            const newValues = currentValues.includes(value)
                ? currentValues.filter(v => v !== value)
                : [...currentValues, value];

            return {
                ...prev,
                [filterKey]: newValues,
            };
        });
    };

    const filterData = (data: CompendiumItem[]) => {
        let result = [...data];

        Object.entries(activeFilters).forEach(([filterKey, filterValues]) => {
            if (filterValues.length > 0) {
                const apiField = FIELD_MAPPING[filterKey];
                if (!apiField) return;

                result = result.filter(item => {
                    const itemValue = item[apiField as keyof typeof item];
                    if (!itemValue) return false;

                    const itemValues = Array.isArray(itemValue)
                        ? itemValue.map(v => String(v).toLowerCase())
                        : [String(itemValue).toLowerCase()];

                    return filterValues.some(filterValue => {
                        const filterValueLower = filterValue.toLowerCase();
                        return itemValues.some(itemValue => itemValue === filterValueLower);
                    });
                });
            }
        });

        return result;
    };

    return {
        activeFilters,
        availableFilters,
        handleFilterChange,
        filterData,
    };
};
