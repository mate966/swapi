import { FILMS_FULL } from '@/graphQL/fragments/Films/film';
import { gql } from '@apollo/client';

export const GET_FILM = gql`
    ${FILMS_FULL}

    query GetFilm($id: ID!) {
        Film(id: $id) {
            ...FilmsFull
        }
    }
`;
