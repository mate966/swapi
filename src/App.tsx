import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { Header } from '@/components/scaffold/Header/Header';
import { Footer } from '@/components/scaffold/Footer/Footer';
import Intro from '@/components/scaffold/Intro/Intro';
import { Page } from '@/components/pages/Page/Page';
import SmoothScroll from '@/utils/SmoothScroller/SmoothScroller';
import { RootState } from '@/store';
import { Curtain } from '@/components/scaffold/Curtain/Curtain';
import { setIsCurtainVisible, setIsExitCompleted } from './store/slices/globalSlice/globalSlice';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import './styles/main.scss';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const isPageLoaded = useSelector((state: RootState) => state.global.isPageLoaded);
    const isCurtainVisible = useSelector((state: RootState) => state.global.isCurtainVisible);
    // const isIntroPlayed = useSelector((state: RootState) => state.global.isIntroPlayed);
    const [displayedLocation, setDisplayedLocation] = useState(location);

    useEffect(() => {
        if (location.pathname !== displayedLocation.pathname) {
            dispatch(setIsCurtainVisible(true));
        }
    }, [location, displayedLocation, dispatch]);

    const handleCurtainExited = () => {
        setDisplayedLocation(location);
        dispatch(setIsCurtainVisible(false));
        dispatch(setIsExitCompleted(true));
    };

    return (
        <>
            <Header />

            <div className="app">
                <AnimatePresence mode="wait">
                    {isPageLoaded && (
                        <motion.div
                            key={displayedLocation.pathname}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <SmoothScroll>
                                <main>
                                    <Page location={displayedLocation} />
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
