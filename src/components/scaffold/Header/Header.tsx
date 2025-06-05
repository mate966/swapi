import { NavItem } from '@/components/atoms/NavItem/NavItem';
import { NavItemProps } from '@/components/atoms/NavItem/navItem.types';
import { useGlobalData } from '@/hooks/useGlobalData/useGlobalData';
import { Link } from 'react-router-dom';

export const Header = () => {
    const { header, loading, error } = useGlobalData();

    if (loading || error || !header) {
        return null;
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-900 shadow-lg`}
        >
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between h-16">
                    <Link to="/" className="text-white text-xl font-bold">
                        Logo
                    </Link>

                    <ul className="flex space-x-8">
                        {header.nav.map((item: NavItemProps, index: number) => (
                            <NavItem key={index} {...item} />
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
