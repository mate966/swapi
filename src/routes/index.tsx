import App from '@/App';
import { Page } from '@/components/Page/Page';
import { CharacterDetailsPage } from '@/components/pages/CharacterDetailsPage/CharacterDetailsPage';
import { FilmDetailsPage } from '@/components/pages/FilmDetailsPage/FilmDetailsPage';
import { PlanetDetailsPage } from '@/components/pages/PlanetDetailsPage/PlanetDetailsPage';
import { SpeciesDetailsPage } from '@/components/pages/SpeciesDetailsPage/SpeciesDetailsPage';
import { StarshipDetailsPage } from '@/components/pages/StarshipDetailsPage/StarshipDetailsPage';
import { VehicleDetailsPage } from '@/components/pages/VehicleDetailsPage/VehicleDetailsPage';
import { NotFound } from '@/components/scaffold/NotFound/NotFound';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Page />,
            },
            {
                path: ':slug',
                element: <Page />,
            },
            {
                path: ':slug/:subslug',
                element: <Page />,
            },
            {
                path: ':slug/:subslug/:subsubslug',
                element: <Page />,
            },
            {
                path: 'characters/:id',
                element: <CharacterDetailsPage />,
            },
            {
                path: 'films/:id',
                element: <FilmDetailsPage />,
            },
            {
                path: 'planets/:id',
                element: <PlanetDetailsPage />,
            },
            {
                path: 'species/:id',
                element: <SpeciesDetailsPage />,
            },
            {
                path: 'starships/:id',
                element: <StarshipDetailsPage />,
            },
            {
                path: 'vehicles/:id',
                element: <VehicleDetailsPage />,
            },
            {
                path: '*',
                element: <Page />,
            },
        ],
        errorElement: <NotFound />,
    },
]);
