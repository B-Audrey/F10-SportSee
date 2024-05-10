interface Kind {
    [key: string]: string;
}

interface RawDataItem {
    value: number;
    kind: number;
}

interface Performances {
    userId: number;
    kind: Kind;
    data: RawDataItem[];
}

interface FormattedDataItem {
    value: number;
    kind: string;
}
