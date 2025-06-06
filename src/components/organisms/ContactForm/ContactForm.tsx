import { Button } from '@/components/atoms/Button/Button';
import { Input } from '@/components/atoms/Input/Input';
import { Textarea } from '@/components/atoms/Textarea/Textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ContactFormProps } from './contactForm.types';

const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, 'Name must be at least 2 characters long')
        .max(50, 'Name can be up to 50 characters long'),
    email: z.string().email('Invalid email address'),
    message: z
        .string()
        .min(10, 'Message must be at least 10 characters long')
        .max(1000, 'Message can be up to 1000 characters long'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm = ({ block }: ContactFormProps) => {
    // const { title, description, form } = block;
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'An error occurred while sending the message');
            }

            console.log('Message sent successfully');
            reset();
        } catch (error) {
            console.error('Error sending message:', error);
            console.log(error || 'An error occurred while sending the message');
        }
    };

    return (
        <>
            <div>
                <h2>{block.title}</h2>
                <p>{block.description}</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto space-y-6">
                <div>
                    <Input
                        label="Name"
                        {...register('name')}
                        error={errors.name?.message}
                        placeholder="Enter your name"
                    />
                </div>

                <div>
                    <Input
                        label="Email"
                        type="email"
                        {...register('email')}
                        error={errors.email?.message}
                        placeholder="Enter your email"
                    />
                </div>

                <div>
                    <Textarea
                        label="Message"
                        {...register('message')}
                        error={errors.message?.message}
                        placeholder="Enter your message"
                        rows={5}
                    />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
            </form>
        </>
    );
};
