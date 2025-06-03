export interface RelatedItem {
    id: string;
    name: string;
}

export interface Character {
    id: string;
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: RelatedItem;
    films: RelatedItem[];
    species: RelatedItem[];
    vehicles: RelatedItem[];
    starships: RelatedItem[];
}
