export interface NavLink {
    type: 'reference';
    reference?: {
        value: {
            slug: string;
        };
    };
    label: string;
}

export interface NavItemProps {
    link: NavLink;
    subnav?: NavItemProps[];
}
