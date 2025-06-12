import { CompendiumTile } from '@/components/molecules/CompendiumTile';
import { useCompendiumLink } from '@/hooks/useCompendiumLink/useCompendiumLink';
import { Character, RelatedItem } from '@/store/types/compendium/character.types';

type CharacterDetailsProps = {
    item: Character;
};

export const CharacterDetails = ({ item }: CharacterDetailsProps) => {
    const { navigateToItem } = useCompendiumLink();

    const renderLink = (
        item: RelatedItem,
        category: 'characters' | 'planets' | 'films' | 'species' | 'starships' | 'vehicles',
    ) => {
        if (!item) return <span className="text-gray-500">N/A</span>;
        return (
            <button
                onClick={() => navigateToItem({ id: item.id, category })}
                className="text-blue-600 hover:text-blue-800 hover:underline"
            >
                {item.name}
            </button>
        );
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-bold mb-6">{item.name}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700">Basic information</h3>
                        <dl className="mt-2 space-y-2">
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Birth year:</dt>
                                <dd>
                                    {item.birth_year || item.birth_year === 'unknown'
                                        ? 'N/A'
                                        : item.birth_year}
                                </dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Gender:</dt>
                                <dd>{item.gender || 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Eye color:</dt>
                                <dd>{item.eye_color || 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Hair color:</dt>
                                <dd>{item.hair_color || 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Skin color:</dt>
                                <dd>{item.skin_color || 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Height:</dt>
                                <dd>{item.height ? `${item.height} cm` : 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Mass:</dt>
                                <dd>{item.mass ? `${item.mass} kg` : 'N/A'}</dd>
                            </div>
                        </dl>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-700">Relations</h3>
                        <dl className="mt-2 space-y-2">
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Homeworld:</dt>
                                <dd>
                                    {item.homeworld ? renderLink(item.homeworld, 'planets') : 'N/A'}
                                </dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Species:</dt>
                                <dd>
                                    {item.species && item.species.length > 0 ? (
                                        <div className="space-y-1">
                                            {item.species.map(species => (
                                                <div key={species.id}>
                                                    {renderLink(species, 'species')}
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        'N/A'
                                    )}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>

                <div className="space-y-6">
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
