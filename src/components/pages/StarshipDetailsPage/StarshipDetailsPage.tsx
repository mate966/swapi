import { StarshipDetails } from '@/components/organisms/StarshipDetails/StarshipDetails';
import { GET_STARSHIP } from '@/graphQL/queries/Starships/getStarship';
import { Starship } from '@/store/types/compendium/starship.types';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

export const StarshipDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const { loading, error, data } = useQuery<{ Starship: Starship }>(GET_STARSHIP, {
        variables: { id },
    });

    if (loading)
        return <div className="flex justify-center items-center min-h-screen">Ładowanie...</div>;
    if (error) return <div className="text-red-500 text-center">Błąd: {error.message}</div>;
    if (!data?.Starship)
        return <div className="text-center">Nie znaleziono statku kosmicznego</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <StarshipDetails item={data.Starship} />
        </div>
    );
};
