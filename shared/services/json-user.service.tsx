import data from '@/data.json';
import {User} from '@/shared/interfaces/user.interface';
import {Activity} from '@/shared/interfaces/activity.interface';
import {Average} from '@/shared/interfaces/average.interface';
import {Performances} from '@/shared/interfaces/performances.interface';

export default function useJsonDataService() {

    async function getLocalUserById(id: string) {
        return data.users.find((user) => user.id === parseInt(id)) as User
    }

    async function getLocalUserDailyActivity(id: string) {
        return data.activitySessions.find((activity) => activity.userId === parseInt(id)) as Activity
    }

    async function getLocalUserAveragePerSession(id: string) {
        return data.average.find((average) => average.userId === parseInt(id)) as unknown as Average
    }

    async function getLocalUserPerformances(id: string) {
        return data.performance.find((performance) => performance.userId === parseInt(id)) as Performances
    }


    return {getLocalUserById, getLocalUserDailyActivity, getLocalUserAveragePerSession, getLocalUserPerformances}
}
