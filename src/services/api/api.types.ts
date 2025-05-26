import { NavItemProps } from '@/components/atoms/NavItem/navItem.types';

// Globals

export interface Header {
    nav: NavItemProps[];
    id: string;
    title: string;
}
export interface Footer {
    title: string;
    copy: string;
    copyright: string;
    nav: NavItemProps[];
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
    link: {
        type: string;
        reference: {
            relationTo: string;
            value: {
                id: string;
                title: string;
                slug: string;
            };
        };
        label: string;
    };
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
}

export type PageContent = HeroBlock | TextBlock | CtaBlock | QuoteBlock | ImageBlock | AboutBlock;

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
