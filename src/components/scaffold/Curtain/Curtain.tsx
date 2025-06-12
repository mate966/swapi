import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';
// import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import styles from './Curtain.module.scss';

const curtainVariants = {
    initial: { x: '-100%' },
    animate: { x: '0%' },
    exit: { x: '100%' },
    transition: {
        ease: [0.5, 0, 0.1, 1],
        duration: 1,
    },
};

const Curtain = () => {
    const isCurtainVisible = useSelector((state: RootState) => state.global.isCurtainVisible);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const ref = useRef<HTMLDivElement>(null);

    return (
        <AnimatePresence>
            {isCurtainVisible && (
                <motion.div className={styles.wrapper} ref={wrapperRef} {...curtainVariants}>
                    <div className={styles.inner} ref={ref}></div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Curtain;
