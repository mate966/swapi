import { CompendiumTile } from '@/components/molecules/CompendiumTile/CompendiumTile';
import { useCompendiumLink } from '@/hooks/useCompendiumLink';
import { RelatedItem } from '@/store/types/compendium/character.types';
import { Species } from '@/store/types/compendium/species.types';

type SpeciesDetailsProps = {
    item: Species;
};

export const SpeciesDetails = ({ item }: SpeciesDetailsProps) => {
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
                        <h3 className="text-lg font-semibold text-gray-700">
                            Podstawowe informacje
                        </h3>
                        <dl className="mt-2 space-y-2">
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Klasyfikacja:</dt>
                                <dd>{item.classification || 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Oznaczenie:</dt>
                                <dd>{item.designation || 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Średni wzrost:</dt>
                                <dd>{item.average_height ? `${item.average_height} cm` : 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Kolory skóry:</dt>
                                <dd>{item.skin_colors || 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Kolory włosów:</dt>
                                <dd>{item.hair_colors || 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Kolory oczu:</dt>
                                <dd>{item.eye_colors || 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Średnia długość życia:</dt>
                                <dd>{item.average_lifespan || 'N/A'}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Język:</dt>
                                <dd>{item.language || 'N/A'}</dd>
                            </div>
                        </dl>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-700">Powiązania</h3>
                        <dl className="mt-2 space-y-2">
                            <div className="flex justify-between">
                                <dt className="text-gray-600">Planeta pochodzenia:</dt>
                                <dd>
                                    {item.homeworld ? renderLink(item.homeworld, 'planets') : 'N/A'}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>

                <div className="space-y-6">
                    {item.people && item.people.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-3">Osoby</h3>
                            <div className="grid grid-cols-1 gap-3">
                                {item.people.map(person => (
                                    <CompendiumTile
                                        key={person.id}
                                        item={{
                                            id: person.id,
                                            name: person.name,
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
                            <h3 className="text-lg font-semibold text-gray-700 mb-3">Filmy</h3>
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
