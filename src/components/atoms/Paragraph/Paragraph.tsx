import xss from 'xss';
import type { Props } from './paragraph.types';

const Paragraph = ({ text }: Props) => {
    return <p>{xss(text)}</p>;
};

export default Paragraph;
