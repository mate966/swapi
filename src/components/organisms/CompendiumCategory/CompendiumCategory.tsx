import { CompendiumTile } from '@/components/molecules/CompendiumTile/CompendiumTile';
import { Filters } from '@/components/molecules/Filters/Filters';
import { LoadMoreButton } from '@/components/molecules/LoadMoreButton/LoadMoreButton';
import { SortButton } from '@/components/molecules/SortButton/SortButton';
import { useCompendiumData } from '@/hooks/useCompendiumData/useCompendiumData';
import { useCompendiumSortAndFilter } from '@/hooks/useCompendiumSortAndFilter/useCompendiumSortAndFilter';
import { CompendiumCategoryProps } from './types';

export const CompendiumCategory = ({ block }: CompendiumCategoryProps) => {
    const { category } = block;
    const { categoryData, loading, error, loadMore } = useCompendiumData(category);

    const {
        sortDirection,
        toggleSortDirection,
        activeFilters,
        availableFilters,
        handleFilterChange,
        filteredAndSortedData,
    } = useCompendiumSortAndFilter(category, categoryData);

    if (error) {
        return <div className="text-center text-red-600 p-4">{error}</div>;
    }

    return (
        <div className="space-y-6">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="text-2xl font-bold capitalize">{category}</h2>
                <SortButton sortDirection={sortDirection} onSortChange={toggleSortDirection} />
            </header>

            <Filters
                availableFilters={availableFilters}
                activeFilters={activeFilters}
                onFilterChange={handleFilterChange}
            />

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredAndSortedData.map((item, index) => (
                    <CompendiumTile key={`${category}-${index}`} item={item} category={category} />
                ))}
            </section>

            {loading && <p className="text-center text-gray-600">Loading...</p>}

            {!loading && filteredAndSortedData.length === 0 && (
                <p className="text-center text-gray-500">No results for selected filters</p>
            )}

            <LoadMoreButton
                onLoadMore={loadMore}
                disabled={loading || filteredAndSortedData.length === 0}
            />
        </div>
    );
};
