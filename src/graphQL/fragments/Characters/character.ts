import { gql } from '@apollo/client';

export const CHARACTER_FULL = gql`
    fragment CharacterFull on Character {
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
