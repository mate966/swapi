import { QueryState } from '@/components/molecules/QueryState';
import { CharacterDetails } from '@/components/organisms/CharacterDetails';
import { FilmDetails } from '@/components/organisms/FilmDetails';
import { PlanetDetails } from '@/components/organisms/PlanetDetails';
import { SpecieDetails } from '@/components/organisms/SpecieDetails';
import { StarshipDetails } from '@/components/organisms/StarshipDetails';
import { VehicleDetails } from '@/components/organisms/VehicleDetails';
import { GET_CHARACTER } from '@/graphQL/queries/Characters/getCharacter';
import { GET_FILM } from '@/graphQL/queries/Films/getFilm';
import { GET_PLANET } from '@/graphQL/queries/Planets/getPlanet';
import { GET_SPECIES } from '@/graphQL/queries/Species/getSpecie';
import { GET_STARSHIP } from '@/graphQL/queries/Starships/getStarship';
import { GET_VEHICLE } from '@/graphQL/queries/Vehicles/getVehicle';
import { useQuery } from '@apollo/client';
import { Navigate, useParams } from 'react-router-dom';

type CompendiumType = 'characters' | 'films' | 'planets' | 'species' | 'starships' | 'vehicles';

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
    species: SpecieDetails,
    starships: StarshipDetails,
    vehicles: VehicleDetails,
} as const;

const DATA_KEYS = {
    characters: 'Character',
    films: 'Film',
    planets: 'Planet',
    species: 'Species',
    starships: 'Starship',
    vehicles: 'Vehicle',
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
    const item = data?.[DATA_KEYS[compendiumType]];

    return (
        <QueryState loading={loading} error={error} empty={!item}>
            <div className="container mx-auto px-4 py-8">
                <DetailsComponent item={item} />
            </div>
        </QueryState>
    );
};
