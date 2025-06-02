import { gql } from '@apollo/client';

export const PLANETS_FRAGMENT = gql`
    fragment Planets on Planet {
        id
        name
    }
`;
