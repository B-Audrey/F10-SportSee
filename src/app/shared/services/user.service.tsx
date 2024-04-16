import {User} from '@/app/shared/interfaces/user.interface';
import {Activity} from '@/app/shared/interfaces/activity.interface';
import {Performances, Stats} from '@/app/shared/interfaces/stats.interface';

const url = 'http://localhost:3300/user'

export class UserService {

    async getUserById(id: number) {
        const res = await fetch(`${url}/${id}`);
        const json = await res.json();
        return json.data as User
    }

    async getUserDailyActivity(id: number) {
        const res = await fetch(`${url}/${id}/activity`);
        const json = await res.json();
        return json.data as Activity
    }

    async getUserAveragePerSession(id: number) {
        const res = await fetch(`${url}/${id}/average-sessions`);
        const json = await res.json();
        return json.data as Stats
    }

    async getUserPerformance(id: number) {
        const res = await fetch(`${url}/${id}/performance`);
        const json = await res.json();
        return json.data as Performances
    }
}
