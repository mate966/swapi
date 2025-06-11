import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Header } from '@/components/scaffold/Header/Header';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { Footer } from './components/scaffold/Footer/Footer';
import SmoothScroll from './utils/SmoothScroller/SmoothScroller';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Intro } from './components/scaffold/Intro/Intro';
import { Curtain } from './components/scaffold/Curtain/Curtain';
import { RootState } from './store';
import { startTransition } from './store/slices/pageTransitionSlice/pageTransitionSlice';
import { useGlobalData } from './hooks/useGlobalData/useGlobalData';
import { useAppDispatch, useAppSelector } from './hooks/useRedux/useRedux';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App: React.FC = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const isPageLoaded = useAppSelector((state: RootState) => state.page.isPageLoaded);
    const { initialized: isGlobalDataInitialized } = useGlobalData();
    const prevPathRef = React.useRef(location.pathname);

    useEffect(() => {
        if (
            !isPageLoaded ||
            !isGlobalDataInitialized ||
            prevPathRef.current === location.pathname
        ) {
            prevPathRef.current = location.pathname;
            return;
        }

        dispatch(startTransition('in'));
        const timer = setTimeout(() => {
            dispatch(startTransition('out'));
        }, 1000);

        prevPathRef.current = location.pathname;
        return () => clearTimeout(timer);
    }, [location.pathname, isPageLoaded, isGlobalDataInitialized, dispatch]);

    return (
        <>
            <div className={`app-content ${!isPageLoaded ? 'opacity-0' : 'opacity-100'}`}>
                <SmoothScroll>
                    <Header />
                    <main className="pt-16">
                        <Outlet />
                    </main>
                    <Footer />
                </SmoothScroll>
            </div>
            <Curtain />
            {!isPageLoaded && <Intro />}
        </>
    );
};

export default App;
