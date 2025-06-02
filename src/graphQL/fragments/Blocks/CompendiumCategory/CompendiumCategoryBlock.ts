import { gql } from '@apollo/client';

export const COMPENDIUM_CATEGORY_BLOCK_FRAGMENT = gql`
    fragment CompendiumCategoryBlock on CompendiumCategoryBlock {
        blockType
        category
    }
`;
