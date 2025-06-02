import { gql } from '@apollo/client';

export const STARSHIP_FULL = gql`
    fragment StarshipFull on Starship {
        id
        name
        model
        starship_class
        manufacturer
        cost_in_credits
        length
        crew
        passengers
        max_atmosphering_speed
        hyperdrive_rating
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
