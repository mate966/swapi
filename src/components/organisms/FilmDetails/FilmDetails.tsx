import { Film } from '@/store/types/compendium/film.types';

export const FilmDetails = ({ item }: { item: Film }) => {
    return <div>{item.title}</div>;
};
