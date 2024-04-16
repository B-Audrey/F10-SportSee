export interface Activity {
    sessions: Session[]
    userId: number
}

export interface Session {
    calories: number
    day: string
    kilogram: number
}
