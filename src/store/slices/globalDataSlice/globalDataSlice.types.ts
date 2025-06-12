import { Footer } from '@/components/scaffold/Footer/types';
import { Header } from '@/components/scaffold/Header/types';

export interface GlobalData {
    header: Header | null;
    footer: Footer | null;
}

export interface GlobalDataState {
    data: GlobalData;
    loading: boolean;
    error: string | null;
    initialized: boolean;
}
