import { Person } from '@/services/api';
export interface CharactersState {
    characters: Person[];
    loading: boolean;
    error: string | null;
    currentPage: number;
    totalPages: number;
}
