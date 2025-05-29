import { swapiService } from '@/services/api/api';
import { Character, Planet } from '@/services/api/api.types';

export const getCategory = async (
    category: string,
): Promise<{ Characters: Character[] } | { Planets: Planet[] }> => {
    switch (category) {
        case 'characters': {
            const characters = await swapiService.getCharacters();
            return { Characters: characters };
        }
        case 'planets': {
            const planets = await swapiService.getPlanets();
            return { Planets: planets };
        }
        default:
            throw new Error(`Unknown category: ${category}`);
    }
};
