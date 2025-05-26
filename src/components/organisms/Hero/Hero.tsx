import { ResponsiveImage } from '@/components/molecules/Image/ResponsiveImage';
import { HeroBlockTypes } from './hero.types';

export const Hero = ({ block }: HeroBlockTypes) => {
    const {
        heroTitle,
        description,
        background: { imageDesktop, imageMobile },
    } = block;

    const image = {
        srcDesktop: imageDesktop?.webpUrl || imageDesktop?.url || '',
        srcMobile: imageMobile?.webpUrl || imageMobile?.url || imageDesktop?.url || '',
        alt: imageDesktop?.alt || 'Image',
    };

    return (
        <div className="relative bg-gray-900 text-white py-20">
            {imageDesktop && <ResponsiveImage {...image} />}
            <div className="relative container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-4">{heroTitle}</h2>
                {description && <p className="text-xl">{description}</p>}
            </div>
        </div>
    );
};
