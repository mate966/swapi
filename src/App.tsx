import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from '@/components/scaffold/Header/Header';
import { Footer } from '@/components/scaffold/Footer/Footer';
import { Page } from '@/components/pages/Page/Page';
import Intro from '@/components/scaffold/Intro/Intro';
import Curtain from '@/components/scaffold/Curtain/Curtain';
import RouteChange from '@/components/scaffold/RouteChange/RouteChange';
import SmoothScroll from '@/utils/SmoothScroller/SmoothScroller';
import './styles/main.scss';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { duration } from './utils/pageTransition';
import { wait } from './utils/wait';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
    const location = useLocation();
    const [isExitCompleted, setIsExitCompleted] = useState(false);

    const onExitComplete = async () => {
        window.scrollTo(0, 0);
        setIsExitCompleted(true);
        await wait(duration);
        setIsExitCompleted(false);
    };

    return (
        <>
            <Header />

            <div className="app">
                <AnimatePresence mode="wait" initial={false} onExitComplete={onExitComplete}>
                    <div key={location.pathname}>
                        <SmoothScroll>
                            <main>
                                <Page />
                            </main>
                            <Footer />
                        </SmoothScroll>
                    </div>
                </AnimatePresence>
            </div>

            <Curtain />
            <Intro />
            <RouteChange isExitCompleted={isExitCompleted} />
        </>
    );
};

export default App;
