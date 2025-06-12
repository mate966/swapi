import { LinkItem } from '@/components/atoms/LinkItem';
import TextXss from '@/components/atoms/TextXss';
import { ResponsiveImage } from '@/components/molecules/Image';
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html';
import { AboutBlock } from './types';

export const About = ({ block }: { block: AboutBlock }) => {
    const {
        title,
        text,
        image: { imageDesktop, imageMobile },
        aboutLink,
    } = block;

    const html = convertLexicalToHTML({ data: text });

    const image = {
        srcDesktop: imageDesktop?.webpUrl || imageDesktop?.url || null,
        srcMobile: imageMobile?.webpUrl || imageMobile?.url || imageDesktop?.url || null,
        alt: imageDesktop?.alt || 'Image',
    };

    return (
        <div>
            <h2>{title}</h2>
            <TextXss text={html} />
            <ResponsiveImage {...image} />
            <div className="container mx-auto px-4">
                <LinkItem {...aboutLink} />
            </div>
        </div>
    );
};
