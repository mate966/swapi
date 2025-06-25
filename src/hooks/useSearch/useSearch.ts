import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '@/graphQL/queries/Characters/getCharacters';
import { GET_PLANETS } from '@/graphQL/queries/Planets/getPlanets';
import { GET_FILMS } from '@/graphQL/queries/Films/getFilms';
import { GET_SPECIES_FRAGMENT } from '@/graphQL/queries/Species/getSpeciesFragment';
import { GET_STARSHIPS } from '@/graphQL/queries/Starships/getStarships';
import { GET_VEHICLES } from '@/graphQL/queries/Vehicles/getVehicles';
import { SearchResult } from '@/components/molecules/SearchModal/types';

const SEARCH_QUERIES = {
    characters: GET_CHARACTERS,
    planets: GET_PLANETS,
    films: GET_FILMS,
    species: GET_SPECIES_FRAGMENT,
    starships: GET_STARSHIPS,
    vehicles: GET_VEHICLES,
} as const;

const DATA_KEYS = {
    characters: 'Characters',
    planets: 'Planets',
    films: 'Films',
    species: 'Species',
    starships: 'Starships',
    vehicles: 'Vehicles',
} as const;

interface SearchItem {
    id: string;
    name?: string;
    title?: string;
    model?: string;
    description?: string;
}

interface SearchData {
    [key: string]: {
        docs: SearchItem[];
    };
}

export const useSearch = (query: string) => {
    const [results, setResults] = useState<SearchResult[]>([]);
    const [loading, setLoading] = useState(false);

    const charactersQuery = useQuery(SEARCH_QUERIES.characters, {
        variables: { limit: 100, page: 1 },
        skip: query.length < 3,
    });

    const planetsQuery = useQuery(SEARCH_QUERIES.planets, {
        variables: { limit: 100, page: 1 },
        skip: query.length < 3,
    });

    const filmsQuery = useQuery(SEARCH_QUERIES.films, {
        variables: { limit: 100, page: 1 },
        skip: query.length < 3,
    });

    const speciesQuery = useQuery(SEARCH_QUERIES.species, {
        variables: { limit: 100, page: 1 },
        skip: query.length < 3,
    });

    const starshipsQuery = useQuery(SEARCH_QUERIES.starships, {
        variables: { limit: 100, page: 1 },
        skip: query.length < 3,
    });

    const vehiclesQuery = useQuery(SEARCH_QUERIES.vehicles, {
        variables: { limit: 100, page: 1 },
        skip: query.length < 3,
    });

    const allQueries = [
        charactersQuery,
        planetsQuery,
        filmsQuery,
        speciesQuery,
        starshipsQuery,
        vehiclesQuery,
    ];

    const isLoading = allQueries.some(q => q.loading);

    useEffect(() => {
        if (query.length < 3) {
            setResults([]);
            return;
        }

        setLoading(isLoading);

        if (!isLoading) {
            const searchResults: SearchResult[] = [];
            const searchTerm = query.toLowerCase();

            const processResults = (
                data: SearchData | undefined,
                category: keyof typeof DATA_KEYS,
                nameField: string = 'name',
            ) => {
                if (data?.[DATA_KEYS[category]]?.docs) {
                    data[DATA_KEYS[category]].docs.forEach((item: SearchItem) => {
                        const name = item[nameField as keyof SearchItem] || item.name;
                        if (name && name.toLowerCase().includes(searchTerm)) {
                            searchResults.push({
                                id: item.id,
                                name: name,
                                category: category as SearchResult['category'],
                                description: item.description || item.title || item.model,
                            });
                        }
                    });
                }
            };

            processResults(charactersQuery.data, 'characters');
            processResults(planetsQuery.data, 'planets');
            processResults(filmsQuery.data, 'films', 'title');
            processResults(speciesQuery.data, 'species');
            processResults(starshipsQuery.data, 'starships');
            processResults(vehiclesQuery.data, 'vehicles');

            const sortedResults = searchResults
                .sort((a, b) => a.name.localeCompare(b.name))
                .slice(0, 5);

            setResults(sortedResults);
        }
    }, [
        query,
        isLoading,
        charactersQuery.data,
        planetsQuery.data,
        filmsQuery.data,
        speciesQuery.data,
        starshipsQuery.data,
        vehiclesQuery.data,
    ]);

    return { results, loading };
};
