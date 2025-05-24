import { GetPage } from '@/graphQL/queries/getPage.graphql';
import { ApolloClient, InMemoryCache, createHttpLink, from } from '@apollo/client';
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

export const swapiService = {
    getPage: async (slug: string) => {
        const { data } = await client.query<PagesResponse>({
            query: GetPage,
            variables: { slug },
        });
        return data.Pages.docs[0];
    },
};
