import { CompendiumCategory } from '../compendium/compendium.types';

type CategoryItems = {
    item_characters?: Array<{ id: string; name: string }>;
    item_planets?: Array<{ id: string; name: string }>;
    item_starships?: Array<{ id: string; name: string }>;
    item_vehicles?: Array<{ id: string; name: string }>;
    item_species?: Array<{ id: string; name: string }>;
    item_films?: Array<{ id: string; name: string }>;
};

export type FeaturedLinkedItem = CategoryItems & {
    category: CompendiumCategory;
};

export type FeaturedBlock = {
    title: string;
    linkedItem: FeaturedLinkedItem;
    featuredLink?: {
        text: string;
        url: string;
    };
};
