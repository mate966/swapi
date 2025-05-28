// Globals

import { NavItemTypes } from '@/components/atoms/NavItem/navItem.types';

export interface Header {
    nav: NavItemTypes[];
    id: string;
    title: string;
}
export interface Footer {
    title: string;
    copy: string;
    copyright: string;
    nav: NavItemTypes[];
    social: SocialItem[];
    id: string;
}

// Blocks
export interface HeroBlock {
    blockType: string;
    heroTitle: string;
    description?: string;
    background: Image;
}

export interface TextBlock {
    blockType: string;
    textTitle: string;
    text: RichText;
}

export interface CtaBlock {
    blockType: string;
    ctaTitle: string;
    copy: string;
    link: Link;
}

export interface QuoteBlock {
    blockType: string;
    quote: string;
    author: string;
}

export interface ImageBlock {
    blockType: string;
    image: Image;
    caption: string;
}

export interface AboutBlock {
    blockType: string;
    title: string;
    text: RichText;
    image: Image;
    aboutLink: Link;
}

export interface FeaturedBlock {
    blockType: string;
    title: string;
    linkedItem: {
        category: 'characters' | 'planets' | 'starships' | 'vehicles' | 'species' | 'films';
        item_characters?: Character[];
        item_planets?: Planet[];
        item_starships?: Starship[];
        item_vehicles?: Vehicle[];
        item_species?: Species[];
        item_films?: Film[];
    };
}

// SWAPI Types
export interface Character {
    id: string;
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}

export interface Planet {
    id: string;
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}

export interface Starship {
    id: string;
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    pilots: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}

export interface Vehicle {
    id: string;
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    vehicle_class: string;
    pilots: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}

export interface Species {
    id: string;
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld: string;
    language: string;
    people: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}

export interface Film {
    id: string;
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
}

export type PageContent =
    | HeroBlock
    | TextBlock
    | CtaBlock
    | QuoteBlock
    | ImageBlock
    | AboutBlock
    | FeaturedBlock;

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

export interface Link {
    type: string;
    reference: {
        relationTo: string;
        value: {
            id: string;
            title: string;
            slug: string;
        };
    };
    url: string;
    newTab: boolean;
    label: string;
}
