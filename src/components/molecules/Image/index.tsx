import { ResponsiveImageTypes } from './types';

export const ResponsiveImage = ({ ...image }: ResponsiveImageTypes) => {
    const {
        srcDesktop,
        srcMobile,
        alt,
        webpDesktop,
        webpMobile,
        className = '',
        imgClassName = '',
        loading = 'lazy',
        preload = false,
    } = image;

    if (!srcDesktop && !srcMobile) {
        return null;
    }

    const preloadLinks = preload && srcDesktop && (
        <>
            <link rel="preload" as="image" href={webpDesktop || srcDesktop} />
            {srcMobile && (
                <link
                    rel="preload"
                    as="image"
                    href={webpMobile || srcMobile}
                    media="(max-width: 768px)"
                />
            )}
        </>
    );

    return (
        <div className={className}>
            {preloadLinks}
            <picture>
                {webpMobile && srcMobile && (
                    <source srcSet={webpMobile} media="(max-width: 768px)" type="image/webp" />
                )}
                {webpDesktop && srcDesktop && (
                    <source srcSet={webpDesktop} media="(min-width: 769px)" type="image/webp" />
                )}
                {srcMobile && <source srcSet={srcMobile} media="(max-width: 768px)" />}
                {srcDesktop && (
                    <img src={srcDesktop} alt={alt} loading={loading} className={imgClassName} />
                )}
            </picture>
        </div>
    );
};
