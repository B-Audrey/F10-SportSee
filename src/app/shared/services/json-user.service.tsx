import data from '@/app/data.json';
import {User} from '@/app/shared/interfaces/user.interface';

export default function useJsonDataService() {

    async function getLocalUserById(id: number) {
        const user = data.users.find( (user) => user.id === id)
        return user as User
    }

    return {getLocalUserById}
}
