import { PLANETS_FRAGMENT } from '@/graphQL/fragments/Planets/planets';
import { gql } from '@apollo/client';

export const GET_PLANETS = gql`
    ${PLANETS_FRAGMENT}

    query GetPlanets($limit: Int, $page: Int) {
        Planets(limit: $limit, page: $page) {
            docs {
                ...Planets
            }
        }
    }
`;
