import { CtaBlock, HeroBlock, ImageBlock, QuoteBlock, TextBlock } from '@/services/api/api.types';

export type SectionProps = {
    block: HeroBlock | TextBlock | CtaBlock | QuoteBlock | ImageBlock;
    index: number;
};
