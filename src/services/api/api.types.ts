import { NavItemProps } from '@/components/atoms/NavItem/navItem.types';

export interface NavLink {
    label: string;
    url: string;
    subItems?: NavLink[];
}

export interface Header {
    nav: NavItemProps[];
    id: string;
    title: string;
}

export interface HeaderResponse {
    Headers: {
        docs: Header[];
    };
}

export interface HeroBlock {
    blockType: 'hero';
    title: string;
    description?: string;
    image?: {
        url: string;
        alt: string;
    };
}

export interface TextBlock {
    blockType: 'text';
    title: string;
    text: RichText;
}

export type PageContent = HeroBlock | TextBlock;

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
