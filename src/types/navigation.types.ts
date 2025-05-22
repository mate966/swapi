export interface Header {
    nav: Nav[];
}

export interface Nav {
    link: Link;
}

export interface Link {
    type: string;
    reference: Reference;
}

export interface Reference {
    relationTo: string;
    value: Value;
}

export interface Value {
    slug: string;
}
