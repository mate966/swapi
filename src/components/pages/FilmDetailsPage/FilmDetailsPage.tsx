import { FilmDetails } from '@/components/organisms/FilmDetails/FilmDetails';
import { GET_FILM } from '@/graphQL/queries/Films/getFilm';
import { Film } from '@/store/types/compendium/film.types';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

export const FilmDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const { loading, error, data } = useQuery<{ Film: Film }>(GET_FILM, {
        variables: { id },
    });

    if (loading)
        return <div className="flex justify-center items-center min-h-screen">Ładowanie...</div>;
    if (error) return <div className="text-red-500 text-center">Błąd: {error.message}</div>;
    if (!data?.Film) return <div className="text-center">Nie znaleziono filmu</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <FilmDetails item={data.Film} />
        </div>
    );
};
