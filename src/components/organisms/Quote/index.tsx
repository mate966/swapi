import { QuoteBlock } from './types';

export const Quote = ({ block }: { block: QuoteBlock }) => {
    const { quote, author } = block;

    return (
        <div>
            {quote}
            <span className="text-gray-500">{author}</span>
        </div>
    );
};
