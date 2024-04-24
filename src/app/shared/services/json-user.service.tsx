import data from '@/app/data.json';
import {User} from '@/app/shared/interfaces/user.interface';
import {Activity} from '@/app/shared/interfaces/activity.interface';

export default function useJsonDataService() {

    async function getLocalUserById(id: number) {
        const user = data.users.find((user) => user.id === id)
        return user as User
    }

    async function getLocalUserDailyActivity(id: number) {
        const activity = data.activitySessions.find((activity) => activity.userId === id)
        return activity as Activity
    }


    return {getLocalUserById, getLocalUserDailyActivity}
}
