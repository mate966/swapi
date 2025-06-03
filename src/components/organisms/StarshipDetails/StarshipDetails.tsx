import { CompendiumTile } from '@/components/molecules/CompendiumTile/CompendiumTile';
import { StarshipDetailsProps } from './starshipDetails.types';

export const StarshipDetails = ({ item }: StarshipDetailsProps) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold mb-6">{item.name}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700">Basic Information</h3>
                        <dl className="mt-2 space-y-2">
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Model:</dt>
                                <dd>{item.model || 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Manufacturer:</dt>
                                <dd>{item.manufacturer || 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Cost:</dt>
                                <dd>
                                    {item.cost_in_credits
                                        ? `${item.cost_in_credits} credits`
                                        : 'N/A'}
                                </dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Length:</dt>
                                <dd>{item.length ? `${item.length} m` : 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Max Speed:</dt>
                                <dd>
                                    {item.max_atmosphering_speed
                                        ? `${item.max_atmosphering_speed} km/h`
                                        : 'N/A'}
                                </dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Crew:</dt>
                                <dd>{item.crew || 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Passengers:</dt>
                                <dd>{item.passengers || 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Cargo Capacity:</dt>
                                <dd>{item.cargo_capacity ? `${item.cargo_capacity} kg` : 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Consumables:</dt>
                                <dd>{item.consumables || 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Hyperdrive Rating:</dt>
                                <dd>{item.hyperdrive_rating || 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">MGLT:</dt>
                                <dd>{item.MGLT || 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Class:</dt>
                                <dd>{item.starship_class || 'N/A'}</dd>
                            </div>
                        </dl>
                    </div>
                </div>

                <div className="space-y-6">
                    {item.pilots && item.pilots.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-3">Pilots</h3>
                            <div className="grid grid-cols-1 gap-3">
                                {item.pilots.map(pilot => (
                                    <CompendiumTile
                                        key={pilot.id}
                                        item={{
                                            id: pilot.id,
                                            name: pilot.name,
                                            height: '',
                                            mass: '',
                                            hair_color: '',
                                            skin_color: '',
                                            eye_color: '',
                                            birth_year: '',
                                            gender: '',
                                            homeworld: { id: '', name: '' },
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
                            <h3 className="text-lg font-semibold text-gray-700 mb-3">Films</h3>
                            <div className="grid grid-cols-1 gap-3">
                                {item.films.map(film => (
                                    <CompendiumTile
                                        key={film.id}
                                        item={{
                                            id: film.id,
                                            title: film.name,
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
