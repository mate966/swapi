import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setPageLoaded } from '@/store/slices/pageSlice/pageSlice';
import gsap from 'gsap';

export const Intro = () => {
    const [progress, setProgress] = useState(0);
    const dispatch = useDispatch();
    const loaderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    if (loaderRef.current) {
                        gsap.to(loaderRef.current, {
                            opacity: 0,
                            y: -50,
                            duration: 0.5,
                            onComplete: () => {
                                dispatch(setPageLoaded(true));
                            },
                        });
                    } else {
                        dispatch(setPageLoaded(true));
                    }
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 flex items-center justify-center bg-black text-white text-4xl font-mono z-50"
        >
            {progress}%
        </div>
    );
};
