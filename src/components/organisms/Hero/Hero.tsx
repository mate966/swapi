import { ResponsiveImage } from '@/components/molecules/Image/ResponsiveImage';
import { HeroBlock } from '@/services/api/api.types';

export const Hero = ({ block }: { block: HeroBlock }) => {
    console.log(block);
    return (
        <div className="relative bg-gray-900 text-white py-20">
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
            <div className="relative container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-4">{block.heroTitle}</h2>
                {block.description && <p className="text-xl">{block.description}</p>}
            </div>
        </div>
    );
};
