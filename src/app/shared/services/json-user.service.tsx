import data from '@/app/data.json';
import {User} from '@/app/shared/interfaces/user.interface';
import {Activity} from '@/app/shared/interfaces/activity.interface';
import {Average} from '@/app/shared/interfaces/average.interface';

export default function useJsonDataService() {

    async function getLocalUserById(id: string) {
        const user = data.users.find((user) => user.id === parseInt(id))
        return user as User
    }

    async function getLocalUserDailyActivity(id: string) {
        const activity = data.activitySessions.find((activity) => activity.userId === parseInt(id))
        return activity as Activity
    }

    async function getLocalUserAveragePerSession(id: string) {
        const average = data.average.find((average) => average.userId === parseInt(id))
        return average as Average
    }


    return {getLocalUserById, getLocalUserDailyActivity, getLocalUserAveragePerSession}
}
