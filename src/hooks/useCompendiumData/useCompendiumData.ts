import { swapiService } from '@/services/api/api';
import { CompendiumCategory as CategoryType } from '@/store/types/compendium/compendium.types';
import { useEffect, useRef, useState } from 'react';
import { LIMIT } from '../../components/organisms/CompendiumCategory/constants';
import { CompendiumItem } from '../../components/organisms/CompendiumCategory/types';

export const useCompendiumData = (category: CategoryType) => {
    const [categoryData, setCategoryData] = useState<CompendiumItem[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const isFirstLoad = useRef(true);

    useEffect(() => {
        if (!isFirstLoad.current) return;

        isFirstLoad.current = false;
        setCategoryData([]);
        setPage(1);

        const fetchCategory = async () => {
            try {
                setLoading(true);
                const data = await swapiService.getCategory(category, LIMIT, 1);
                setCategoryData(data);
            } catch (err) {
                setError(`Cannot load ${category}`);
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCategory();
    }, [category]);

    const loadMore = async () => {
        const nextPage = page + 1;
        try {
            setLoading(true);
            const data = await swapiService.getCategory(category, LIMIT, nextPage);
            setCategoryData(prev => [...prev, ...data]);
            setPage(nextPage);
        } catch (err) {
            setError(`Cannot load more ${category}`);
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return {
        categoryData,
        loading,
        error,
        loadMore,
    };
};
