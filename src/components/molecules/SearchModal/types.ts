export interface SearchResult {
    id: string;
    name: string;
    category: 'characters' | 'planets' | 'films' | 'species' | 'starships' | 'vehicles';
    description?: string;
}
