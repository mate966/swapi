import { LinkItemTypes } from '@/components/atoms/LinkItem/types';
import { Character } from '@/store/types/compendium/character.types';
import { Film } from '@/store/types/compendium/film.types';
import { Planet } from '@/store/types/compendium/planet.types';
import { Starship } from '@/store/types/compendium/starship.types';
import { Vehicle } from '@/store/types/compendium/vehicle.types';
import { Specie } from '@/store/types/compendium/species.types';

export interface FeaturedBlock {
    blockType: string;
    title: string;
    linkedItem: {
        category: 'characters' | 'planets' | 'starships' | 'vehicles' | 'species' | 'films';
        item_characters?: Character[];
        item_planets?: Planet[];
        item_starships?: Starship[];
        item_vehicles?: Vehicle[];
        item_species?: Specie[];
        item_films?: Film[];
    };
    featuredLink: LinkItemTypes;
}
