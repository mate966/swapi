import { ResponsiveImage } from '@/components/molecules/Image';
import { GalleryBlock } from './types';

export const Gallery = ({ block }: { block: GalleryBlock }) => {
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
                            srcDesktop={
                                image.imageDesktop?.webpUrl || image.imageDesktop?.url || null
                            }
                            srcMobile={
                                image.imageMobile?.webpUrl ||
                                image.imageMobile?.url ||
                                image.imageDesktop?.url ||
                                null
                            }
                            alt={image.imageDesktop?.alt || 'Gallery image'}
                        />
                    </div>
                );
            })}
        </div>
    );
};
