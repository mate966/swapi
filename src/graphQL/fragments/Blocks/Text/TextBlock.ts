import { gql } from '@apollo/client';

export const TEXT_BLOCK_FRAGMENT = gql`
    fragment TextBlock on TextBlock {
        blockType
        textTitle: title
        text
    }
`;
