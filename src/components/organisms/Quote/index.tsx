import { QuoteTypes } from './types';

export const Quote = ({ block }: QuoteTypes) => {
    const { quote, author } = block;

    return (
        <div>
            {quote}
            <span className="text-gray-500">{author}</span>
        </div>
    );
};
