import { CompendiumTile } from '@/components/molecules/CompendiumTile/CompendiumTile';
import { FilmDetailsProps } from './filmDetails.types';

export const FilmDetails = ({ item }: FilmDetailsProps) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold mb-6">{item.title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700">Basic Information</h3>
                        <dl className="mt-2 space-y-2">
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Episode:</dt>
                                <dd>{item.episodeID || 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Director:</dt>
                                <dd>{item.director || 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Producer:</dt>
                                <dd>{item.producer || 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Release Date:</dt>
                                <dd>{item.release_date || 'N/A'}</dd>
                            </div>
                        </dl>
                    </div>

                    {item.opening_crawl && (
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">
                                Opening Crawl
                            </h3>
                            <p className="text-gray-600 italic">{item.opening_crawl}</p>
                        </div>
                    )}
                </div>

                <div className="space-y-6">
                    {item.characters && item.characters.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-3">Characters</h3>
                            <div className="grid grid-cols-1 gap-3">
                                {item.characters.map(character => (
                                    <CompendiumTile
                                        key={character.id}
                                        item={{
                                            id: character.id,
                                            name: character.name,
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

                    {item.planets && item.planets.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-3">Planets</h3>
                            <div className="grid grid-cols-1 gap-3">
                                {item.planets.map(planet => (
                                    <CompendiumTile
                                        key={planet.id}
                                        item={{
                                            id: planet.id,
                                            name: planet.name,
                                            rotation_period: '',
                                            orbital_period: '',
                                            diameter: '',
                                            climate: '',
                                            gravity: '',
                                            terrain: '',
                                            surface_water: '',
                                            population: '',
                                            residents: [],
                                            films: [],
                                        }}
                                        category="planets"
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {item.starships && item.starships.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-3">Starships</h3>
                            <div className="grid grid-cols-1 gap-3">
                                {item.starships.map(starship => (
                                    <CompendiumTile
                                        key={starship.id}
                                        item={{
                                            id: starship.id,
                                            name: starship.name,
                                            model: '',
                                            manufacturer: '',
                                            cost_in_credits: '',
                                            length: '',
                                            max_atmosphering_speed: '',
                                            crew: '',
                                            passengers: '',
                                            cargo_capacity: '',
                                            consumables: '',
                                            hyperdrive_rating: '',
                                            MGLT: '',
                                            starship_class: '',
                                            pilots: [],
                                            films: [],
                                        }}
                                        category="starships"
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {item.vehicles && item.vehicles.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-3">Vehicles</h3>
                            <div className="grid grid-cols-1 gap-3">
                                {item.vehicles.map(vehicle => (
                                    <CompendiumTile
                                        key={vehicle.id}
                                        item={{
                                            id: vehicle.id,
                                            name: vehicle.name,
                                            model: '',
                                            manufacturer: '',
                                            cost_in_credits: '',
                                            length: '',
                                            max_atmosphering_speed: '',
                                            crew: '',
                                            passengers: '',
                                            cargo_capacity: '',
                                            consumables: '',
                                            vehicle_class: '',
                                            pilots: [],
                                            films: [],
                                        }}
                                        category="vehicles"
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {item.species && item.species.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-3">Species</h3>
                            <div className="grid grid-cols-1 gap-3">
                                {item.species.map(species => (
                                    <CompendiumTile
                                        key={species.id}
                                        item={{
                                            id: species.id,
                                            name: species.name,
                                            classification: '',
                                            designation: '',
                                            average_height: '',
                                            skin_colors: '',
                                            hair_colors: '',
                                            eye_colors: '',
                                            average_lifespan: '',
                                            homeworld: { id: '', name: '' },
                                            language: '',
                                            people: [],
                                            films: [],
                                        }}
                                        category="species"
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
