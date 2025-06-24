import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useCompendiumData } from '../useCompendiumData';

// Mock swapiService
vi.mock('@/services/api/api', () => ({
    swapiService: {
        getCategory: vi.fn(),
    },
}));

// Mock constants
vi.mock('@/components/organisms/CompendiumCategory/constants', () => ({
    LIMIT: 10,
}));

describe('useCompendiumData', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('fetches data on mount', async () => {
        const mockData = [
            { id: '1', name: 'Luke Skywalker' },
            { id: '2', name: 'Darth Vader' },
        ];

        const { swapiService } = await import('@/services/api/api');
        vi.mocked(swapiService.getCategory).mockResolvedValue(mockData);

        const { result } = renderHook(() => useCompendiumData('characters'));

        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });

        expect(result.current.categoryData).toEqual(mockData);
        expect(result.current.error).toBeNull();
    });

    it('handles error state', async () => {
        const { swapiService } = await import('@/services/api/api');
        vi.mocked(swapiService.getCategory).mockRejectedValue(new Error('API Error'));

        const { result } = renderHook(() => useCompendiumData('characters'));

        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });

        expect(result.current.error).toBe('Cannot load characters');
        expect(result.current.categoryData).toEqual([]);
    });

    it('loads more data correctly', async () => {
        const initialData = [{ id: '1', name: 'Luke' }];
        const moreData = [{ id: '2', name: 'Vader' }];

        const { swapiService } = await import('@/services/api/api');
        vi.mocked(swapiService.getCategory)
            .mockResolvedValueOnce(initialData)
            .mockResolvedValueOnce(moreData);

        const { result } = renderHook(() => useCompendiumData('characters'));

        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });

        expect(result.current.categoryData).toEqual(initialData);

        // Load more
        await result.current.loadMore();

        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });

        expect(result.current.categoryData).toEqual([...initialData, ...moreData]);
    });
});
