import { Character } from '@/store/types/compendium/character.types';

export const CharacterDetails = ({ item }: { item: Character }) => {
    return (
        <div>
            <h1>{item.name}</h1>
            <p>{item.gender}</p>
            <p>{item.height}</p>
            <p>{item.mass}</p>
        </div>
    );
};
