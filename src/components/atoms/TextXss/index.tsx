import xss from 'xss';
import type { TextXssTypes } from './types';

const TextXss = ({ text }: TextXssTypes) => {
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: xss(text) }} />
        </>
    );
};

export default TextXss;
