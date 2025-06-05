export interface QueryStateProps {
    loading: boolean;
    error?: Error;
    empty?: boolean;
    children: React.ReactNode;
}
