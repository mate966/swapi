import { CompendiumTile } from '@/components/molecules/CompendiumTile/CompendiumTile';
import { swapiService } from '@/services/api/api';
import { Character } from '@/store/types/compendium/character.types';
import { Film } from '@/store/types/compendium/film.types';
import { Planet } from '@/store/types/compendium/planet.types';
import { Species } from '@/store/types/compendium/species.types';
import { Starship } from '@/store/types/compendium/starship.types';
import { Vehicle } from '@/store/types/compendium/vehicle.types';
import { useEffect, useRef, useState } from 'react';
import { CompendiumCategoryTypes } from './compendiumCategory.types';

const LIMIT = 10;

export const CompendiumCategory = ({ block }: CompendiumCategoryTypes) => {
    const { category } = block;
    const [categoryData, setCategoryData] = useState<
        Character[] | Planet[] | Film[] | Starship[] | Vehicle[] | Species[]
    >([]);
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
                setError(`Nie udało się załadować ${category}`);
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
            setError(`Nie udało się załadować więcej ${category}`);
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Compendium: {category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryData.map((item, index) => (
                    <CompendiumTile key={index} item={item} category={category} />
                ))}
            </div>
            <div className="mt-6 text-center">
                <button
                    onClick={loadMore}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Załaduj więcej
                </button>
            </div>
            {loading && <p className="text-center mt-4">Ładowanie...</p>}
        </div>
    );
};
