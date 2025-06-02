import { gql } from '@apollo/client';

export const IMAGE_BLOCK_FRAGMENT = gql`
    fragment ImageBlock on ImageBlock {
        blockType
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
    }
`;
