import { SearchIcon } from '@/components/ui/Icons/SearchIcon';

interface SearchButtonProps {
    onClick: () => void;
    className?: string;
}

export const SearchButton = ({ onClick, className = '' }: SearchButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors ${className}`}
            title="Search"
        >
            <SearchIcon className="w-5 h-5" />
        </button>
    );
};
