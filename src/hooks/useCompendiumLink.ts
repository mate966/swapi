import { useNavigate } from 'react-router-dom';

type CompendiumItem = {
    id: string;
    category: 'characters' | 'planets' | 'films' | 'species' | 'starships' | 'vehicles';
};

export const useCompendiumLink = () => {
    const navigate = useNavigate();

    const getItemLink = (item: CompendiumItem | null | undefined) => {
        if (!item?.id || !item?.category) return null;
        return `/${item.category}/${item.id}`;
    };

    const navigateToItem = (item: CompendiumItem | null | undefined) => {
        const link = getItemLink(item);
        if (link) {
            navigate(link);
        }
    };

    return {
        getItemLink,
        navigateToItem,
    };
};
