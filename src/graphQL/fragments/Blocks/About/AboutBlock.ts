import { gql } from '@apollo/client';

export const ABOUT_BLOCK_FRAGMENT = gql`
    fragment AboutBlock on AboutBlock {
        blockType
        aboutTitle: title
        text
        image {
            imageDesktop {
                url
                alt
                webpUrl
            }
            imageMobile {
                url
                alt
                webpUrl
            }
        }
        aboutLink: link {
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
