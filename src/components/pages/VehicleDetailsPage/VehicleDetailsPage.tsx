import { VehicleDetails } from '@/components/organisms/VehicleDetails/VehicleDetails';
import { GET_VEHICLE } from '@/graphQL/queries/Vehicles/getVehicle';
import { Vehicle } from '@/store/types/compendium/vehicle.types';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

export const VehicleDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    console.log(id);
    const { loading, error, data } = useQuery<{ Vehicle: Vehicle }>(GET_VEHICLE, {
        variables: { id },
    });

    if (loading)
        return <div className="flex justify-center items-center min-h-screen">Ładowanie...</div>;
    if (error) return <div className="text-red-500 text-center">Błąd: {error.message}</div>;
    if (!data?.Vehicle) return <div className="text-center">Nie znaleziono pojazdu</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <VehicleDetails item={data.Vehicle} />
        </div>
    );
};
