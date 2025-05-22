import { Link } from 'react-router-dom';
import { NavItemProps } from './navItem.types';

export const NavItem = ({ link, subnav }: NavItemProps) => {
    const href = link.type === 'reference' && link.reference ? `${link.reference.value.slug}` : '#';

    return (
        <li className="relative group">
            <Link to={href} className="hover:text-gray-300 transition-colors">
                {link.label}
            </Link>
            {subnav && subnav.length > 0 && (
                <ul className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg py-2 hidden group-hover:block">
                    {subnav.map((subItem, index) => (
                        <li key={index}>
                            <Link
                                to={
                                    subItem.link.type === 'reference' && subItem.link.reference
                                        ? `${subItem.link.reference.value.slug}`
                                        : '#'
                                }
                                className="block px-4 py-2 hover:bg-gray-600 transition-colors"
                            >
                                {subItem.link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};
