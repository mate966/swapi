import { ABOUT_BLOCK_FRAGMENT } from '@/graphQL/fragments/Blocks/About/AboutBlock';
import { COMPENDIUM_CATEGORY_BLOCK_FRAGMENT } from '@/graphQL/fragments/Blocks/CompendiumCategory/CompendiumCategoryBlock';
import { CTA_BLOCK_FRAGMENT } from '@/graphQL/fragments/Blocks/Cta/CtaBlock';
import { FEATURED_BLOCK_FRAGMENT } from '@/graphQL/fragments/Blocks/Featured/FeaturedBlock';
import { HERO_BLOCK_FRAGMENT } from '@/graphQL/fragments/Blocks/Hero/HeroBlock';
import { IMAGE_BLOCK_FRAGMENT } from '@/graphQL/fragments/Blocks/Image/ImageBlock';
import { QUOTE_BLOCK_FRAGMENT } from '@/graphQL/fragments/Blocks/Quote/QuoteBlock';
import { TEXT_BLOCK_FRAGMENT } from '@/graphQL/fragments/Blocks/Text/TextBlock';
import { gql } from '@apollo/client';

export const GET_PAGE = gql`
    ${HERO_BLOCK_FRAGMENT}
    ${TEXT_BLOCK_FRAGMENT}
    ${CTA_BLOCK_FRAGMENT}
    ${QUOTE_BLOCK_FRAGMENT}
    ${IMAGE_BLOCK_FRAGMENT}
    ${ABOUT_BLOCK_FRAGMENT}
    ${FEATURED_BLOCK_FRAGMENT}
    ${COMPENDIUM_CATEGORY_BLOCK_FRAGMENT}

    query GetPage($slug: String) {
        Pages(where: { slug: { equals: $slug } }) {
            docs {
                title
                seo {
                    metaTitle
                    metaDescription
                }
                content {
                    ...HeroBlock
                    ...TextBlock
                    ...CtaBlock
                    ...QuoteBlock
                    ...ImageBlock
                    ...AboutBlock
                    ...FeaturedBlock
                    ...CompendiumCategoryBlock
                }
                slug
            }
        }
    }
`;
