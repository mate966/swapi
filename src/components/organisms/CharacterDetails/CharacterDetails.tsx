import { Character } from '@/store/types/compendium/character.types';

export const CharacterDetails = ({ item }: { item: Character }) => {
    return <div>{item.name}</div>;
};
