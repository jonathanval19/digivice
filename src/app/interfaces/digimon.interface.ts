export interface Digimon {
    id:         number;
    name:       string;
    xAntibody:  boolean;
    images:     Image[];
    levels:     Level[];
    types:      Type[];
    attributes: Attribute[];
    fields:     Field[];
}

export interface Attribute {
    id:        number;
    attribute: string;
}

export interface Field {
    id:    number;
    field: string;
    image: string;
}

export interface Image {
    href:        string;
    transparent: boolean;
}

export interface Level {
    id:    number;
    level: string;
}

export interface Type {
    id:   number;
    type: string;
}
