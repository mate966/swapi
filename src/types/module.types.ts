import { AboutBlock } from '@/components/organisms/About/types';
import { HeroBlock } from '@/components/organisms/Hero/types';
import { TextBlock } from '@/components/organisms/Text/types';
import { CtaBlock } from '@/components/organisms/Cta/types';
import { QuoteBlock } from '@/components/organisms/Quote/types';
import { ImageBlock } from '@/components/organisms/Image/types';

import {
    CompendiumCategoryBlock,
    ContactFormBlock,
    FeaturedBlock,
    GalleryBlock,
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
