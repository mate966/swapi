import xss from 'xss';
import type { Props } from './textxss.types';

const TextXss = ({ text }: Props) => {
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: xss(text) }} />
        </>
    );
};

export default TextXss;
