import { LinkItemTypes } from '@/components/atoms/LinkItem/types';

export interface CtaBlock {
    blockType: string;
    ctaTitle: string;
    copy: string;
    link: LinkItemTypes;
}
