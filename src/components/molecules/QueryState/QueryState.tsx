import { QueryStateProps } from './queryState.types';

export const QueryState = ({ loading, error, empty, children }: QueryStateProps) => {
    if (loading)
        return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
    if (error) return <div className="text-red-500 text-center">Error: {error.message}</div>;
    if (empty) return <div className="text-center">Not found</div>;
    return <>{children}</>;
};
