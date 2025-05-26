import TextXss from '@/components/atoms/TextXss/TextXss';
import { TextBlock } from '@/services/api/api.types';
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html';

export const Text = ({ block: { textTitle, text } }: { block: TextBlock }) => {
    const html = convertLexicalToHTML({ data: text });

    return (
        <div className="container mx-auto px-4">
            {textTitle && <h2 className="text-2xl font-bold mb-4">{textTitle}</h2>}
            <TextXss text={html} />
        </div>
    );
};
