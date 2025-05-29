import { About } from '@/components/organisms/About.tsx/About';
import { CompendiumCategory } from '@/components/organisms/CompendiumCategory/CompendiumCategory';
import { Cta } from '@/components/organisms/Cta/Cta';
import { Featured } from '@/components/organisms/Featured/Featured';
import { Hero } from '@/components/organisms/Hero/Hero';
import { Image } from '@/components/organisms/Image/Image';
import { Quote } from '@/components/organisms/Quote/Quote';
import { Text } from '@/components/organisms/Text/Text';

import { ModuleComponent, ModuleType } from '@/types/module.types';
import {
    AboutBlock,
    CompendiumCategoryBlock,
    CtaBlock,
    FeaturedBlock,
    HeroBlock,
    ImageBlock,
    QuoteBlock,
    TextBlock,
} from '../services/api/api.types';

export const getModule = (block: ModuleType): ModuleComponent<ModuleType> | null => {
    switch (block.blockType) {
        case 'hero_block':
            return {
                type: 'hero_block',
                component: Hero,
                props: block as HeroBlock,
            } as ModuleComponent<ModuleType>;
        case 'text_block':
            return {
                type: 'text_block',
                component: Text,
                props: block as TextBlock,
            } as ModuleComponent<ModuleType>;
        case 'cta_block':
            return {
                type: 'cta_block',
                component: Cta,
                props: block as CtaBlock,
            } as ModuleComponent<ModuleType>;
        case 'quote_block':
            return {
                type: 'quote_block',
                component: Quote,
                props: block as QuoteBlock,
            } as ModuleComponent<ModuleType>;
        case 'image_block':
            return {
                type: 'image_block',
                component: Image,
                props: block as ImageBlock,
            } as ModuleComponent<ModuleType>;
        case 'about_block':
            return {
                type: 'about_block',
                component: About,
                props: block as AboutBlock,
            } as ModuleComponent<ModuleType>;
        case 'featured_block':
            return {
                type: 'featured_block',
                component: Featured,
                props: block as FeaturedBlock,
            } as ModuleComponent<ModuleType>;
        case 'compendium_category_block':
            return {
                type: 'compendium_category_block',
                component: CompendiumCategory,
                props: block as CompendiumCategoryBlock,
            } as ModuleComponent<ModuleType>;
        default:
            return null;
    }
};
