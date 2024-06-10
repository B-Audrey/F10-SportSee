export interface Average {
    sessions: Sessions[];
    userId: number;
}

export interface Sessions {
    day: string;
    sessionLength: number;
}
