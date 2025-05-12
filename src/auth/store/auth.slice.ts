import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthService } from '../api/auth.service';
import type { LoginResponse, RegisterResponse } from '../api/auth.types';
import type { LoginFormData, RegisterFormData } from '../schemas/auth.schema';
import type { AuthState } from '../types/auth.types';

const initialState: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

export const login = createAsyncThunk<LoginResponse, LoginFormData>(
    'auth/login',
    async (data, { rejectWithValue }) => {
        try {
            return await AuthService.login(data);
        } catch (error) {
            return rejectWithValue(error instanceof Error ? error.message : 'Login failed');
        }
    },
);

export const register = createAsyncThunk<RegisterResponse, RegisterFormData>(
    'auth/register',
    async (data, { rejectWithValue }) => {
        try {
            return await AuthService.register(data);
        } catch (error) {
            return rejectWithValue(error instanceof Error ? error.message : 'Registration failed');
        }
    },
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: state => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.error = null;
        },
        clearError: state => {
            state.error = null;
        },
    },
    extraReducers: builder => {
        builder
            // Login
            .addCase(login.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
            // Register
            .addCase(register.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.isAuthenticated = true;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
