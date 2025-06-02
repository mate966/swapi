import { SPECIES_FRAGMENT } from '@/graphQL/fragments/Species/speciesFragment';
import { gql } from '@apollo/client';

export const GET_SPECIES_FRAGMENT = gql`
    ${SPECIES_FRAGMENT}

    query GetSpecies($limit: Int, $page: Int) {
        allSpecies(limit: $limit, page: $page) {
            docs {
                ...SpeciesFragment
            }
        }
    }
`;
