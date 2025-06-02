import { STARSHIP_FULL } from '@/graphQL/fragments/Starships/starship';
import { gql } from '@apollo/client';

export const GET_STARSHIP = gql`
    ${STARSHIP_FULL}

    query GetStarship($id: String!) {
        Starship(id: $id) {
            ...StarshipFull
        }
    }
`;
