import { RelatedItem } from './character.types';

export interface Specie {
    id: string;
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld: RelatedItem;
    language: string;
    people: RelatedItem[];
    films: RelatedItem[];
}
