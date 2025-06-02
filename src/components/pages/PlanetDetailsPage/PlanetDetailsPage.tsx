import { PlanetDetails } from '@/components/organisms/PlanetDetails/PlanetDetails';
import { GET_PLANET } from '@/graphQL/queries/Planets/getPlanet';
import { Planet } from '@/store/types/compendium/planet.types';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

export const PlanetDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const { loading, error, data } = useQuery<{ Planet: Planet }>(GET_PLANET, {
        variables: { id },
    });

    if (loading)
        return <div className="flex justify-center items-center min-h-screen">Ładowanie...</div>;
    if (error) return <div className="text-red-500 text-center">Błąd: {error.message}</div>;
    if (!data?.Planet) return <div className="text-center">Nie znaleziono planety</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <PlanetDetails item={data.Planet} />
        </div>
    );
};
