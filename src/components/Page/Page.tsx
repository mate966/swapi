import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { swapiService } from '../../services/api/api';
import { HeroBlock, Page as PageType, TextBlock } from '../../services/api/api.types';

const HeroBlockComponent = ({ block }: { block: HeroBlock }) => (
    <div className="relative bg-gray-900 text-white py-20">
        {block.image && (
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${block.image.url})` }}
            />
        )}
        <div className="relative container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">{block.title}</h2>
            {block.description && <p className="text-xl">{block.description}</p>}
        </div>
    </div>
);

const TextBlockComponent = ({ block }: { block: TextBlock }) => (
    <>
        {block.textTitle && <h2 className="text-2xl font-bold mb-4">{block.textTitle}</h2>}
        {/* <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: block.text }} /> */}
    </>
);

export const Page = () => {
    const { slug } = useParams();
    const [page, setPage] = useState<PageType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                setLoading(true);
                const data = await swapiService.getPage(slug || '');
                console.log(data);
                setPage(data);
            } catch (err) {
                setError('Nie udało się załadować strony');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchPage();
        }
    }, [slug]);

    console.log(page?.content);

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">Ładowanie...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

    if (!page) {
        return <div className="text-center">Strona nie została znaleziona</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">{page.title}</h1>
            <div>
                {page.content.map((block, index) => {
                    switch (block.blockType) {
                        case 'Hero':
                            return <HeroBlockComponent key={index} block={block} />;
                        case 'text_block':
                            return <TextBlockComponent key={index} block={block} />;
                        default:
                            return null;
                    }
                })}
            </div>
        </div>
    );
};
