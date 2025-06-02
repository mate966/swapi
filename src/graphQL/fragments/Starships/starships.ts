import { gql } from '@apollo/client';

export const STARSHIPS_FRAGMENT = gql`
    fragment Starships on Starship {
        id
        name
    }
`;
