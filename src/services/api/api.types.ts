import { Character } from '@/store/types/compendium/character.types';
import { Planet } from '@/store/types/compendium/planet.types';

import { AboutBlock } from '@/components/organisms/About/types';
import { HeroBlock } from '@/components/organisms/Hero/types';
import { CtaBlock } from '@/components/organisms/Cta/types';
import { QuoteBlock } from '@/components/organisms/Quote/types';
import { TextBlock } from '@/components/organisms/Text/types';
import { ImageBlock } from '@/components/organisms/Image/types';
import { GalleryBlock } from '@/components/organisms/Gallery/types';
import { FeaturedBlock } from '@/components/organisms/Featured/types';

export interface CompendiumCategoryBlock {
    blockType: string;
    category: 'characters' | 'planets' | 'starships' | 'vehicles' | 'species' | 'films';
}

export interface ContactFormBlock {
    blockType: string;
    title: string;
    description: string;
}

// SWAPI Types

export type PageContent =
    | HeroBlock
    | TextBlock
    | CtaBlock
    | QuoteBlock
    | ImageBlock
    | AboutBlock
    | FeaturedBlock
    | GalleryBlock
    | CompendiumCategoryBlock
    | ContactFormBlock;

// Pages

export interface Page {
    title: string;
    content: PageContent[];
    slug: string;
}

export interface PagesResponse {
    Pages: {
        docs: Page[];
    };
}

export interface CharactersResponse {
    Characters: {
        docs: Character[];
    };
}

export interface PlanetsResponse {
    Planets: {
        docs: Planet[];
    };
}

// Fields

export interface NavLink {
    label: string;
    url: string;
    subItems?: NavLink[];
}

export interface SocialLink {
    url: string;
    newTab?: boolean;
}

export interface Image {
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
}

export type RichText = {
    root: {
        type: string;
        children: {
            type: string;
            version: number;
            [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
    };
};

export interface SocialItem {
    link: SocialLink;
    icon: string;
}
