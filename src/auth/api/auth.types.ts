import type { User } from '../types/auth.types';

interface RegisterResponse {
    user: User;
    message: string;
}

interface LoginResponse {
    user: User;
    token: string;
    message: string;
}

interface ApiError {
    errors: Array<{
        message: string;
        field?: string;
    }>;
}

export type { ApiError, LoginResponse, RegisterResponse };
