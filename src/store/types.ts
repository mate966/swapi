import { Header } from '@/services/api/api.types';
import { store } from '.';

export interface GlobalDataState {
    data: {
        header: Header | null;
    };
    loading: boolean;
    error: string | null;
    initialized: boolean;
}

export interface RootState {
    globalData: GlobalDataState;
}

export type AppDispatch = typeof store.dispatch;
