interface RegisterResponse {
    user: {
        id: string;
        email: string;
        username: string;
    };
    message: string;
}

interface ApiError {
    errors: Array<{
        message: string;
        field?: string;
    }>;
}

export type { ApiError, RegisterResponse };
