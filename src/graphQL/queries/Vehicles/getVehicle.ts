import { VEHICLE_FULL } from '@/graphQL/fragments/Vehicles/vehicle';
import { gql } from '@apollo/client';

export const GET_VEHICLE = gql`
    ${VEHICLE_FULL}

    query GetVehicle($id: String!) {
        Vehicle(id: $id) {
            ...VehicleFull
        }
    }
`;
