import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/scaffold/Header/Header';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { Footer } from './components/scaffold/Footer/Footer';
import SmoothScroll from './utils/SmoothScroller/SmoothScroller';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Intro } from './components/scaffold/Intro/Intro';
import { useSelector } from 'react-redux';
import { RootState } from './store';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App: React.FC = () => {
    const isPageLoaded = useSelector((state: RootState) => state.page.isPageLoaded);

    return (
        <>
            {!isPageLoaded ? (
                <Intro />
            ) : (
                <SmoothScroll>
                    <Header />
                    <main className="pt-16">
                        <Outlet />
                    </main>
                    <Footer />
                </SmoothScroll>
            )}
        </>
    );
};

export default App;
