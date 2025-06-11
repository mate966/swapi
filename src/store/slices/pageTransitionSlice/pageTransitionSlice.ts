import { createSlice } from '@reduxjs/toolkit';

interface PageTransitionState {
    isTransitioning: boolean;
    direction: 'in' | 'out' | null;
}

const initialState: PageTransitionState = {
    isTransitioning: false,
    direction: null,
};

const pageTransitionSlice = createSlice({
    name: 'pageTransition',
    initialState,
    reducers: {
        startTransition: (state, action: { payload: 'in' | 'out' }) => {
            state.isTransitioning = true;
            state.direction = action.payload;
        },
        endTransition: state => {
            state.isTransitioning = false;
            state.direction = null;
        },
    },
});

export const { startTransition, endTransition } = pageTransitionSlice.actions;
export default pageTransitionSlice.reducer;
