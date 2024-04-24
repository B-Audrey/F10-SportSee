export interface Stats {
    sessions: Average[]
    userId: number
}

export interface Average {
    day: number
    sessionLength: number
}

export interface Performances {
    data : {value: number, kind: number}[]
    kind: {
        1: string
        2: string
        3: string
        4: string
        5: string
        6: string
    }
    userId: number
}