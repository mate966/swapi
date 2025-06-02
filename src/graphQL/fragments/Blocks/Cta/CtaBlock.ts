import { gql } from '@apollo/client';

export const CTA_BLOCK_FRAGMENT = gql`
    fragment CtaBlock on CtaBlock {
        blockType
        ctaTitle: title
        copy
        link {
            type
            reference {
                relationTo
                value {
                    ... on Page {
                        id
                        title
                        slug
                    }
                }
            }
            url
            newTab
            label
        }
    }
`;
