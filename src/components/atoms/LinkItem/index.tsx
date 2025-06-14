import { Link as RouterLink } from 'react-router-dom';
import { LinkItemTypes } from './types';

// FIXME: Refactor types
export const LinkItem = ({ ...link }: LinkItemTypes) => {
    const { label, type, url, newTab, reference } = link;

    if (!label) return null;

    const commonProps = {
        className:
            'inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200',
        target: newTab ? '_blank' : undefined,
        rel: newTab ? 'noopener noreferrer' : undefined,
        children: label,
    };

    if (type === 'custom' && url) {
        return <a href={url} {...commonProps} />;
    }

    if (type === 'reference' && reference?.value?.slug) {
        return <RouterLink to={`${reference.value.slug}`} {...commonProps} />;
    }

    return null;
};
