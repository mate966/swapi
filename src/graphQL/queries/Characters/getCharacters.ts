import { CHARACTERS_FRAGMENT } from '@/graphQL/fragments/Characters/characters';
import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
    ${CHARACTERS_FRAGMENT}

    query GetCharacters($limit: Int, $page: Int) {
        Characters(limit: $limit, page: $page) {
            docs {
                ...Characters
            }
        }
    }
`;
