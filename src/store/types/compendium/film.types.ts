import { RelatedItem } from './character.types';

export interface Film {
    id: string;
    title: string;
    episodeID: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: RelatedItem[];
    planets: RelatedItem[];
    starships: RelatedItem[];
    vehicles: RelatedItem[];
    species: RelatedItem[];
}
