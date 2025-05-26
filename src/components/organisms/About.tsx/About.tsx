import TextXss from '@/components/atoms/TextXss/TextXss';
import { ResponsiveImage } from '@/components/molecules/Image/ResponsiveImage';
import { AboutBlock } from '@/services/api/api.types';
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html';

export const About = ({
    block: {
        title,
        text,
        image: { imageDesktop, imageMobile },
    },
}: {
    block: AboutBlock;
}) => {
    const html = convertLexicalToHTML({ data: text });

    return (
        <div>
            <h2>{title}</h2>
            <TextXss text={html} />
            <ResponsiveImage
                srcDesktop={imageDesktop?.webpUrl || imageDesktop?.url || ''}
                srcMobile={imageMobile?.webpUrl || imageMobile?.url || imageDesktop?.url || ''}
                alt={imageDesktop?.alt || 'Image'}
            />
        </div>
    );
};
