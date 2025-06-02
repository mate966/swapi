import { gql } from '@apollo/client';

export const FILMS_FULL = gql`
    fragment FilmsFull on Film {
        id
        title
        episode_id
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
`;
