import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import styles from './Intro.module.scss';

const introVariants = {
    initial: { y: '0%' },
    animate: { y: '100%' },
    exit: { y: '100%' },
    transition: { ease: [0.5, 0, 0.1, 1], duration: 1 },
};

const Intro = () => {
    const isPageLoaded = useSelector((state: RootState) => state.page.isPageLoaded);

    return (
        <AnimatePresence mode="wait">
            {!isPageLoaded && (
                <motion.div
                    key="intro"
                    className={styles.wrapper}
                    variants={introVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={introVariants.transition}
                />
            )}
        </AnimatePresence>
    );
};

export default Intro;
