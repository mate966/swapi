import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    cache: new InMemoryCache(),
});

export interface Person {
    id: string;
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: {
        id: string;
        name: string;
    };
    films: {
        id: string;
        title: string;
    }[];
    species: {
        id: string;
        name: string;
    }[];
    vehicles: {
        id: string;
        name: string;
    }[];
    starships: {
        id: string;
        name: string;
    }[];
}

export interface PeopleResponse {
    people: {
        docs: Person[];
        totalDocs: number;
        limit: number;
        totalPages: number;
        page: number;
        pagingCounter: number;
        hasPrevPage: boolean;
        hasNextPage: boolean;
        prevPage: number | null;
        nextPage: number | null;
    };
}

const GET_PEOPLE = gql`
    query GetPeople($page: Int, $limit: Int) {
        people(page: $page, limit: $limit) {
            docs {
                id
                name
                height
                mass
                hair_color
                skin_color
                eye_color
                birth_year
                gender
                homeworld {
                    id
                    name
                }
                films {
                    id
                    title
                }
                species {
                    id
                    name
                }
                vehicles {
                    id
                    name
                }
                starships {
                    id
                    name
                }
            }
            totalDocs
            limit
            totalPages
            page
            pagingCounter
            hasPrevPage
            hasNextPage
            prevPage
            nextPage
        }
    }
`;

export const swapiService = {
    getPeople: async (page = 1, limit = 10) => {
        const { data } = await client.query<PeopleResponse>({
            query: GET_PEOPLE,
            variables: { page, limit },
        });
        return data.people;
    },
};

export { client };
