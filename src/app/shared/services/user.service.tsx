import {User} from '@/app/shared/interfaces/user.interface';

const url = 'http://localhost:3300'

export class UserService {

    async getUserById(id: number) {
        const res = await fetch(`http://localhost:3300/user/12`);
        const json = await res.json();
        return json.data as User
    }
}
