import { QuoteBlock } from '@/services/api/api.types';

export const Quote = ({ block: { quote, author } }: { block: QuoteBlock }) => {
    return (
        <div>
            {quote}
            <span className="text-gray-500">{author}</span>
        </div>
    );
};
