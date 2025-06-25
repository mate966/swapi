import { useState } from 'react';
import { NavItem } from '@/components/atoms/NavItem';
import { NavItemTypes } from '@/components/atoms/NavItem/types';
import { SearchButton } from '@/components/atoms/SearchButton';
import { SearchModal } from '@/components/molecules/SearchModal';
import { useGlobalData } from '@/hooks/useGlobalData/useGlobalData';
import { Link } from 'react-router-dom';

export const Header = () => {
    const { header, loading, error } = useGlobalData();
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    if (loading || error || !header) {
        return null;
    }

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-900 shadow-lg`}
            >
                <div className="container mx-auto px-4">
                    <nav className="flex items-center justify-between h-16">
                        <Link to="/" className="text-white text-xl font-bold">
                            Logo
                        </Link>

                        <div className="flex items-center space-x-4">
                            <ul className="flex space-x-8">
                                {header.nav.map((item: NavItemTypes, index: number) => (
                                    <NavItem key={index} {...item} />
                                ))}
                            </ul>
                            <SearchButton onClick={() => setIsSearchOpen(true)} />
                        </div>
                    </nav>
                </div>
            </header>

            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
};
