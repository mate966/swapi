import { LinkItem } from '@/components/atoms/LinkItem/LinkItem';
import { CompendiumTile } from '@/components/molecules/CompendiumTile/CompendiumTile';
import { Character } from '@/store/types/compendium/character.types';
import { Film } from '@/store/types/compendium/film.types';
import { Planet } from '@/store/types/compendium/planet.types';
import { Specie } from '@/store/types/compendium/species.types';
import { Starship } from '@/store/types/compendium/starship.types';
import { Vehicle } from '@/store/types/compendium/vehicle.types';
import { FeaturedTypes } from './featured.types';

export const Featured = ({ block }: FeaturedTypes) => {
    const { title, linkedItem, featuredLink } = block;

    const renderItems = (items: (Character | Planet | Starship | Vehicle | Specie | Film)[]) => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(item => (
                <CompendiumTile key={item.id} item={item} category={linkedItem.category} />
            ))}
        </div>
    );

    const renderContent = () => {
        const categoryLabels = {
            characters: 'characters',
            planets: 'planets',
            starships: 'starships',
            vehicles: 'vehicles',
            species: 'species',
            films: 'films',
        };

        const categoryLabel = categoryLabels[linkedItem.category] || linkedItem.category;

        switch (linkedItem.category) {
            case 'characters':
                return linkedItem.item_characters && linkedItem.item_characters.length > 0 ? (
                    renderItems(linkedItem.item_characters)
                ) : (
                    <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">No {categoryLabel} to display</p>
                        <p className="text-sm text-gray-400">
                            Check if the elements have been selected for this category and if the
                            collections have the appropriate access permissions.
                        </p>
                    </div>
                );
            case 'planets':
                return linkedItem.item_planets && linkedItem.item_planets.length > 0 ? (
                    renderItems(linkedItem.item_planets)
                ) : (
                    <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">No {categoryLabel} to display</p>
                        <p className="text-sm text-gray-400">
                            Check if the elements have been selected for this category and if the
                            collections have the appropriate access permissions.
                        </p>
                    </div>
                );
            case 'starships':
                return linkedItem.item_starships && linkedItem.item_starships.length > 0 ? (
                    renderItems(linkedItem.item_starships)
                ) : (
                    <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">No {categoryLabel} to display</p>
                        <p className="text-sm text-gray-400">
                            Check if the elements have been selected for this category and if the
                            collections have the appropriate access permissions.
                        </p>
                    </div>
                );
            case 'vehicles':
                return linkedItem.item_vehicles && linkedItem.item_vehicles.length > 0 ? (
                    renderItems(linkedItem.item_vehicles)
                ) : (
                    <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">No {categoryLabel} to display</p>
                        <p className="text-sm text-gray-400">
                            Check if the elements have been selected for this category and if the
                            collections have the appropriate access permissions.
                        </p>
                    </div>
                );
            case 'species':
                return linkedItem.item_species && linkedItem.item_species.length > 0 ? (
                    renderItems(linkedItem.item_species)
                ) : (
                    <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">No {categoryLabel} to display</p>
                        <p className="text-sm text-gray-400">
                            Check if the elements have been selected for this category and if the
                            collections have the appropriate access permissions.
                        </p>
                    </div>
                );
            case 'films':
                return linkedItem.item_films && linkedItem.item_films.length > 0 ? (
                    renderItems(linkedItem.item_films)
                ) : (
                    <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">No {categoryLabel} to display</p>
                        <p className="text-sm text-gray-400">
                            Check if the elements have been selected for this category and if the
                            collections have the appropriate access permissions.
                        </p>
                    </div>
                );
            default:
                return (
                    <div className="text-center py-8">
                        <p className="text-red-500">Unknown category: {linkedItem.category}</p>
                    </div>
                );
        }
    };

    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">{title}</h2>
                <div className="mb-6">
                    <p className="text-center text-lg text-gray-600 capitalize">
                        Kategoria: <span className="font-semibold">{linkedItem.category}</span>
                    </p>
                </div>
                {renderContent()}
                <div className="container mx-auto px-4">
                    <LinkItem {...featuredLink} />
                </div>
            </div>
        </div>
    );
};
