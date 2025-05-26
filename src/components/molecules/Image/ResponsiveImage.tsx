import { ResponsiveImageTypes } from './responsiveImage.types';

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

    const preloadLinks = preload && (
        <>
            <link rel="preload" as="image" href={webpDesktop || srcDesktop} />
            <link
                rel="preload"
                as="image"
                href={webpMobile || srcMobile}
                media="(max-width: 768px)"
            />
        </>
    );

    return (
        <div className={className}>
            {preloadLinks}
            <picture>
                {webpMobile && (
                    <source srcSet={webpMobile} media="(max-width: 768px)" type="image/webp" />
                )}
                {webpDesktop && (
                    <source srcSet={webpDesktop} media="(min-width: 769px)" type="image/webp" />
                )}
                <source srcSet={srcMobile} media="(max-width: 768px)" />
                <source srcSet={srcDesktop} media="(min-width: 769px)" />
                <img src={srcDesktop} alt={alt} loading={loading} className={imgClassName} />
            </picture>
        </div>
    );
};
