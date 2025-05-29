import { GetCharacters } from '@/graphQL/queries/getCharacters.graphql';
import { GetPage } from '@/graphQL/queries/getPage.graphql';
import { GetPlanets } from '@/graphQL/queries/getPlanets.graphql';
import { ApolloClient, InMemoryCache, createHttpLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { authService } from '../auth/auth';
import { CharactersResponse, PagesResponse, PlanetsResponse } from './api.types';

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

export const swapiService = {
    getPage: async (slug: string) => {
        const { data } = await client.query<PagesResponse>({
            query: GetPage,
            variables: { slug },
        });
        return data.Pages.docs[0];
    },
    getCharacters: async () => {
        const { data } = await client.query<CharactersResponse>({
            query: GetCharacters,
            variables: { limit: 100 },
        });
        return data.Characters.docs;
    },
    getPlanets: async () => {
        const { data } = await client.query<PlanetsResponse>({
            query: GetPlanets,
        });
        return data.Planets.docs;
    },
    getCategory: async (category: string, limit = 10, page = 1) => {
        const response = await client.query({
            query: GetPlanets,
            variables: { limit, page },
        });
        return {
            docs: response.data.Planets.docs,
            //   hasNextPage: response.data.Characters.hasNextPage,
        };
    },
};
