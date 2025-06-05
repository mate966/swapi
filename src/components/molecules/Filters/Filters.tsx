import { FilterSectionProps } from './filters.types';

export const Filters = ({
    availableFilters,
    activeFilters,
    onFilterChange,
}: FilterSectionProps) => {
    if (Object.keys(availableFilters).length === 0) return null;

    return (
        <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Filtry</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(availableFilters).map(([filterKey, filterValues]) => (
                    <div key={filterKey} className="space-y-2">
                        <h4 className="font-medium capitalize">{filterKey.replace('_', ' ')}</h4>
                        <div className="flex flex-wrap gap-2">
                            {filterValues.map(value => (
                                <button
                                    key={value}
                                    onClick={() => onFilterChange(filterKey, value)}
                                    className={`px-3 py-1 rounded-full text-sm ${
                                        activeFilters[filterKey]?.includes(value)
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                >
                                    {value}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
