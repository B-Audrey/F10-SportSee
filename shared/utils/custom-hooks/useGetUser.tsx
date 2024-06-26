import {useEffect, useState} from 'react';
import useApiDataService from '../../services/api-user.service';
import useJsonDataService from '../../services/json-user.service';
import {User} from '../../interfaces/user.interface';


/**
 * useGetUser custom hook to get the user data depending on the source
 * @param userId
 * @param isJsonSource
 */
const useGetUser = (userId: string, isJsonSource: boolean = false) => {

    let {getUserById} = useApiDataService()
    let {getLocalUserById} = useJsonDataService()

    /**
     * State to store the user data and the loading state
     */
    const [state, setState] = useState({user: {} as User, loading: true});

    /**
     * Fetch the user data from the API
     * @param id
     */
    const fetchUser = async (id: string) => {
        try {
            const data = await getUserById(id);
            if (data) {
                setState((prev) => ({...prev, user: data}))
            }
        } catch (error) {
            setState((prev) => ({...prev, user: {} as User}))
        }
    }

    /**
     * Fetch the user data from the JSON file
     * @param id
     */
    const fetchLocalUser = async (id: string) => {
        const data = await getLocalUserById(id);
        setState( (prev) => ({...prev, user: data}))
    }

    /**
     * useEffect to fetch call the appropriate function to fetch data
     * when the userId or isJsonSource changes
     * the loading state is set to true when the user is being fetched
     */
    useEffect(() => {
        setState((prev) => ({user: {} as User, loading: true}))
        if (userId && !isJsonSource) {
            fetchUser(userId)
        }
        if (userId && isJsonSource) {
            fetchLocalUser(userId)
        }

    }, [userId, isJsonSource])

    /**
     * useEffect to set the loading state to false when the user data is fetched
     */
    useEffect(() => {
        if (state.user) {
            setState( (prev) => ({...prev, loading: false}))
        }
    }, [state.user]);

    return {user: state.user, loading: state.loading}
}

export default useGetUser;
