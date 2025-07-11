import SECRETS from '@/secrets';

export const API_URL = SECRETS.PAYLOAD_API_URL || 'http://localhost:3000/api';

export const API_ENDPOINTS = {
    register: `${API_URL}/users`,
    login: `${API_URL}/users/login`,
    verify: `${API_URL}/users/verify`,
    forgotPassword: `${API_URL}/users/forgot-password`,
    resetPassword: `${API_URL}/users/reset-password`,
} as const;
