export interface Kind {
    [key: string]: string;
}

export interface RawDataItem {
    value: number;
    kind: number;
}

export interface Performances {
    userId: number;
    kind: Kind;
    data: RawDataItem[];
}

export interface FormattedDataItem {
    value: number;
    kind: string;
}
