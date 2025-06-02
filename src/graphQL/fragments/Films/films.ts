import { gql } from '@apollo/client';

export const FILMS_FRAGMENT = gql`
    fragment Films on Film {
        id
        title
    }
`;
