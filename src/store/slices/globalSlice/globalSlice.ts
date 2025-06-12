import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GlobalState {
    isPageLoaded: boolean;
    isCurtainVisible: boolean;
    isExitCompleted: boolean;
    isIntroPlayed: boolean;
}

const initialState: GlobalState = {
    isPageLoaded: false,
    isCurtainVisible: false,
    isExitCompleted: false,
    isIntroPlayed: false,
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
        setIsIntroPlayed: (state, action: PayloadAction<boolean>) => {
            state.isIntroPlayed = action.payload;
        },
    },
});

export const { setIsPageLoaded, setIsCurtainVisible, setIsExitCompleted, setIsIntroPlayed } =
    globalSlice.actions;
export default globalSlice.reducer;
