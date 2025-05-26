import { ResponsiveImage } from '@/components/molecules/Image/ResponsiveImage';
import { ImageBlock } from '@/services/api/api.types';

export const Image = ({ block }: { block: ImageBlock }) => {
    console.log(block);
    return (
        <>
            {block.imageDesktop && (
                <ResponsiveImage
                    srcDesktop={block.imageDesktop?.webpUrl || block.imageDesktop?.url || ''}
                    srcMobile={
                        block.imageMobile?.webpUrl ||
                        block.imageMobile?.url ||
                        block.imageDesktop?.url ||
                        ''
                    }
                    alt={block.imageDesktop?.alt || 'Image'}
                />
            )}
        </>
    );
};
