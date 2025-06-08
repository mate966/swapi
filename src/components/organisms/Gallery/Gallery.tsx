import { ResponsiveImage } from '@/components/molecules/Image/ResponsiveImage';
import { GalleryBlockTypes } from './gallery.types';

export const Gallery = ({ block }: GalleryBlockTypes) => {
    const { images } = block;

    // TODO: Try to refactor
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map(({ image }, idx) => {
                if (!image?.imageDesktop) {
                    return null;
                }

                return (
                    <div key={idx}>
                        <ResponsiveImage
                            srcDesktop={image.imageDesktop.webpUrl || image.imageDesktop.url}
                            srcMobile={
                                image.imageMobile?.webpUrl ||
                                image.imageMobile?.url ||
                                image.imageDesktop.url
                            }
                            alt={image.imageDesktop.alt || 'Gallery image'}
                        />
                    </div>
                );
            })}
        </div>
    );
};
