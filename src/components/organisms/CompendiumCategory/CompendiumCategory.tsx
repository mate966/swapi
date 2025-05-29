import { swapiService } from '@/services/api/api';
import { Character } from '@/services/api/api.types';
import { useEffect, useRef, useState } from 'react';
import { CompendiumCategoryTypes } from './compendiumCategory.types';

const LIMIT = 10;

export const CompendiumCategory = ({ block }: CompendiumCategoryTypes) => {
    const { category } = block;
    const [characters, setCharacters] = useState<Character[]>([]);
    const [page, setPage] = useState(1);
    // const [hasNextPage, setHasNextPage] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const isFirstLoad = useRef(true);

    useEffect(() => {
        if (!isFirstLoad.current) return;

        isFirstLoad.current = false;
        setCharacters([]);
        setPage(1);

        const fetchCharacters = async () => {
            try {
                setLoading(true);
                const data = await swapiService.getCategory(category, LIMIT, 1);
                setCharacters(data.docs);
            } catch (err) {
                setError('Failed to load characters');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, [category]);
    //TODO: check if hasNextPage is true and if the characters array is not empty
    const loadMore = async () => {
        const nextPage = page + 1;
        try {
            setLoading(true);
            const data = await swapiService.getCategory(category, LIMIT, nextPage);
            setCharacters(prev => [...prev, ...data.docs]);
            setPage(nextPage);
        } catch (err) {
            setError('Failed to load more characters');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>Compendium: {category}</h2>
            <ul>
                {characters.map((char, id) => (
                    <li key={id}>{char.name}</li>
                ))}
            </ul>
            <button onClick={loadMore}>Load More</button>
            {/* {hasNextPage && !loading && <button onClick={loadMore}>Load More</button>} */}
            {loading && <p>Loading...</p>}
        </div>
    );
};
