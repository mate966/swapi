import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './slices/authSlice/authSlice';
import globalDataReducer from './slices/globalDataSlice/globalDataSlice';
// import pageReducer from './slices/pageSlice/pageSlice';
import globalReducer from './slices/globalSlice/globalSlice';
// import pagesReducer from './slices/pagesSlice';
// import headerReducer from './slices/headerSlice/headerSlice';

export const store = configureStore({
    reducer: {
        // auth: authReducer,
        // characters: charactersReducer,
        // films: filmsReducer,
        globalData: globalDataReducer,
        // page: pageReducer,
        global: globalReducer,
        // header: headerReducer,
        // pages: pagesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
