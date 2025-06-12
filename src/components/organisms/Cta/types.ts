import { Link } from '@/services/api/api.types';

export interface CtaBlock {
    blockType: string;
    ctaTitle: string;
    copy: string;
    link: Link;
}
