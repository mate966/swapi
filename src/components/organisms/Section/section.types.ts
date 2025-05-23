import { CtaBlock, HeroBlock, TextBlock } from '@/services/api/api.types';

export type SectionProps = {
    block: HeroBlock | TextBlock | CtaBlock;
    index: number;
};
