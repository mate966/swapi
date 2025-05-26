import xss from 'xss';
import type { ParagraphTypes } from './paragraph.types';

const Paragraph = ({ text }: ParagraphTypes) => {
    return <p>{xss(text)}</p>;
};

export default Paragraph;
