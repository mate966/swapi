import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/scaffold/Header/Header';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { Footer } from './components/scaffold/Footer/Footer';
import SmoothScroll from './utils/SmoothScroller/SmoothScroller';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App: React.FC = () => {
    return (
        <>
            <SmoothScroll>
                <Header />
                <main className="pt-16">
                    <Outlet />
                </main>
                <Footer />
            </SmoothScroll>
        </>
    );
};

export default App;
