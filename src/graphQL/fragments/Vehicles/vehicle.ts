import { gql } from '@apollo/client';

export const VEHICLE_FULL = gql`
    fragment VehicleFull on Vehicle {
        id
        name
        model
        vehicle_class
        manufacturer
        length
        cost_in_credits
        crew
        passengers
        max_atmosphering_speed
        cargo_capacity
        consumables
        pilots {
            id
            name
        }
        films {
            id
            title
        }
    }
`;
