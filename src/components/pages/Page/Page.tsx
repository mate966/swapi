import { useEffect, useState } from 'react';

import { swapiService } from '@/services/api/api';
import { Page as PageType } from '@/services/api/api.types';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux/useRedux';

import { RootState } from '@/store';
import { Section } from '@/components/organisms/Section';
import { setIsPageLoaded } from '@/store/slices/globalSlice';

export const Page = () => {
    const dispatch = useAppDispatch();
    const displayedLocation = useAppSelector((state: RootState) => state.global.displayedLocation);
    const [page, setPage] = useState<PageType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                setLoading(true);
                const pageSlug =
                    displayedLocation.pathname === '/' ? '/home' : displayedLocation.pathname;
                const data = await swapiService.getPage(pageSlug);
                setPage(data);
                dispatch(setIsPageLoaded(true));
            } catch (err) {
                setError('Failed to load page');
                console.error('Page fetch error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchPage();
    }, [displayedLocation, dispatch]);

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
