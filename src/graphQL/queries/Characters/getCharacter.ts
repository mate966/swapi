import { CHARACTER_FULL } from '@/graphQL/fragments/Characters/character';
import { gql } from '@apollo/client';

export const GET_CHARACTER = gql`
    ${CHARACTER_FULL}

    query GetCharacter($id: ID!) {
        Character(id: $id) {
            ...CharacterFull
        }
    }
`;
