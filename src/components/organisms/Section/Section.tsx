import { ModuleType } from '@/types/module.types';
import { getModule } from '@/utils/getModule';

export const Section = ({ block, index }: { block: ModuleType; index: number }) => {
    const module = getModule(block);

    if (!module) return null;

    const Component = module.component;

    return (
        <section className="py-8" id={`section-${index}`}>
            <Component key={index} block={module.props} />
        </section>
    );
};
