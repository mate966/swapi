import { Image, Link, RichText } from '@/services/api/api.types';

export interface AboutBlock {
    blockType: string;
    title: string;
    text: RichText;
    image: Image;
    aboutLink: Link;
}
