import { ResponsiveImage } from '@/components/molecules/Image/ResponsiveImage';
import { ImageTypes } from './image.types';

export const Image = ({ block }: ImageTypes) => {
    const {
        image: { imageDesktop, imageMobile },
    } = block;

    const image = {
        srcDesktop: imageDesktop?.webpUrl || imageDesktop?.url || '',
        srcMobile: imageMobile?.webpUrl || imageMobile?.url || imageDesktop?.url || '',
        alt: imageDesktop?.alt || 'Image',
    };

    return <>{imageDesktop && <ResponsiveImage {...image} />}</>;
};
