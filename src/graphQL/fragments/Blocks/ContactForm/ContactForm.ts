import { gql } from '@apollo/client';

export const CONTACT_FORM_BLOCK_FRAGMENT = gql`
    fragment ContactFormBlock on ContactFormBlock {
        blockType
        title
        description
    }
`;
