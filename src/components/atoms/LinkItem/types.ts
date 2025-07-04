export interface LinkItemTypes {
    type: string;
    reference: {
        relationTo: string;
        value: {
            id: string;
            title: string;
            slug: string;
        };
    };
    url: string;
    newTab: boolean;
    label: string;
}
