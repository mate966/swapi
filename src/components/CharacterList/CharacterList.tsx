import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Person } from '../../services/api';
import { AppDispatch, RootState } from '../../store';
import { fetchCharacters, setPage } from '../../store/slices/charactersSlice';

const CharacterList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { characters, loading, error, currentPage, totalPages } = useSelector(
        (state: RootState) => state.characters,
    );

    useEffect(() => {
        dispatch(fetchCharacters(currentPage));
    }, [dispatch, currentPage]);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            dispatch(setPage(newPage));
        }
    };

    if (loading) return <div className="text-center p-4">Loading...</div>;
    if (error) return <div className="text-red-500 p-4">Error: {error}</div>;

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {characters.map((character: Person) => (
                    <div key={character.id} className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-xl font-bold mb-2">{character.name}</h2>
                        <div className="space-y-2">
                            <p>
                                <span className="font-semibold">Height:</span> {character.height} cm
                            </p>
                            <p>
                                <span className="font-semibold">Mass:</span> {character.mass} kg
                            </p>
                            <p>
                                <span className="font-semibold">Hair color:</span>{' '}
                                {character.hair_color}
                            </p>
                            <p>
                                <span className="font-semibold">Skin color:</span>{' '}
                                {character.skin_color}
                            </p>
                            <p>
                                <span className="font-semibold">Eye color:</span>{' '}
                                {character.eye_color}
                            </p>
                            <p>
                                <span className="font-semibold">Birth year:</span>{' '}
                                {character.birth_year}
                            </p>
                            <p>
                                <span className="font-semibold">Gender:</span> {character.gender}
                            </p>
                            {character.homeworld && (
                                <p>
                                    <span className="font-semibold">Homeworld:</span>{' '}
                                    {character.homeworld.name}
                                </p>
                            )}
                            {character.films.length > 0 && (
                                <div>
                                    <p className="font-semibold">Films:</p>
                                    <ul className="list-disc list-inside">
                                        {character.films.map(film => (
                                            <li key={film.id}>{film.title}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {character.species.length > 0 && (
                                <div>
                                    <p className="font-semibold">Species:</p>
                                    <ul className="list-disc list-inside">
                                        {character.species.map(species => (
                                            <li key={species.id}>{species.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {character.starships.length > 0 && (
                                <div>
                                    <p className="font-semibold">Starships:</p>
                                    <ul className="list-disc list-inside">
                                        {character.starships.map(starship => (
                                            <li key={starship.id}>{starship.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {character.vehicles.length > 0 && (
                                <div>
                                    <p className="font-semibold">Vehicles:</p>
                                    <ul className="list-disc list-inside">
                                        {character.vehicles.map(vehicle => (
                                            <li key={vehicle.id}>{vehicle.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center gap-4 mt-4 mb-8">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 hover:bg-blue-600 transition-colors"
                >
                    Previous
                </button>
                <span className="px-4 py-2">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 hover:bg-blue-600 transition-colors"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default CharacterList;
