import { describe, it, expect } from 'vitest';
import { getModule } from '../getModule';

describe('getModule', () => {
    it('returns hero module for hero_block', () => {
        const block = {
            blockType: 'hero_block',
            title: 'Hero Title',
            subtitle: 'Hero Subtitle',
        };

        const result = getModule(block);

        expect(result).not.toBeNull();
        expect(result?.type).toBe('hero_block');
        expect(result?.component).toBeDefined();
        expect(result?.props).toEqual(block);
    });

    it('returns text module for text_block', () => {
        const block = {
            blockType: 'text_block',
            content: 'Sample text content',
        };

        const result = getModule(block);

        expect(result).not.toBeNull();
        expect(result?.type).toBe('text_block');
        expect(result?.component).toBeDefined();
    });

    it('returns compendium category module for compendium_category_block', () => {
        const block = {
            blockType: 'compendium_category_block',
            category: 'characters',
        };

        const result = getModule(block);

        expect(result).not.toBeNull();
        expect(result?.type).toBe('compendium_category_block');
        expect(result?.component).toBeDefined();
    });

    it('returns null for unknown block type', () => {
        const block = { blockType: 'unknown_block' };
        const result = getModule(block);

        expect(result).toBeNull();
    });

    it('handles all known block types', () => {
        const blockTypes = [
            'hero_block',
            'text_block',
            'cta_block',
            'quote_block',
            'image_block',
            'about_block',
            'featured_block',
            'compendium_category_block',
            'gallery_block',
            'contact_form_block',
        ];

        blockTypes.forEach(blockType => {
            const block = { blockType };
            const result = getModule(block);

            expect(result).not.toBeNull();
            expect(result?.type).toBe(blockType);
            expect(result?.component).toBeDefined();
        });
    });
});
