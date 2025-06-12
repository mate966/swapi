import { ResponsiveImage } from '@/components/molecules/Image';
import { HeroBlock } from './types';

export const Hero = ({ block }: { block: HeroBlock }) => {
    const {
        heroTitle,
        description,
        background: { imageDesktop, imageMobile },
    } = block;

    const image = {
        srcDesktop: imageDesktop?.webpUrl || imageDesktop?.url || null,
        srcMobile: imageMobile?.webpUrl || imageMobile?.url || imageDesktop?.url || null,
        alt: imageDesktop?.alt || 'Hero background',
        loading: 'eager' as const,
        preload: true,
        className: 'absolute inset-0 w-full h-full object-cover',
    };

    return (
        <div className="relative bg-gray-900 text-white py-20 overflow-hidden">
            {imageDesktop && <ResponsiveImage {...image} />}
            <div className="relative container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-4">{heroTitle}</h2>
                {description && <p className="text-xl">{description}</p>}
            </div>
        </div>
    );
};
