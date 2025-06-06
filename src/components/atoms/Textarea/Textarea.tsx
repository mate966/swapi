import { TextareaHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, label, error, ...props }, ref) => {
        return (
            <div className="space-y-1">
                {label && (
                    <label className="block text-sm font-medium text-gray-700">{label}</label>
                )}
                <textarea
                    ref={ref}
                    className={twMerge(
                        'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
                        error ? 'border-red-500' : 'border-gray-300',
                        className,
                    )}
                    {...props}
                />
                {error && <p className="text-sm text-red-600">{error}</p>}
            </div>
        );
    },
);
