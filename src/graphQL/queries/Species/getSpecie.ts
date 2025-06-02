import { SPECIES_FULL } from '@/graphQL/fragments/Species/species';
import { gql } from '@apollo/client';

export const GET_SPECIES = gql`
    ${SPECIES_FULL}

    query GetSpecie($id: String!) {
        Species(id: $id) {
            ...SpeciesFull
        }
    }
`;
