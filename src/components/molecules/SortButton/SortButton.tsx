import { SortButtonProps } from './sortButton.types';

export const SortButton = ({ sortDirection, onSortChange }: SortButtonProps) => {
    return (
        <button
            onClick={onSortChange}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
            Sortuj {sortDirection === 'asc' ? 'A-Z' : 'Z-A'}
        </button>
    );
};
