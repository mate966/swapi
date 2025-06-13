import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location } from 'react-router-dom';
import { GlobalState } from './types';

const initialState: GlobalState = {
    isPageLoaded: false,
    isIntroCompleted: false,
    isCurtainVisible: false,
    displayedLocation: {
        pathname: window.location.pathname,
        search: '',
        hash: '',
        state: null,
        key: '',
    },
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsPageLoaded: (state, action: PayloadAction<boolean>) => {
            state.isPageLoaded = action.payload;
        },
        setIsIntroCompleted: (state, action: PayloadAction<boolean>) => {
            state.isIntroCompleted = action.payload;
        },
        setIsCurtainVisible: (state, action: PayloadAction<boolean>) => {
            state.isCurtainVisible = action.payload;
        },
        setDisplayedLocation: (state, action: PayloadAction<Location>) => {
            state.displayedLocation = action.payload;
        },
    },
});

export const { setIsPageLoaded, setIsIntroCompleted, setIsCurtainVisible, setDisplayedLocation } =
    globalSlice.actions;
export default globalSlice.reducer;
