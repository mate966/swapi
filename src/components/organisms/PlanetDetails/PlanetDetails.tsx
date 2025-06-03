import { CompendiumTile } from '@/components/molecules/CompendiumTile/CompendiumTile';
import { Planet } from '@/store/types/compendium/planet.types';

type PlanetDetailsProps = {
    item: Planet;
};

export const PlanetDetails = ({ item }: PlanetDetailsProps) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold mb-6">{item.name}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700">
                            Podstawowe informacje
                        </h3>
                        <dl className="mt-2 space-y-2">
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Okres rotacji:</dt>
                                <dd>
                                    {item.rotation_period
                                        ? `${item.rotation_period} godzin`
                                        : 'N/A'}
                                </dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Okres orbitalny:</dt>
                                <dd>
                                    {item.orbital_period ? `${item.orbital_period} dni` : 'N/A'}
                                </dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Średnica:</dt>
                                <dd>{item.diameter ? `${item.diameter} km` : 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Klimat:</dt>
                                <dd>{item.climate || 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Grawitacja:</dt>
                                <dd>{item.gravity || 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Teren:</dt>
                                <dd>{item.terrain || 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Powierzchnia wody:</dt>
                                <dd>{item.surface_water ? `${item.surface_water}%` : 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Populacja:</dt>
                                <dd>{item.population || 'N/A'}</dd>
                            </div>
                        </dl>
                    </div>
                </div>

                <div className="space-y-6">
                    {item.residents && item.residents.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-3">Mieszkańcy</h3>
                            <div className="grid grid-cols-1 gap-3">
                                {item.residents.map(resident => (
                                    <CompendiumTile
                                        key={resident}
                                        item={{
                                            id: resident,
                                            name: resident,
                                            height: '',
                                            mass: '',
                                            hair_color: '',
                                            skin_color: '',
                                            eye_color: '',
                                            birth_year: '',
                                            gender: '',
                                            homeworld: '',
                                            films: [],
                                            species: [],
                                            vehicles: [],
                                            starships: [],
                                        }}
                                        category="characters"
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {item.films && item.films.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-3">Filmy</h3>
                            <div className="grid grid-cols-1 gap-3">
                                {item.films.map(film => (
                                    <CompendiumTile
                                        key={film}
                                        item={{
                                            id: film,
                                            title: film,
                                            episodeID: 0,
                                            opening_crawl: '',
                                            director: '',
                                            producer: '',
                                            release_date: '',
                                            characters: [],
                                            planets: [],
                                            starships: [],
                                            vehicles: [],
                                            species: [],
                                        }}
                                        category="films"
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
