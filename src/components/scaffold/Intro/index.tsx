import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux/useRedux';
import { RootState } from '@/store';
import styles from './Intro.module.scss';
import { setIsIntroCompleted } from '@/store/slices/globalSlice';

export const Intro = () => {
    const dispatch = useAppDispatch();
    const [progress, setProgress] = useState(0);
    const isIntroCompleted = useAppSelector((state: RootState) => state.global.isIntroCompleted);

    // TODO: Intro to local storage
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
                dispatch(setIsIntroCompleted(true));
            }
        };

        frame = requestAnimationFrame(animateProgress);
        return () => cancelAnimationFrame(frame);
    }, [dispatch]);

    return (
        <AnimatePresence>
            {!isIntroCompleted && (
                <motion.div
                    key="intro"
                    className={styles.wrapper}
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
