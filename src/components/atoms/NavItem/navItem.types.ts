export interface NavLink {
    type: 'reference';
    reference?: {
        value: {
            pageId: string;
            pageTitle: string;
            pageSlug: string;
        };
    };
    linkLabel: string;
}

export interface SubNavLink {
    type: 'reference';
    reference?: {
        value: {
            subPageId: string;
            subPageTitle: string;
            subPageSlug: string;
        };
    };
    subLinkLabel: string;
}

export interface NavItemProps {
    link: NavLink;
    subnav?: SubNavLink[];
}
