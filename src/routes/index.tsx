import App from '@/App';
import { CompendiumDetailsPage } from '@/components/Pages/CompendiumDetailsPage/CompendiumDetailsPage';
import { Page } from '@/components/Pages/Page/Page';
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
                path: 'compendium/:type/:id',
                element: <CompendiumDetailsPage />,
            },
            {
                path: '*',
                element: <Page />,
            },
        ],
        errorElement: <NotFound />,
    },
]);
