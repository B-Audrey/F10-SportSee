import {User} from '@/shared/interfaces/user.interface';
import {Activity} from '@/shared/interfaces/activity.interface';
import {Average} from '@/shared/interfaces/average.interface';
import {Performances} from '@/shared/interfaces/performances.interface';

export default function useApiDataService() {
    const url = 'http://localhost:3300/user';

    async function getUserById(id: string) {
        const res = await fetch(`${url}/${id}`);
        const json = await res.json();
        return json.data as User
    }

    async function getUserDailyActivity(id: string) {
        const res = await fetch(`${url}/${id}/activity`);
        const json = await res.json();
        return json.data as Activity
    }

    async function getUserAveragePerSession(id: string) {
        const res = await fetch(`${url}/${id}/average-sessions`);
        const json = await res.json();
        return json.data as Average
    }

    async function getUserPerformances(id: string) {
        const res = await fetch(`${url}/${id}/performance`);
        const json = await res.json();
        return json.data as Performances
    }

    return {getUserById, getUserDailyActivity, getUserAveragePerSession, getUserPerformances}
}


