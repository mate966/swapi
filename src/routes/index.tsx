import App from '@/App';
import { Page } from '@/components/Page/Page';
import { CompendiumDetailsPage } from '@/components/pages/CompendiumDetailsPage/CompendiumDetailsPage';
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
