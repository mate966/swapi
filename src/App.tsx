import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux/useRedux';

import { Page } from '@/components/pages/Page/Page';
import { Intro } from '@/components/scaffold/Intro';
import { Curtain } from '@/components/scaffold/Curtain';
import { Header } from '@/components/scaffold/Header';
import { Footer } from '@/components/scaffold/Footer';

import { RootState } from '@/store';
import {
    setIsCurtainVisible,
    setIsExitCompleted,
    setDisplayedLocation,
} from '@/store/slices/globalSlice';

import SmoothScroll from '@/components/utils/SmoothScroller';

import '@/utils/plugins';
import '@/styles/main.scss';

const App = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();

    const isPageLoaded = useAppSelector((state: RootState) => state.global.isPageLoaded);
    const isCurtainVisible = useAppSelector((state: RootState) => state.global.isCurtainVisible);
    const displayedLocation = useAppSelector((state: RootState) => state.global.displayedLocation);

    useEffect(() => {
        if (location.pathname !== displayedLocation.pathname) {
            dispatch(setIsCurtainVisible(true));
        }
    }, [location, displayedLocation, dispatch]);

    const handleCurtainExited = () => {
        dispatch(setIsCurtainVisible(false));
        dispatch(setDisplayedLocation(location));
        dispatch(setIsExitCompleted(true));
    };

    return (
        <>
            <Header />

            <div className="app">
                <AnimatePresence mode="wait" onExitComplete={handleCurtainExited}>
                    {isPageLoaded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <SmoothScroll>
                                <main>
                                    <Page />
                                </main>
                                <Footer />
                            </SmoothScroll>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <Intro />
            <Curtain isVisible={isCurtainVisible} onExited={handleCurtainExited} />
        </>
    );
};

export default App;
