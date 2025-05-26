import { ResponsiveImage } from '@/components/molecules/Image/ResponsiveImage';
import { ImageBlock } from '@/services/api/api.types';

export const Image = ({
    block: {
        image: { imageDesktop, imageMobile },
    },
}: {
    block: ImageBlock;
}) => {
    return (
        <>
            {imageDesktop && (
                <ResponsiveImage
                    srcDesktop={imageDesktop?.webpUrl || imageDesktop?.url || ''}
                    srcMobile={imageMobile?.webpUrl || imageMobile?.url || imageDesktop?.url || ''}
                    alt={imageDesktop?.alt || 'Image'}
                />
            )}
        </>
    );
};
