import {translater} from '@/app/shared/utils/translater';
import {User} from '@/app/shared/interfaces/user.interface';

export function formatePerformance(performances: Performances) {
    if (!performances?.data) {
        return [];
    }
    return performances.data
        .map((item) => ({
            value: item.value,
            kind: translater(performances.kind[item.kind.toString()] || 'Unknown'),
        })).reverse();
}


export function formateScore(user: User) {
    user.todayScore = user.todayScore ? user.todayScore : user.score
    return user.todayScore || 0
}
