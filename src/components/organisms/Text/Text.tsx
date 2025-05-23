import TextXss from '@/components/atoms/TextXss/TextXss';
import { TextBlock } from '@/services/api/api.types';
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html';

export const Text = ({ block }: { block: TextBlock }) => {
    const html = convertLexicalToHTML({ data: block.text });

    return (
        <div className="container mx-auto px-4">
            {block.textTitle && <h2 className="text-2xl font-bold mb-4">{block.textTitle}</h2>}
            <TextXss text={html} />
        </div>
    );
};
