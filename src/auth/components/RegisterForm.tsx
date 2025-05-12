import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthService } from '../api/auth.service';
import { registerSchema, type RegisterFormData } from '../schemas/auth.schema';

export const RegisterForm = () => {
    const [apiError, setApiError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setError,
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const onSubmit = async (data: RegisterFormData) => {
        try {
            setApiError(null);
            setSuccessMessage(null);

            await AuthService.register(data);

            setSuccessMessage(
                'Registration successful! Please check your email to verify your account.',
            );
            reset();
        } catch (error) {
            if (error instanceof Error) {
                if (error.message.includes('email')) {
                    setError('email', { message: error.message });
                } else if (error.message.includes('username')) {
                    setError('username', { message: error.message });
                } else {
                    setApiError(error.message);
                }
            } else {
                setApiError('An unexpected error occurred. Please try again.');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Registration</h2>

            {apiError && <p>{apiError}</p>}
            {successMessage && <p>{successMessage}</p>}

            <div>
                <label htmlFor="username">Username</label>
                <input {...register('username')} type="text" id="username" />
                {errors.username && <p>{errors.username.message}</p>}
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input {...register('email')} type="email" id="email" />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input {...register('password')} type="password" id="password" />
                {errors.password && <p>{errors.password.message}</p>}
            </div>

            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input {...register('confirmPassword')} type="password" id="confirmPassword" />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            </div>

            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Registering...' : 'Register'}
            </button>
        </form>
    );
};
