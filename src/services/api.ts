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

export interface Film {
    id: string;
    title: string;
    episodeID: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: {
        id: string;
        name: string;
    }[];
    planets: {
        id: string;
        name: string;
    }[];
    starships: {
        id: string;
        name: string;
    }[];
    vehicles: {
        id: string;
        name: string;
    }[];
    species: {
        id: string;
        name: string;
    }[];
}

export interface PeopleResponse {
    People: {
        docs: Person[];
        totalDocs: number;
        limit: number;
        totalPages: number;
        page: number;
        pagingCounter: number;
        hasPrevPage: boolean;
        hasNextPage: boolean;
    };
}

export interface FilmsResponse {
    Films: {
        docs: Film[];
        totalDocs: number;
        limit: number;
        totalPages: number;
        page: number;
        pagingCounter: number;
        hasPrevPage: boolean;
        hasNextPage: boolean;
    };
}

const GET_PEOPLE = gql`
    query GetPeople($page: Int, $limit: Int) {
        People(page: $page, limit: $limit) {
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
        }
    }
`;

const GET_FILMS = gql`
    query GetFilms($page: Int, $limit: Int) {
        Films(page: $page, limit: $limit) {
            docs {
                id
                title
                episodeID
                opening_crawl
                director
                producer
                release_date
                characters {
                    id
                    name
                }
                planets {
                    id
                    name
                }
                starships {
                    id
                    name
                }
                vehicles {
                    id
                    name
                }
                species {
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
        }
    }
`;

export const swapiService = {
    getPeople: async (page = 1, limit = 10) => {
        const { data } = await client.query<PeopleResponse>({
            query: GET_PEOPLE,
            variables: { page, limit },
        });
        return data.People;
    },
    getFilms: async (page = 1, limit = 10) => {
        const { data } = await client.query<FilmsResponse>({
            query: GET_FILMS,
            variables: { page, limit },
        });
        return data.Films;
    },
};

export { client };
