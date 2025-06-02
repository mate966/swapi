import { Species } from '@/store/types/compendium/species.types';

export const SpeciesDetails = ({ item }: { item: Species }) => {
    return <div>{item.name}</div>;
};
