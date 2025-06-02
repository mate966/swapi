import { gql } from '@apollo/client';

export const QUOTE_BLOCK_FRAGMENT = gql`
    fragment QuoteBlock on QuoteBlock {
        blockType
        quote
        author
    }
`;
