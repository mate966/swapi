import { NavItemTypes } from '@/components/atoms/NavItem/types';
import { SocialItem } from '@/services/api/api.types';

export interface Footer {
    title: string;
    copy: string;
    copyright: string;
    nav: NavItemTypes[];
    social: SocialItem[];
    id: string;
}
