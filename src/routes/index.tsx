import App from '@/App';
import { Page } from '@/components/Page/Page';
import { NotFound } from '@/components/scaffold/NotFound/NotFound';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/:slug',
                element: <Page />,
            },
        ],
        errorElement: <NotFound />,
    },
]);
