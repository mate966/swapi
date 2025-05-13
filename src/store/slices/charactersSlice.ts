import { swapiService } from '@/services/api';
import { CharactersState } from '@/store/types/characterSlice.types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: CharactersState = {
    characters: [],
    loading: false,
    error: null,
    currentPage: 1,
    totalPages: 1,
};

export const fetchCharacters = createAsyncThunk(
    'characters/fetchCharacters',
    async (page: number) => {
        const response = await swapiService.getPeople(page);
        return response;
    },
);

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCharacters.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                state.loading = false;
                state.characters = action.payload.docs;
                state.totalPages = action.payload.totalPages;
            })
            .addCase(fetchCharacters.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Wystąpił błąd podczas pobierania danych';
            });
    },
});

export const { setPage } = charactersSlice.actions;
export default charactersSlice.reducer;
