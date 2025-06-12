import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location } from 'react-router-dom';
import { GlobalState } from './types';

const initialState: GlobalState = {
    isPageLoaded: false,
    isCurtainVisible: false,
    isExitCompleted: false,
    displayedLocation: {
        pathname: '/',
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
        setIsCurtainVisible: (state, action: PayloadAction<boolean>) => {
            state.isCurtainVisible = action.payload;
        },
        setIsExitCompleted: (state, action: PayloadAction<boolean>) => {
            state.isExitCompleted = action.payload;
        },
        setDisplayedLocation: (state, action: PayloadAction<Location>) => {
            state.displayedLocation = action.payload;
        },
    },
});

export const { setIsPageLoaded, setIsCurtainVisible, setIsExitCompleted, setDisplayedLocation } =
    globalSlice.actions;
export default globalSlice.reducer;
