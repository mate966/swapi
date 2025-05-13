import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import charactersReducer from './slices/charactersSlice';
import filmsReducer from './slices/filmsSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        characters: charactersReducer,
        films: filmsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
