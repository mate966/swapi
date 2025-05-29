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
                path: '*',
                element: <Page />,
            },
        ],
        errorElement: <NotFound />,
    },
]);
