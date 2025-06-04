import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useEffect, useRef } from 'react';
import { SmoothScrollProps } from './smoothScroller.types';

gsap.registerPlugin(ScrollSmoother);

export default function SmoothScroll({ children }: SmoothScrollProps) {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const smootherRef = useRef<ScrollSmoother | null>(null);

    useEffect(() => {
        if (!wrapperRef.current || !contentRef.current) {
            console.warn('SmoothScroller: No wrapper or content element found');
            return;
        }

        try {
            smootherRef.current = ScrollSmoother.create({
                wrapper: wrapperRef.current,
                content: contentRef.current,
                smooth: 1.5,
                normalizeScroll: false,
            });
        } catch (error) {
            console.error('SmoothScroller: Error initializing ScrollSmoother:', error);
        }

        return () => {
            smootherRef.current?.kill();
        };
    }, []);

    return (
        <div id="smooth-wrapper" ref={wrapperRef}>
            <div id="smooth-content" ref={contentRef}>
                {children}
            </div>
        </div>
    );
}
