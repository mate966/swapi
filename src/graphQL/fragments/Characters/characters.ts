import { gql } from '@apollo/client';

export const CHARACTERS_FRAGMENT = gql`
    fragment Characters on Character {
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
`;
