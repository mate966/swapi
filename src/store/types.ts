import { store } from '.';
import { Header } from '@/services/api/api.types';
import { PageState } from './slices/pageSlice/pageSlice.types';

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
    page: PageState;
}

export type AppDispatch = typeof store.dispatch;
