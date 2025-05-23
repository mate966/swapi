import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { fetchGlobalData } from '@/store/slices/globalDataSlice/globalDataSlice';
import { useEffect } from 'react';

export const useGlobalData = () => {
    const dispatch = useAppDispatch();
    const { data, loading, error, initialized } = useAppSelector(state => state.globalData);

    useEffect(() => {
        if (!initialized) {
            dispatch(fetchGlobalData());
        }
    }, [dispatch, initialized]);

    return {
        header: data.header,
        footer: data.footer,
        loading,
        error,
    };
};
