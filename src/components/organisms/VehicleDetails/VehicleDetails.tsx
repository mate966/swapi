import { Vehicle } from '@/store/types/compendium/vehicle.types';

export const VehicleDetails = ({ item }: { item: Vehicle }) => {
    return <div>{item.name}</div>;
};
