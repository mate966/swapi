import { STARSHIPS_FRAGMENT } from '@/graphQL/fragments/Starships/starships';
import { gql } from '@apollo/client';

export const GET_STARSHIPS = gql`
    ${STARSHIPS_FRAGMENT}

    query GetStarships($limit: Int, $page: Int) {
        Starships(limit: $limit, page: $page) {
            docs {
                ...Starships
            }
        }
    }
`;
