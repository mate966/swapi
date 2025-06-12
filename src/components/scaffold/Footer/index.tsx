import { NavItem } from '@/components/atoms/NavItem';
import { NavItemTypes } from '@/components/atoms/NavItem/types';
import Icon from '@/components/ui';
import { useGlobalData } from '@/hooks/useGlobalData/useGlobalData';

export const Footer = () => {
    const { footer, loading, error } = useGlobalData();

    if (loading || error || !footer) {
        return null;
    }

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold mb-4">{footer.title}</h2>
                        <p className="mb-4">{footer.copy}</p>
                        <p className="text-sm text-gray-400">{footer.copyright}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Nawigacja</h3>
                        <ul className="space-y-2">
                            {footer.nav.map((item: NavItemTypes, index: number) => (
                                <NavItem key={index} {...item} />
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Social Media</h3>
                        <ul className="flex space-x-4">
                            {footer.social.map((item, index) => {
                                const { link, icon } = item;
                                return (
                                    <li key={index}>
                                        <a
                                            href={link.url}
                                            className="text-gray-400 hover:text-white transition-colors"
                                            target={link.newTab ? '_blank' : undefined}
                                            rel={link.newTab ? 'noopener noreferrer' : undefined}
                                        >
                                            {icon && <Icon icon={icon} />}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};
