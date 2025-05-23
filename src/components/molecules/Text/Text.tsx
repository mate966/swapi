import { TextBlock } from '@/services/api/api.types';

export const Text = ({ block }: { block: TextBlock }) => {
    return (
        <>
            {block.textTitle && <h2 className="text-2xl font-bold mb-4">{block.textTitle}</h2>}
            {/* <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: block.text }} /> */}
        </>
    );
};
