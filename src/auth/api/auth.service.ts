import type { RegisterFormData } from '../schemas/auth.schema';
import { ApiError, RegisterResponse } from './auth.types';
import { API_ENDPOINTS } from './config';

export class AuthService {
    static async register(data: RegisterFormData): Promise<RegisterResponse> {
        const response = await fetch(API_ENDPOINTS.register, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include',
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = responseData as ApiError;
            throw new Error(error.errors?.[0]?.message || 'Registration failed. Please try again.');
        }

        return responseData as RegisterResponse;
    }

    static async verifyEmail(token: string): Promise<void> {
        const response = await fetch(`${API_ENDPOINTS.verify}?token=${token}`, {
            method: 'POST',
            credentials: 'include',
        });

        if (!response.ok) {
            const error = (await response.json()) as ApiError;
            throw new Error(
                error.errors?.[0]?.message || 'Email verification failed. Please try again.',
            );
        }
    }
}
