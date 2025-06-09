import { Section } from '@/components/organisms/Section/Section';
import { swapiService } from '@/services/api/api';
import { Page as PageType } from '@/services/api/api.types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Page = () => {
    const location = useLocation();
    const [page, setPage] = useState<PageType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                setLoading(true);
                const pageSlug = location.pathname === '/' ? '/home' : location.pathname;
                const data = await swapiService.getPage(pageSlug);
                setPage(data);
            } catch (err) {
                setError('Failed to load page');
                console.error('Page fetch error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchPage();
    }, [location.pathname]);

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

    if (!page) {
        return <div className="text-center">Page not found</div>;
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
