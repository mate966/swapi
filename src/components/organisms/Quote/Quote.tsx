import { QuoteBlock } from '@/services/api/api.types';

export const Quote = ({ block }: { block: QuoteBlock }) => {
    return <div>{block.quote}</div>;
};
