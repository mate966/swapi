import { createSlice } from '@reduxjs/toolkit';
import { PageState } from './pageSlice.types';

const initialState: PageState = {
    isPageLoaded: false,
};

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPageLoaded: (state, action) => {
            state.isPageLoaded = action.payload;
        },
    },
});

export const { setPageLoaded } = pageSlice.actions;
export default pageSlice.reducer;
