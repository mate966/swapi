import { Character } from '@/store/types/compendium/character.types';
import { CompendiumCategory as CategoryType } from '@/store/types/compendium/compendium.types';
import { Film } from '@/store/types/compendium/film.types';
import { Planet } from '@/store/types/compendium/planet.types';
import { Species } from '@/store/types/compendium/species.types';
import { Starship } from '@/store/types/compendium/starship.types';
import { Vehicle } from '@/store/types/compendium/vehicle.types';

export type SortDirection = 'asc' | 'desc';

export type FilterOptions = {
    [key: string]: string[];
};

export type CompendiumItem = Character | Planet | Film | Starship | Vehicle | Species;

export type CompendiumCategoryProps = {
    block: {
        category: CategoryType;
    };
};

export type FilterMapping = {
    [key: string]: string;
};

export type ActiveFilters = {
    [key: string]: string[];
};
