export interface User {
    id: 12;
    userInfos: {
        firstName: string;
        lastName: string;
        age: number;
    };
    todayScore?: number;
    score?: number;
    keyData: KeyData;
}

export interface KeyData {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
}
