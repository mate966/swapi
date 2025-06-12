import { Header } from '@/components/scaffold/Header/types';
import { store } from '.';
// import { PageState } from './slices/pageSlice/pageSlice.types';

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
    // page: PageState;
}

export type AppDispatch = typeof store.dispatch;
