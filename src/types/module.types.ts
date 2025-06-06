import {
    AboutBlock,
    CompendiumCategoryBlock,
    ContactFormBlock,
    CtaBlock,
    FeaturedBlock,
    GalleryBlock,
    HeroBlock,
    ImageBlock,
    QuoteBlock,
    TextBlock,
} from '@/services/api/api.types';

export type ModuleType =
    | HeroBlock
    | TextBlock
    | CtaBlock
    | QuoteBlock
    | ImageBlock
    | AboutBlock
    | FeaturedBlock
    | GalleryBlock
    | CompendiumCategoryBlock
    | ContactFormBlock;

export type ModuleComponent<T extends ModuleType> = {
    type: string;
    component: React.ComponentType<{ block: T }>;
    props: T;
    index?: number;
};
