import { SortDirection } from '@/components/organisms/CompendiumCategory/types';

export interface SortButtonProps {
    sortDirection: SortDirection;
    onSortChange: () => void;
}
