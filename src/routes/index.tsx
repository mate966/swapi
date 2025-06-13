import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import { CompendiumDetailsPage } from '@/components/pages/CompendiumDetailsPage';
import { Page } from '@/components/pages/Page/Page';
import { NotFound } from '@/components/scaffold/NotFound';
import { PageTransition } from '@/components/scaffold/PageTransition';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                element: <PageTransition />,
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
            },
        ],
        errorElement: <NotFound />,
    },
]);
