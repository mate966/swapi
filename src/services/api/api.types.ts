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
