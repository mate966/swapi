import { Starship } from '@/store/types/compendium/starship.types';

export const StarshipDetails = ({ item }: { item: Starship }) => {
    return <div>{item.name}</div>;
};
