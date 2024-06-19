import {User} from '../interfaces/user.interface';
import {Activity} from '../interfaces/activity.interface';
import {Average} from '../interfaces/average.interface';
import {Performances} from '../interfaces/performances.interface';


export default function useApiDataService() {
    const url = 'http://localhost:3300/user';

    async function getUserById(id: string): Promise<User> {
        try {
            const res = await fetch(`${url}/${id}`);
            const json = await res.json();
            return json.data as User
        } catch (error) {
            return {} as User
        }
    }

    async function getUserDailyActivity(id: string) {
        try {

            const res = await fetch(`${url}/${id}/activity`);
            const json = await res.json();
            return json.data as Activity
        } catch (error) {
            return {} as Activity
        }
    }

    async function getUserAveragePerSession(id: string) {
        try {

            const res = await fetch(`${url}/${id}/average-sessions`);
            const json = await res.json();
            return json.data as Average
        } catch (error) {
            return {} as Average
        }
    }

    async function getUserPerformances(id: string) {
        try {

            const res = await fetch(`${url}/${id}/performance`);
            const json = await res.json();
            return json.data as Performances
        } catch (error) {
            return {} as Performances
        }
    }

    return {getUserById, getUserDailyActivity, getUserAveragePerSession, getUserPerformances}
}


