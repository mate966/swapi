import { ButtonHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', disabled, children, ...props }, ref) => {
        const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors duration-200';
        const variants = {
            primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300',
            secondary: 'bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-300',
            outline:
                'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 disabled:border-blue-300 disabled:text-blue-300',
        };

        return (
            <button
                ref={ref}
                className={twMerge(baseStyles, variants[variant], className)}
                disabled={disabled}
                {...props}
            >
                {children}
            </button>
        );
    },
);
