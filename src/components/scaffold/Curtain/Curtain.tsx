// Curtain.tsx
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Curtain.module.scss';

export const Curtain = ({ isVisible, onExited }: { isVisible: boolean; onExited: () => void }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className={styles.wrapper}
                    initial={{ y: '-100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                    onAnimationComplete={() => onExited()}
                />
            )}
        </AnimatePresence>
    );
};
