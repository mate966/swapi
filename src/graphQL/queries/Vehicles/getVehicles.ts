import { VEHICLES_FRAGMENT } from '@/graphQL/fragments/Vehicles/vehicles';
import { gql } from '@apollo/client';

export const GET_VEHICLES = gql`
    ${VEHICLES_FRAGMENT}

    query GetVehicles($limit: Int, $page: Int) {
        Vehicles(limit: $limit, page: $page) {
            docs {
                ...Vehicles
            }
        }
    }
`;
