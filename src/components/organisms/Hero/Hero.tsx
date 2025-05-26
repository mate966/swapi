import { ResponsiveImage } from '@/components/molecules/Image/ResponsiveImage';
import { HeroBlock } from '@/services/api/api.types';

export const Hero = ({
    block: {
        heroTitle,
        description,
        background: { imageDesktop, imageMobile },
    },
}: {
    block: HeroBlock;
}) => {
    return (
        <div className="relative bg-gray-900 text-white py-20">
            {imageDesktop && (
                <ResponsiveImage
                    srcDesktop={imageDesktop?.webpUrl || imageDesktop?.url || ''}
                    srcMobile={imageMobile?.webpUrl || imageMobile?.url || imageDesktop?.url || ''}
                    alt={imageDesktop?.alt || 'Image'}
                />
            )}
            <div className="relative container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-4">{heroTitle}</h2>
                {description && <p className="text-xl">{description}</p>}
            </div>
        </div>
    );
};
