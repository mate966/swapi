import { SpeciesDetails } from '@/components/organisms/SpeciesDetails/SpeciesDetails';
import { GET_SPECIES } from '@/graphQL/queries/Species/getSpecie';
import { Species } from '@/store/types/compendium/species.types';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

export const SpeciesDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const { loading, error, data } = useQuery<{ Species: Species }>(GET_SPECIES, {
        variables: { id },
    });

    if (loading)
        return <div className="flex justify-center items-center min-h-screen">Ładowanie...</div>;
    if (error) return <div className="text-red-500 text-center">Błąd: {error.message}</div>;
    if (!data?.Species) return <div className="text-center">Nie znaleziono gatunku</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <SpeciesDetails item={data.Species} />
        </div>
    );
};
