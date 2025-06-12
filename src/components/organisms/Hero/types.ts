import { Image } from '@/services/api/api.types';
export interface HeroBlock {
    blockType: string;
    heroTitle: string;
    description?: string;
    background: Image;
}
