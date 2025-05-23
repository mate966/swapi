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

export interface SocialItem {
    social: {
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
        icon: string;
    };
}

export interface Footer {
    title: string;
    copy: string;
    copyright: string;
    nav: NavItemProps[];
    socials: {
        social: {
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
            icon: string;
        };
    }[];
    id: string;
}

export interface HeroBlock {
    blockType: string;
    heroTitle: string;
    description?: string;
    image?: {
        url: string;
        alt: string;
    };
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

export type PageContent = HeroBlock | TextBlock | CtaBlock;

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
