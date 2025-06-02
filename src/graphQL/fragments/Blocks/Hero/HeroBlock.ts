import { gql } from '@apollo/client';

export const HERO_BLOCK_FRAGMENT = gql`
    fragment HeroBlock on HeroBlock {
        blockType
        heroTitle: title
        description
        background {
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
`;
