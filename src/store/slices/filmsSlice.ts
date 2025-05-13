import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Film } from '../../services/api';
import { swapiService } from '../../services/api';

interface FilmsState {
    films: Film[];
    isLoading: boolean;
    error: string | null;
    currentPage: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}

const initialState: FilmsState = {
    films: [],
    isLoading: false,
    error: null,
    currentPage: 1,
    totalPages: 1,
    hasNextPage: false,
    hasPrevPage: false,
};

export const fetchFilms = createAsyncThunk(
    'films/fetchFilms',
    async (page: number, { rejectWithValue }) => {
        try {
            const response = await swapiService.getFilms(page);
            return response;
        } catch (error) {
            return rejectWithValue(
                error instanceof Error ? error.message : 'Failed to fetch films',
            );
        }
    },
);

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        clearFilmsError: state => {
            state.error = null;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchFilms.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchFilms.fulfilled, (state, action) => {
                state.isLoading = false;
                state.films = action.payload.docs;
                state.currentPage = action.payload.page;
                state.totalPages = action.payload.totalPages;
                state.hasNextPage = action.payload.hasNextPage;
                state.hasPrevPage = action.payload.hasPrevPage;
            })
            .addCase(fetchFilms.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { clearFilmsError } = filmsSlice.actions;
export default filmsSlice.reducer;
