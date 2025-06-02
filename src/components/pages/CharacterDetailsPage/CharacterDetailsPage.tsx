import { CharacterDetails } from '@/components/organisms/CharacterDetails/CharacterDetails';
import { GET_CHARACTER } from '@/graphQL/queries/Characters/getCharacter';
import { Character } from '@/store/types/compendium/character.types';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

export const CharacterDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const { loading, error, data } = useQuery<{ Character: Character }>(GET_CHARACTER, {
        variables: { id },
    });
    console.log(id);

    if (loading)
        return <div className="flex justify-center items-center min-h-screen">Ładowanie...</div>;
    if (error) return <div className="text-red-500 text-center">Błąd: {error.message}</div>;
    if (!data?.Character) return <div className="text-center">Nie znaleziono postaci</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <CharacterDetails item={data.Character} />
        </div>
    );
};
