import { swapiService } from '@/services/api/api';
import { Character } from '@/store/types/compendium/character.types';
import { Film } from '@/store/types/compendium/film.types';
import { Planet } from '@/store/types/compendium/planet.types';
import { Species } from '@/store/types/compendium/species.types';
import { Starship } from '@/store/types/compendium/starship.types';
import { Vehicle } from '@/store/types/compendium/vehicle.types';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CharacterDetails } from '../CharacterDetails/CharacterDetails';
import { FilmDetails } from '../FilmDetails/FilmDetails';
import { PlanetDetails } from '../PlanetDetails/PlanetDetails';
import { SpeciesDetails } from '../SpeciesDetails/SpeciesDetails';
import { StarshipDetails } from '../StarshipDetails/StarshipDetails';
import { VehicleDetails } from '../VehicleDetails/VehicleDetails';
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

    const renderCategory = (item: Character | Film | Planet | Species | Starship | Vehicle) => {
        const detailsComponent = (() => {
            switch (category) {
                case 'characters':
                    return <CharacterDetails item={item as Character} />;
                case 'films':
                    return <FilmDetails item={item as Film} />;
                case 'planets':
                    return <PlanetDetails item={item as Planet} />;
                case 'species':
                    return <SpeciesDetails item={item as Species} />;
                case 'starships':
                    return <StarshipDetails item={item as Starship} />;
                case 'vehicles':
                    return <VehicleDetails item={item as Vehicle} />;
                default:
                    return <div>Nieznana kategoria</div>;
            }
        })();

        return (
            <Link
                to={`/${category}/${item.id}`}
                className="block p-4 hover:bg-gray-100 transition-colors duration-200 rounded-lg"
            >
                {detailsComponent}
            </Link>
        );
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Compendium: {category}</h2>
            <ul className="space-y-4">
                {categoryData.map((item, index) => (
                    <li key={index} className="border rounded-lg overflow-hidden">
                        {renderCategory(item)}
                    </li>
                ))}
            </ul>
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
