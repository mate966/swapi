import { ResponsiveImage } from '@/components/molecules/Image/ResponsiveImage';
import { GalleryTypes } from './gallery.types';

export const Gallery = ({ block }: GalleryTypes) => {
    const { images } = block;

    const image = images.map((image: Image) => {
        const imageDesktop = image.image.imageDesktop;
        const imageMobile = image.image.imageMobile;
        const altDesktop = image.image.imageDesktop.alt;

        return {
            srcDesktop: imageDesktop?.webpUrl || imageDesktop?.url || '',
            srcMobile: imageMobile?.webpUrl || imageMobile?.url || imageDesktop?.url || '',
            alt: altDesktop || 'Image',
        };
    });
    console.log(image);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {image.map((imgData, index) => (
                <ResponsiveImage key={index} {...imgData} />
            ))}
        </div>
    );
};
