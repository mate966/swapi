import { gql } from '@apollo/client';

export const FEATURED_BLOCK_FRAGMENT = gql`
    fragment FeaturedBlock on FeaturedBlock {
        blockType
        featuredTitle: title
        linkedItem {
            category
            item_characters {
                id
                name
            }
            item_planets {
                id
                name
            }
            item_starships {
                id
                name
            }
            item_vehicles {
                id
                name
            }
            item_species {
                id
                name
            }
            item_films {
                id
                title
            }
        }
        featuredLink: link {
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
