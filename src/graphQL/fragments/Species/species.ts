import { gql } from '@apollo/client';

export const SPECIES_FULL = gql`
    fragment SpeciesFull on Species {
        id
        name
        classification
        designation
        average_height
        average_lifespan
        eye_colors
        hair_colors
        skin_colors
        language
        homeworld {
            id
            name
        }
        people {
            id
            name
        }
        films {
            id
            title
        }
    }
`;
