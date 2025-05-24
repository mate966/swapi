export interface ResponsiveImageProps {
    srcDesktop: string;
    srcMobile: string;
    alt: string;
    webpDesktop?: string;
    webpMobile?: string;
    className?: string;
    imgClassName?: string;
    loading?: 'lazy' | 'eager';
    preload?: boolean;
}
