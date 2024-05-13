import {useEffect, useState} from 'react';
import useApiDataService from '@/app/shared/services/api-user.service';
import useJsonDataService from '@/app/shared/services/json-user.service';
import {User} from '@/app/shared/interfaces/user.interface';

const useGetUser = (userId: string, isJsonSource: boolean = false) => {

    let {getUserById} = useApiDataService()
    let {getLocalUserById} = useJsonDataService()

    const [state, setState] = useState({user : {} as User, loading: true} );

    const fetchUser = async (id: string) => {
        const data = await getUserById(id);
        setState( (prev) => ({...prev, user: data}))
    }
    const fetchLocalUser = async (id: string) => {
        const data = await getLocalUserById(id);
        setState( (prev) => ({...prev, user: data}))
    }

    // useEffect to fetch the appropriate user when the userId is set or the json source is changed
    useEffect(() => {
        if(userId && !isJsonSource) {
            setState( (prev) => ({...prev, loading: true}))
            fetchUser(userId)
        }
        if(userId && isJsonSource) {
            setState( (prev) => ({...prev, loading: true}))
            fetchLocalUser(userId)
        }
    }, [userId, isJsonSource])

    // useEffect to set loading to false when user is fetched, used when the user is set in the state
    useEffect(() => {
        if (state.user?.id) {
            setState( (prev) => ({...prev, loading: false}))
        }
    }, [state.user]);

    return {user: state.user, loading: state.loading}
}

export default useGetUser;
