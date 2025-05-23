import { ModuleComponent, ModuleType } from '@/types/module.types';
import { Cta } from '../components/molecules/Cta/Cta';
import { Hero } from '../components/molecules/Hero/Hero';
import { Text } from '../components/molecules/Text/Text';
import { CtaBlock, HeroBlock, TextBlock } from '../services/api/api.types';

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
        default:
            return null;
    }
};
