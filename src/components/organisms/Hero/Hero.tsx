import { HeroBlock } from '@/services/api/api.types';

export const Hero = ({ block }: { block: HeroBlock }) => {
    return (
        <div className="relative bg-gray-900 text-white py-20">
            {block.image && (
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${block.image.url})` }}
                />
            )}
            <div className="relative container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-4">{block.heroTitle}</h2>
                {block.description && <p className="text-xl">{block.description}</p>}
            </div>
        </div>
    );
};
