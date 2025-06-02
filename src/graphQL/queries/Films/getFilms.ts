import { FILMS_FRAGMENT } from '@/graphQL/fragments/Films/films';
import { gql } from '@apollo/client';

export const GET_FILMS = gql`
    ${FILMS_FRAGMENT}

    query GetFilms($limit: Int, $page: Int) {
        Films(limit: $limit, page: $page) {
            docs {
                ...Films
            }
        }
    }
`;
