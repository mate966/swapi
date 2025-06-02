import { gql } from '@apollo/client';

export const SPECIES_FRAGMENT = gql`
    fragment SpeciesFragment on Species {
        id
        name
    }
`;
