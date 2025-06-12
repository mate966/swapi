import { Image } from '@/services/api/api.types';
export interface ImageBlock {
    blockType: string;
    image: Image;
    caption: string;
}
