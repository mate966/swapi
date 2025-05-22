import { ApolloClient, InMemoryCache, createHttpLink, from, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { authService } from '../auth/auth';
import { HeaderResponse, PagesResponse } from './api.types';
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

const GET_Page = gql`
    query GetPage($slug: String) {
        Pages(where: { slug: { equals: $slug } }) {
            docs {
                title
                content {
                    ... on HeroBlock {
                        blockType
                        heroTitle: title
                        description
                        image {
                            url
                            alt
                        }
                    }
                    ... on TextBlock {
                        blockType
                        textTitle: title
                        text
                    }
                }
                slug
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

    getPage: async (slug: string) => {
        const { data } = await client.query<PagesResponse>({
            query: GET_Page,
            variables: { slug },
        });
        return data.Pages.docs[0];
    },
};
