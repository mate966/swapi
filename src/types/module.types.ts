import {
    AboutBlock,
    CtaBlock,
    HeroBlock,
    ImageBlock,
    QuoteBlock,
    TextBlock,
} from '@/services/api/api.types';

export type ModuleType = HeroBlock | TextBlock | CtaBlock | QuoteBlock | ImageBlock | AboutBlock;

export type ModuleComponent<T extends ModuleType> = {
    type: string;
    component: React.ComponentType<{ block: T }>;
    props: T;
    index?: number;
};
