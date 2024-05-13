import {translater} from '@/app/shared/utils/translater';
import {User} from '@/app/shared/interfaces/user.interface';

/**
 * formatePerformance function to format the performances data in an array to render
 * @param performances
 */
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

/**
 * formateAverage function to implement todayScore even if the source model is with score
 * @param user
 */
export function formateScore(user: User) {
    user.todayScore = user.todayScore ? user.todayScore : user.score
    return user.todayScore || 0
}
