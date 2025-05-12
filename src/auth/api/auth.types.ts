interface RegisterResponse {
    user: {
        id: string;
        email: string;
        username: string;
    };
    message: string;
}

interface LoginResponse {
    user: {
        id: string;
        email: string;
        username: string;
    };
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
