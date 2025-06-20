import { useCompendiumLink } from '@/hooks/useCompendiumLink/useCompendiumLink';
import { Character } from '@/store/types/compendium/character.types';
import { CompendiumCategory } from '@/store/types/compendium/compendium.types';
import { Film } from '@/store/types/compendium/film.types';
import { Planet } from '@/store/types/compendium/planet.types';
import { Specie } from '@/store/types/compendium/species.types';
import { Starship } from '@/store/types/compendium/starship.types';
import { Vehicle } from '@/store/types/compendium/vehicle.types';
import { Link } from 'react-router-dom';

type CompendiumItem = Character | Film | Planet | Specie | Starship | Vehicle;

type CompendiumTileProps = {
    item: CompendiumItem;
    category: CompendiumCategory;
};

export const CompendiumTile = ({ item, category }: CompendiumTileProps) => {
    const { getItemLink } = useCompendiumLink();
    const itemWithCategory = { ...item, category } as CompendiumItem & {
        category: CompendiumCategory;
    };
    const link = getItemLink(itemWithCategory);

    const title = 'title' in item ? item.title : item.name;

    return (
        <Link
            to={link || '#'}
            className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </Link>
    );
};
