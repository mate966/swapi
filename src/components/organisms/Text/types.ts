import { RichText } from '@/services/api/api.types';

export interface TextBlock {
    blockType: string;
    textTitle: string;
    text: RichText;
}
