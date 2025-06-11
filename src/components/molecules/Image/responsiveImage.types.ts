export interface ResponsiveImageTypes {
    srcDesktop: string | null;
    srcMobile: string | null;
    alt: string;
    webpDesktop?: string;
    webpMobile?: string;
    className?: string;
    imgClassName?: string;
    loading?: 'lazy' | 'eager';
    preload?: boolean;
}
