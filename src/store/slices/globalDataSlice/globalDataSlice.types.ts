import { Header } from '@/services/api/api.types';

export interface GlobalData {
    header: Header | null;
}

export interface GlobalDataState {
    data: GlobalData;
    loading: boolean;
    error: string | null;
    initialized: boolean;
}
