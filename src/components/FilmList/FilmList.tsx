import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import type { Film } from '@/services/api';
import { fetchFilms } from '@/store/slices/filmsSlice';
import { useEffect } from 'react';

export const FilmList = () => {
    const dispatch = useAppDispatch();
    const { films, isLoading, error, currentPage, totalPages, hasNextPage, hasPrevPage } =
        useAppSelector(state => state.films);

    useEffect(() => {
        dispatch(fetchFilms(currentPage));
    }, [dispatch, currentPage]);

    const handlePrevPage = () => {
        if (hasPrevPage) {
            dispatch(fetchFilms(currentPage - 1));
        }
    };

    const handleNextPage = () => {
        if (hasNextPage) {
            dispatch(fetchFilms(currentPage + 1));
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="filmList">
            <h2>Star Wars Films</h2>
            <div className="films">
                {films.map((film: Film) => (
                    <div key={film.id} className="filmCard">
                        <h3>{film.title}</h3>
                        <div className="filmDetails">
                            <p>
                                <strong>Episode:</strong> {film.episodeID}
                            </p>
                            <p>
                                <strong>Director:</strong> {film.director}
                            </p>
                            <p>
                                <strong>Producer:</strong> {film.producer}
                            </p>
                            <p>
                                <strong>Release Date:</strong> {film.release_date}
                            </p>
                            <div className="filmRelations">
                                <div>
                                    <h4>Characters</h4>
                                    <ul>
                                        {film.characters.map(character => (
                                            <li key={character.id}>{character.name}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4>Planets</h4>
                                    <ul>
                                        {film.planets.map(planet => (
                                            <li key={planet.id}>{planet.name}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4>Starships</h4>
                                    <ul>
                                        {film.starships.map(starship => (
                                            <li key={starship.id}>{starship.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={!hasPrevPage}>
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button onClick={handleNextPage} disabled={!hasNextPage}>
                    Next
                </button>
            </div>
        </div>
    );
};
