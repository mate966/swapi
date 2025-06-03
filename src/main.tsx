import { ApolloProvider } from '@apollo/client';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { client } from './services/api/api';
import { store } from './store';
import './styles/main.scss';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ApolloProvider client={client}>
                <RouterProvider router={router} />
            </ApolloProvider>
        </Provider>
    </StrictMode>,
);
