import { Link } from 'react-router-dom';
import { NavItemTypes } from './navItem.types';

export const NavItem = ({ navigation }: NavItemTypes) => {
    const { link, subnav } = navigation;

    if (!link?.reference?.value?.slug || !link.label) {
        return null;
    }

    return (
        <li className="relative group">
            <Link
                to={link.reference.value.slug}
                className="text-white hover:text-gray-300 transition-colors duration-200"
            >
                {link.label}
            </Link>
            {subnav && subnav.length > 0 && (
                <ul className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-2 hidden group-hover:block">
                    {subnav.map((item, index) => {
                        if (!item.reference?.value?.slug || !item.label) {
                            return null;
                        }
                        return (
                            <li key={index}>
                                <Link
                                    to={item.reference.value.slug}
                                    className="block px-4 py-2 text-white hover:bg-gray-700"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </li>
    );
};
