import { GalleryBlock } from '@/services/api/api.types';
import { gql } from '@apollo/client';

// TODO: Try to refactor

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
                    webpUrl
                }
            }
        }
    }
`;

// TODO: Try to refactor types as Image
export interface GalleryBlock {
    blockType: string;
    images: {
        image: {
            imageDesktop: {
                url: string;
                alt: string;
                webpUrl: string;
            };
            imageMobile: {
                url: string;
                alt: string;
                webpUrl: string;
            };
        };
    }[];
}
