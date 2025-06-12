import { About } from '@/components/organisms/About';
import { AboutBlock } from '@/components/organisms/About/types';
import { CompendiumCategory } from '@/components/organisms/CompendiumCategory';
import { ContactForm } from '@/components/organisms/ContactForm';
import { Cta } from '@/components/organisms/Cta';
import { CtaBlock } from '@/components/organisms/Cta/types';
import { Featured } from '@/components/organisms/Featured';
import { Gallery } from '@/components/organisms/Gallery';
import { Hero } from '@/components/organisms/Hero';
import { HeroBlock } from '@/components/organisms/Hero/types';
import { Image } from '@/components/organisms/Image';
import { ImageBlock } from '@/components/organisms/Image/types';
import { Quote } from '@/components/organisms/Quote';
import { QuoteBlock } from '@/components/organisms/Quote/types';
import { Text } from '@/components/organisms/Text';
import { TextBlock } from '@/components/organisms/Text/types';

import { ModuleComponent, ModuleType } from '@/types/module.types';
import {
    CompendiumCategoryBlock,
    ContactFormBlock,
    FeaturedBlock,
    GalleryBlock,
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
        case 'gallery_block':
            return {
                type: 'gallery_block',
                component: Gallery,
                props: block as GalleryBlock,
            } as ModuleComponent<ModuleType>;
        case 'contact_form_block':
            return {
                type: 'contact_form_block',
                component: ContactForm,
                props: block as ContactFormBlock,
            } as ModuleComponent<ModuleType>;
        default:
            return null;
    }
};
