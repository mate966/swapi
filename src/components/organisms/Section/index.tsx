import { getModule } from '@/utils/getModule';
import { SectionTypes } from './types';

export const Section = ({ block, index }: SectionTypes) => {
    const module = getModule(block);

    if (!module) return null;

    const Component = module.component;

    return (
        <section className="py-8" id={`section-${index}`}>
            <Component key={index} block={module.props} />
        </section>
    );
};
