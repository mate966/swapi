// import { swapiService } from '@/services/api/api';
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { HeaderState } from './headerSlice.types';

// const initialState: HeaderState = {
//     data: null,
//     loading: false,
//     error: null,
// };

// export const fetchHeader = createAsyncThunk(
//     'header/fetchHeader',
//     async (_, { rejectWithValue }) => {
//         try {
//             return await swapiService.getHeader();
//         } catch (error) {
//             return rejectWithValue(
//                 error instanceof Error ? error.message : 'Błąd podczas pobierania nawigacji',
//             );
//         }
//     },
// );

// const headerSlice = createSlice({
//     name: 'header',
//     initialState,
//     reducers: {},
//     extraReducers: builder => {
//         builder
//             .addCase(fetchHeader.pending, state => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchHeader.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.data = action.payload;
//             })
//             .addCase(fetchHeader.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload as string;
//             });
//     },
// });

// export default headerSlice.reducer;
