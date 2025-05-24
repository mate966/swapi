import { CtaBlock, HeroBlock, ImageBlock, QuoteBlock, TextBlock } from '@/services/api/api.types';

export type ModuleType = HeroBlock | TextBlock | CtaBlock | QuoteBlock | ImageBlock;

export type ModuleComponent<T extends ModuleType> = {
    type: string;
    component: React.ComponentType<{ block: T }>;
    props: T;
};
