import { Planet } from '@/store/types/compendium/planet.types';

export const PlanetDetails = ({ item }: { item: Planet }) => {
    return <div>{item.name}</div>;
};
