import { NavItem } from '@/components/atoms/NavItem/NavItem';
import { NavItemProps } from '@/components/atoms/NavItem/navItem.types';
import { useGlobalData } from '@/hooks/useGlobalData';

export const Footer = () => {
    const { footer, loading, error } = useGlobalData();

    if (loading || error || !footer) {
        return null;
    }

    console.log(footer.socials);

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
                            {footer.nav.map((item: NavItemProps, index: number) => (
                                <NavItem key={index} {...item} />
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Social Media</h3>
                        <ul className="flex space-x-4">
                            {footer.socials.map((item, index) => (
                                <li key={index}>
                                    {/* {item.social} */}
                                    {/* <Link
                                        to={item.social.link.reference.value.slug}
                                        className="text-gray-400 hover:text-white transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    > */}
                                    {/* <span className="sr-only">{item.social.link.label}</span> */}
                                    {/* <span
                                            dangerouslySetInnerHTML={{ __html: item.social.icon }}
                                        /> */}
                                    {/* </Link> */}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};
