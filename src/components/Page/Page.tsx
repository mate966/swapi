import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { swapiService } from '../../services/api/api';
import { Page as PageType } from '../../services/api/api.types';
import { Section } from '../organisms/Section/Section';

export const Page = () => {
    const { slug } = useParams();
    const location = useLocation();
    const [page, setPage] = useState<PageType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                setLoading(true);
                const pageSlug = location.pathname === '/' ? 'home' : slug;
                const data = await swapiService.getPage('/' + pageSlug);
                setPage(data);
            } catch (err) {
                setError('Nie udało się załadować strony');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPage();
    }, [slug, location.pathname]);

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
            {page.content.map((block, index) => (
                <Section key={index} block={block} index={index} />
            ))}
        </div>
    );
};
