import { PLANET_FULL } from '@/graphQL/fragments/Planets/planet';
import { gql } from '@apollo/client';

export const GET_PLANET = gql`
    ${PLANET_FULL}

    query GetPlanet($id: String!) {
        Planet(id: $id) {
            ...PlanetFull
        }
    }
`;
