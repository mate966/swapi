// Curtain.tsx
import { motion } from 'framer-motion';
import styles from './Curtain.module.scss';
import { CurtainProps } from './types';

export const Curtain = ({ isVisible }: CurtainProps) => {
    return (
        <motion.div
            className={styles.wrapper}
            initial={{ y: '-100%' }}
            animate={{ y: isVisible ? 0 : '-100%' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
    );
};
