import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { loginSchema, type LoginFormData } from '@/auth/schemas/auth.schema';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { clearError, login } from '@/store/slices/authSlice/authSlice';

export const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { error, isLoading, isAuthenticated } = useAppSelector(state => state.auth);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setError,
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard');
        }
    }, [isAuthenticated, navigate]);

    const onSubmit = async (data: LoginFormData) => {
        try {
            dispatch(clearError());
            await dispatch(login(data)).unwrap();
            reset();
        } catch (error) {
            if (error instanceof Error) {
                if (error.message.includes('email')) {
                    setError('email', { message: error.message });
                } else if (error.message.includes('password')) {
                    setError('password', { message: error.message });
                }
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>

            {error && <p>{error}</p>}

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

            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
            </button>
        </form>
    );
};
