import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Page } from '@/components/pages/Page/Page';
import { Header } from '@/components/scaffold/Header/Header';
import { Footer } from '@/components/scaffold/Footer/Footer';
import SmoothScroll from '@/utils/SmoothScroller/SmoothScroller';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] } },
};

const curtainVariants = {
    initial: { y: '-100%' },
    animate: { y: 0, transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] } },
    exit: { y: '-100%', transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] } },
};

export const PageTransition = () => {
    const location = useLocation();
    // const [isTransitioning, setIsTransitioning] = useState(false);
    const [showCurtain, setShowCurtain] = useState(false);
    const [currentPath, setCurrentPath] = useState(location.pathname);
    const [nextPath, setNextPath] = useState<string | null>(null);

    useEffect(() => {
        if (location.pathname !== currentPath) {
            setNextPath(location.pathname);
            setShowCurtain(true);
            // setIsTransitioning(true);
        }
    }, [location.pathname, currentPath]);

    const handleCurtainAnimationComplete = (definition: string) => {
        if (definition === 'animate' && nextPath) {
            setCurrentPath(nextPath);
            setNextPath(null);
        } else if (definition === 'exit') {
            // setIsTransitioning(false);
            setShowCurtain(false);
        }
    };

    return (
        <>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentPath}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    className="app-content"
                >
                    <Header />
                    <SmoothScroll>
                        <main>
                            <Page />
                        </main>
                        <Footer />
                    </SmoothScroll>
                </motion.div>
            </AnimatePresence>

            <AnimatePresence>
                {showCurtain && (
                    <motion.div
                        key="curtain"
                        className="fixed inset-0 bg-black z-[9999] pointer-events-none"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={curtainVariants}
                        onAnimationComplete={handleCurtainAnimationComplete}
                    />
                )}
            </AnimatePresence>
        </>
    );
};
