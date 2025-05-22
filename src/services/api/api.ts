import { ApolloClient, InMemoryCache, createHttpLink, from, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { authService } from '../auth/auth';
import { HeaderResponse } from './api.types';
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

const GET_Header = gql`
    query GetHeader {
        Headers {
            docs {
                id
                title
                items {
                    label
                    url
                    subItems {
                        label
                        url
                    }
                }
            }
        }
    }
`;

export const swapiService = {
    getHeader: async () => {
        const { data } = await client.query<HeaderResponse>({
            query: GET_Header,
        });
        return data.Headers.docs[0];
    },
};
