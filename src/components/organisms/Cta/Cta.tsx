import { LinkItem } from '@/components/atoms/LinkItem/LinkItem';
import { CtaBlockTypes } from './cta.types';

export const Cta = ({ block }: CtaBlockTypes) => {
    const { ctaTitle, copy, link } = block;

    return (
        <div className="bg-gray-900 text-white py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-4">{ctaTitle}</h2>
            </div>
            <div className="container mx-auto px-4">
                <p className="text-xl">{copy}</p>
            </div>
            <div className="container mx-auto px-4">
                <LinkItem {...link} />
            </div>
        </div>
    );
};
