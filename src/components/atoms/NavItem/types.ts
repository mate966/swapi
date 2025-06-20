export interface NavLink {
    type: string;
    reference: {
        relationTo: string;
        value: {
            id: string;
            title: string;
            slug: string;
        };
    } | null;
    label: string | null;
}

export interface NavItemTypes {
    navigation: {
        link: NavLink;
        subnav: NavLink[];
    };
}
