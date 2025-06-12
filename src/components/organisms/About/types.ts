import { Image, RichText } from '@/services/api/api.types';
import { LinkItemTypes } from '@/components/atoms/LinkItem/types';

export interface AboutBlock {
    blockType: string;
    title: string;
    text: RichText;
    image: Image;
    aboutLink: LinkItemTypes;
}
