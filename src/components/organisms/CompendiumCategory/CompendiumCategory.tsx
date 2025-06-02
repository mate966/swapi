import { swapiService } from '@/services/api/api';
import { Character } from '@/store/types/compendium/character.types';
import { Film } from '@/store/types/compendium/film.types';
import { Planet } from '@/store/types/compendium/planet.types';
import { Species } from '@/store/types/compendium/species.types';
import { Starship } from '@/store/types/compendium/starship.types';
import { Vehicle } from '@/store/types/compendium/vehicle.types';
import { useEffect, useRef, useState } from 'react';
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
    // const [hasNextPage, setHasNextPage] = useState(true);
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
                setError(`Failed to load ${category}`);
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCategory();
    }, [category]);

    //TODO: check if hasNextPage is true and if the characters array is not empty
    const loadMore = async () => {
        const nextPage = page + 1;
        try {
            setLoading(true);
            const data = await swapiService.getCategory(category, LIMIT, nextPage);
            setCategoryData(prev => [...prev, ...data]);
            setPage(nextPage);
        } catch (err) {
            setError(`Failed to load more ${category}`);
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (error) return <div>{error}</div>;

    const renderCategory = (item: Character | Film | Planet | Species | Starship | Vehicle) => {
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
                return <div>Unknown category</div>;
        }
    };

    return (
        <div>
            <h2>Compendium: {category}</h2>
            <ul>
                {categoryData.map((item, index) => (
                    <li key={index}>{renderCategory(item)}</li>
                ))}
            </ul>
            <button onClick={loadMore}>Load More</button>
            {/* {hasNextPage && !loading && <button onClick={loadMore}>Load More</button>} */}
            {loading && <p>Loading...</p>}
        </div>
    );
};
