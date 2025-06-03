// import { CompendiumTile } from '@/components/molecules/CompendiumTile/CompendiumTile';
// import { CompendiumCategory } from '@/types/compendium/compendium.types';
// import React, { ReactNode } from 'react';

// type CategoryItems = {
//     item_characters?: Array<{ id: string; name: string }>;
//     item_planets?: Array<{ id: string; name: string }>;
//     item_starships?: Array<{ id: string; name: string }>;
//     item_vehicles?: Array<{ id: string; name: string }>;
//     item_species?: Array<{ id: string; name: string }>;
//     item_films?: Array<{ id: string; name: string }>;
// };

// type UseCompendiumCategoryProps = {
//     category: CompendiumCategory;
//     items: CategoryItems;
// };

// type UseCompendiumCategoryReturn = {
//     renderContent: () => ReactNode;
//     categoryLabel: string;
// };

// export const useCompendiumCategory = ({
//     category,
//     items,
// }: UseCompendiumCategoryProps): UseCompendiumCategoryReturn => {
//     const categoryLabels: Record<CompendiumCategory, string> = {
//         characters: 'characters',
//         planets: 'planets',
//         starships: 'starships',
//         vehicles: 'vehicles',
//         species: 'species',
//         films: 'films',
//     };

//     const categoryLabel = categoryLabels[category];

//     const renderItems = (items: Array<{ id: string; name: string }>): ReactNode => (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {items.map(item => (
//                 <CompendiumTile key={item.id} item={item} category={category} />
//             ))}
//         </div>
//     );

//     const renderEmptyState = (): ReactNode => (
//         <div className="text-center py-8">
//             <p className="text-gray-500 mb-4">No {categoryLabel} to display</p>
//             <p className="text-sm text-gray-400">
//                 Check if the elements have been selected for this category and if the collections
//                 have the appropriate access permissions.
//             </p>
//         </div>
//     );

//     const renderContent = (): ReactNode => {
//         switch (category) {
//             case 'characters':
//                 return items.item_characters && items.item_characters.length > 0
//                     ? renderItems(items.item_characters)
//                     : renderEmptyState();
//             case 'planets':
//                 return items.item_planets && items.item_planets.length > 0
//                     ? renderItems(items.item_planets)
//                     : renderEmptyState();
//             case 'starships':
//                 return items.item_starships && items.item_starships.length > 0
//                     ? renderItems(items.item_starships)
//                     : renderEmptyState();
//             case 'vehicles':
//                 return items.item_vehicles && items.item_vehicles.length > 0
//                     ? renderItems(items.item_vehicles)
//                     : renderEmptyState();
//             case 'species':
//                 return items.item_species && items.item_species.length > 0
//                     ? renderItems(items.item_species)
//                     : renderEmptyState();
//             case 'films':
//                 return items.item_films && items.item_films.length > 0
//                     ? renderItems(items.item_films)
//                     : renderEmptyState();
//             default:
//                 return (
//                     <div className="text-center py-8">
//                         <p className="text-red-500">Unknown category: {category}</p>
//                     </div>
//                 );
//         }
//     };

//     return {
//         renderContent,
//         categoryLabel,
//     } as UseCompendiumCategoryReturn;
// };
