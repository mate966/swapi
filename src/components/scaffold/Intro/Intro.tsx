import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setPageLoaded } from '@/store/slices/pageSlice/pageSlice';
import gsap from 'gsap';

export const Intro = () => {
    const [progress, setProgress] = useState(0);
    const dispatch = useDispatch();
    const loaderRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<number>(0);

    useEffect(() => {
        let animationFrame: number;
        let startTime: number | null = null;
        const duration = 1500;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const newProgress = Math.min((elapsed / duration) * 100, 100);

            setProgress(newProgress);
            progressRef.current = newProgress;

            if (newProgress < 100) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                if (loaderRef.current) {
                    gsap.to(loaderRef.current, {
                        opacity: 0,
                        y: -50,
                        duration: 1,
                        ease: 'power2.inOut',
                        onComplete: () => {
                            dispatch(setPageLoaded(true));
                        },
                    });
                }
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [dispatch]);

    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 flex items-center justify-center bg-black text-white text-4xl font-mono z-[9998]"
            style={{ willChange: 'opacity, transform' }}
        >
            {Math.round(progress)}%
        </div>
    );
};
