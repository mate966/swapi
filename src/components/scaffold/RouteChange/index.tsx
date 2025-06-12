import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsCurtainVisible } from '@/store/slices/globalSlice/globalSlice';

interface RouteChangeProps {
    isExitCompleted: boolean;
}

const RouteChange = ({ isExitCompleted }: RouteChangeProps) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const previousRoute = useRef<string>(location.pathname);

    useEffect(() => {
        if (location.pathname !== previousRoute.current) {
            dispatch(setIsCurtainVisible(true));
        }
    }, [location.pathname, dispatch]);

    useEffect(() => {
        if (isExitCompleted) {
            setIsCurtainVisible(false);
            previousRoute.current = location.pathname;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isExitCompleted]);

    return null;
};

export default RouteChange;
