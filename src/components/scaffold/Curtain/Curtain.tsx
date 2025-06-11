import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { endTransition } from '@/store/slices/pageTransitionSlice/pageTransitionSlice';
import gsap from 'gsap';

export const Curtain = () => {
    const dispatch = useDispatch();
    const curtainRef = useRef<HTMLDivElement>(null);
    const { isTransitioning, direction } = useSelector((state: RootState) => state.pageTransition);
    const isPageLoaded = useSelector((state: RootState) => state.page.isPageLoaded);

    useEffect(() => {
        if (!curtainRef.current) return;
        gsap.set(curtainRef.current, {
            yPercent: -100,
        });
    }, []);

    useEffect(() => {
        if (!isPageLoaded || !isTransitioning || !curtainRef.current) return;

        const tl = gsap.timeline({
            onComplete: () => {
                if (direction === 'out') {
                    dispatch(endTransition());
                    gsap.set(curtainRef.current, {
                        yPercent: -100,
                    });
                }
            },
        });

        if (direction === 'in') {
            tl.fromTo(
                curtainRef.current,
                { yPercent: -100 },
                {
                    yPercent: 0,
                    duration: 0.5,
                    ease: 'power2.inOut',
                },
            );
        } else if (direction === 'out') {
            tl.to(curtainRef.current, {
                yPercent: -100,
                duration: 0.5,
                ease: 'power2.inOut',
            });
        }

        return () => {
            tl.kill();
        };
    }, [isTransitioning, direction, dispatch, isPageLoaded]);

    return (
        <div
            ref={curtainRef}
            className="fixed inset-0 bg-black z-[9999] pointer-events-none"
            style={{
                willChange: 'transform',
            }}
        />
    );
};
