import { GET_CHARACTERS } from '@/graphQL/queries/Characters/getCharacters';
import { GET_FILMS } from '@/graphQL/queries/Films/getFilms';
import { GET_PLANETS } from '@/graphQL/queries/Planets/getPlanets';
import { GET_SPECIES_FRAGMENT } from '@/graphQL/queries/Species/getSpeciesFragment';
import { GET_STARSHIPS } from '@/graphQL/queries/Starships/getStarships';
import { GET_VEHICLES } from '@/graphQL/queries/Vehicles/getVehicles';

import { GET_PAGE } from '@/graphQL/queries/Page/getPage';
import { ApolloClient, DocumentNode, InMemoryCache, createHttpLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { authService } from '../auth/auth';
import { PagesResponse } from './api.types';

const httpLink = createHttpLink({
    uri: import.meta.env.VITE_PAYLOAD_API_URL + '/graphql',
});

const authLink = setContext((_, { headers = {} }) => {
    const token = authService.getToken();
    return {
        headers: {
            ...headers,
            authorization: token ? `JWT ${token}` : '',
        },
    };
});

export const client = new ApolloClient({
    link: from([authLink, httpLink]),
    cache: new InMemoryCache(),
});

const queries: Record<string, DocumentNode> = {
    characters: GET_CHARACTERS,
    planets: GET_PLANETS,
    films: GET_FILMS,
    starships: GET_STARSHIPS,
    vehicles: GET_VEHICLES,
    page: GET_PAGE,
    species: GET_SPECIES_FRAGMENT,
};

export const swapiService = {
    getPage: async (slug: string) => {
        const { data } = await client.query<PagesResponse>({
            query: GET_PAGE,
            variables: { slug },
        });
        return data.Pages.docs[0];
    },
    getCategory: async (category: string, limit = 10, page = 1) => {
        const { data } = await client.query({
            query: queries[category],
            variables: { limit, page },
        });
        const categoryKey = Object.keys(data)[0];
        const categoryData = data[categoryKey];
        return categoryData.docs;
    },
};
