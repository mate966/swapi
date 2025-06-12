import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import styles from './Intro.module.scss';
import { setIsPageLoaded } from '@/store/slices/globalSlice';

export const Intro = () => {
    const dispatch = useDispatch();
    const isPageLoaded = useSelector((state: RootState) => state.global.isPageLoaded);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let frame: number;
        const duration = 1500;
        const start = performance.now();

        const animateProgress = (now: number) => {
            const elapsed = now - start;
            const percentage = Math.min(100, (elapsed / duration) * 100);
            setProgress(Math.floor(percentage));

            if (elapsed < duration) {
                frame = requestAnimationFrame(animateProgress);
            } else {
                dispatch(setIsPageLoaded(true));
            }
        };

        frame = requestAnimationFrame(animateProgress);
        return () => cancelAnimationFrame(frame);
    }, [dispatch]);

    return (
        <AnimatePresence mode="wait">
            {!isPageLoaded && (
                <motion.div
                    key="intro"
                    className={styles.wrapper}
                    initial={{ y: '0%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '100%' }}
                    transition={{ ease: [0.5, 0, 0.1, 1], duration: 0.5 }}
                >
                    <div className={styles.counter}>{progress}%</div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
