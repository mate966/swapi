import { CtaBlock, HeroBlock, TextBlock } from '@/services/api/api.types';

export type ModuleType = HeroBlock | TextBlock | CtaBlock;

export type ModuleComponent<T extends ModuleType> = {
    type: string;
    component: React.ComponentType<{ block: T }>;
    props: T;
};
