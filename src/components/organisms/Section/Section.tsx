import { getModule } from '@/utils/getModule';
import { SectionProps } from './section.types';

export const Section = ({ block, index }: SectionProps) => {
    const module = getModule(block);

    if (!module) return null;

    const Component = module.component;

    return (
        <section className="py-8">
            <Component key={index} block={module.props} />
        </section>
    );
};
