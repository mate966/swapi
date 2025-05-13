import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { registerSchema, type RegisterFormData } from '@/auth/schemas/auth.schema';
import { register } from '@/store/slices/authSlice';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useAppSelector } from '@hooks/redux';

export const RegisterForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { isLoading, error } = useAppSelector(state => state.auth);
    const {
        register: registerField,
        handleSubmit,
        formState: { errors },
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
            await dispatch(register(data)).unwrap();
            reset();
            navigate('/login');
        } catch (error) {
            if (error instanceof Error) {
                if (error.message.includes('email')) {
                    setError('email', { message: error.message });
                } else if (error.message.includes('username')) {
                    setError('username', { message: error.message });
                }
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Registration</h2>

            {error && <p>{error}</p>}

            <div>
                <label htmlFor="username">Username</label>
                <input {...registerField('username')} type="text" id="username" />
                {errors.username && <p>{errors.username.message}</p>}
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input {...registerField('email')} type="email" id="email" />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input {...registerField('password')} type="password" id="password" />
                {errors.password && <p>{errors.password.message}</p>}
            </div>

            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input {...registerField('confirmPassword')} type="password" id="confirmPassword" />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            </div>

            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Registering...' : 'Register'}
            </button>
        </form>
    );
};
