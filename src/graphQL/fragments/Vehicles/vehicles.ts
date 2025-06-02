import { gql } from '@apollo/client';

export const VEHICLES_FRAGMENT = gql`
    fragment Vehicles on Vehicle {
        id
        name
    }
`;
