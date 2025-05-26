import TextXss from '@/components/atoms/TextXss/TextXss';
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html';
import { TextTypes } from './text.types';

export const Text = ({ block }: TextTypes) => {
    const { textTitle, text } = block;

    const html = convertLexicalToHTML({ data: text });

    return (
        <div className="container mx-auto px-4">
            {textTitle && <h2 className="text-2xl font-bold mb-4">{textTitle}</h2>}
            <TextXss text={html} />
        </div>
    );
};
