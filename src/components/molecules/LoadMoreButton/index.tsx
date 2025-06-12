import { LoadMoreButtonProps } from './types';

export const LoadMoreButton = ({ onLoadMore, disabled = false }: LoadMoreButtonProps) => {
    if (disabled) return null;

    return (
        <div className="mt-6 text-center">
            <button
                onClick={onLoadMore}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={disabled}
            >
                Load more
            </button>
        </div>
    );
};
