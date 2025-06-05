import { QueryState } from '@/components/molecules/QueryState/QueryState';
import { CharacterDetails } from '@/components/organisms/CharacterDetails/CharacterDetails';
import { FilmDetails } from '@/components/organisms/FilmDetails/FilmDetails';
import { PlanetDetails } from '@/components/organisms/PlanetDetails/PlanetDetails';
import { SpeciesDetails } from '@/components/organisms/SpeciesDetails/SpeciesDetails';
import { StarshipDetails } from '@/components/organisms/StarshipDetails/StarshipDetails';
import { VehicleDetails } from '@/components/organisms/VehicleDetails/VehicleDetails';
import { GET_CHARACTER } from '@/graphQL/queries/Characters/getCharacter';
import { GET_FILM } from '@/graphQL/queries/Films/getFilm';
import { GET_PLANET } from '@/graphQL/queries/Planets/getPlanet';
import { GET_SPECIES } from '@/graphQL/queries/Species/getSpecie';
import { GET_STARSHIP } from '@/graphQL/queries/Starships/getStarship';
import { GET_VEHICLE } from '@/graphQL/queries/Vehicles/getVehicle';
import { useQuery } from '@apollo/client';
import { Navigate, useParams } from 'react-router-dom';

type CompendiumType = 'characters' | 'films';

const QUERIES = {
    characters: GET_CHARACTER,
    films: GET_FILM,
    planets: GET_PLANET,
    species: GET_SPECIES,
    starships: GET_STARSHIP,
    vehicles: GET_VEHICLE,
} as const;

const DETAILS_COMPONENTS = {
    characters: CharacterDetails,
    films: FilmDetails,
    planets: PlanetDetails,
    species: SpeciesDetails,
    starships: StarshipDetails,
    vehicles: VehicleDetails,
} as const;

export const CompendiumDetailsPage = () => {
    const { id, type } = useParams<{ id: string; type: string }>();
    const compendiumType = type as CompendiumType;

    const { loading, error, data } = useQuery(QUERIES[compendiumType] || QUERIES.characters, {
        variables: { id },
        skip: !type || !id || !Object.keys(QUERIES).includes(type),
    });

    if (!type || !id || !Object.keys(QUERIES).includes(type)) {
        return <Navigate to="/" replace />;
    }

    const DetailsComponent = DETAILS_COMPONENTS[compendiumType];
    const item =
        data?.[
            compendiumType.slice(0, -1).charAt(0).toUpperCase() +
                compendiumType.slice(0, -1).slice(1)
        ];

    return (
        <QueryState loading={loading} error={error} empty={!item}>
            <div className="container mx-auto px-4 py-8">
                <DetailsComponent item={item} />
            </div>
        </QueryState>
    );
};
