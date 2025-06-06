import { gql } from '@apollo/client';

export const GALLERY_BLOCK_FRAGMENT = gql`
    fragment GalleryBlock on GalleryBlock {
        blockType
        images {
            image {
                imageDesktop {
                    url
                    alt
                    webpUrl
                }
                imageMobile {
                    url
                    alt
                }
            }
        }
    }
`;
