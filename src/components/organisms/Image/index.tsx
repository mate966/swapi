import { ResponsiveImage } from '@/components/molecules/Image';
import { ImageBlock } from './types';

export const Image = ({ block }: { block: ImageBlock }) => {
    const {
        image: { imageDesktop, imageMobile },
    } = block;

    const image = {
        srcDesktop: imageDesktop?.webpUrl || imageDesktop?.url || null,
        srcMobile: imageMobile?.webpUrl || imageMobile?.url || imageDesktop?.url || null,
        alt: imageDesktop?.alt || 'Image',
    };

    return <>{imageDesktop && <ResponsiveImage {...image} />}</>;
};
