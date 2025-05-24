import { Cta } from '@/components/organisms/Cta/Cta';
import { Hero } from '@/components/organisms/Hero/Hero';
import { Quote } from '@/components/organisms/Quote/Quote';
import { Text } from '@/components/organisms/Text/Text';
import { ModuleComponent, ModuleType } from '@/types/module.types';
import { CtaBlock, HeroBlock, QuoteBlock, TextBlock } from '../services/api/api.types';

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
        default:
            return null;
    }
};
