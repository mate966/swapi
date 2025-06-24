import { useAppSelector } from '@/hooks/useRedux/useRedux';
import { useAppDispatch } from '@/hooks/useRedux/useRedux';
import { useLocation, useOutlet } from 'react-router-dom';
import { RootState } from '@/store';
import { setIsCurtainVisible } from '@/store/slices/globalSlice';
import { setDisplayedLocation } from '@/store/slices/globalSlice';
import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const PageTransition = () => {
    const location = useLocation();
    const outlet = useOutlet();
    const dispatch = useAppDispatch();
    const isCurtainVisible = useAppSelector((state: RootState) => state.global.isCurtainVisible);
    const displayedLocation = useAppSelector((state: RootState) => state.global.displayedLocation);
    const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);

    useEffect(() => {
        if (location.pathname !== displayedLocation.pathname) {
            dispatch(setIsCurtainVisible(true));

            timerRef.current = setTimeout(() => {
                dispatch(setIsCurtainVisible(false));
                dispatch(setDisplayedLocation(location));
            }, 600);

            return () => {
                if (timerRef.current) {
                    clearTimeout(timerRef.current);
                }
            };
        }
    }, [location, displayedLocation, dispatch]);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: isCurtainVisible ? 0.6 : 0 }}
            >
                {outlet}
            </motion.div>
        </AnimatePresence>
    );
};
