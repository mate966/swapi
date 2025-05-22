import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { fetchPageBySlug } from '@/store/slices/pagesSlice';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const SlugPage = () => {
    const { slug } = useParams();
    const dispatch = useAppDispatch();
    const { currentPage, isLoading, error } = useAppSelector(state => state.pages);

    useEffect(() => {
        if (slug) {
            const pageSlug = Array.isArray(slug) ? slug.join('/') : slug;
            dispatch(fetchPageBySlug(pageSlug));
        }
    }, [dispatch, slug]);

    if (isLoading) {
        return <div>Ładowanie...</div>;
    }

    if (error) {
        return <div>Błąd: {error}</div>;
    }

    if (!currentPage) {
        return <div>Strona nie znaleziona</div>;
    }

    return (
        <div className="slug-page">
            <h1>{currentPage.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
        </div>
    );
};
