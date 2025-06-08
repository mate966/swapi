import { gql } from '@apollo/client';

export const VEHICLES_FRAGMENT = gql`
    fragment Vehicles on Vehicle {
        id
        name
        vehicle_class
        manufacturer
        length
        cost_in_credits
        crew
        passengers
        max_atmosphering_speed
    }
`;
