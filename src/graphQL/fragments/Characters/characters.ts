import { gql } from '@apollo/client';

export const CHARACTERS_FRAGMENT = gql`
    fragment Characters on Character {
        id
        name
    }
`;
