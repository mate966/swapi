import { gql } from '@apollo/client';

export const PLANET_FULL = gql`
    fragment PlanetFull on Planet {
        id
        name
        diameter
        rotation_period
        orbital_period
        gravity
        population
        climate
        terrain
        surface_water
        residents {
            id
            name
        }
        films {
            id
            title
        }
    }
`;
