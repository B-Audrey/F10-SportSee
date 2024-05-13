import useApiDataService from '@/app/shared/services/api-user.service';
import useJsonDataService from '@/app/shared/services/json-user.service';
import {useEffect, useState} from 'react';

/**
 * Performances interface to define the structure of the performances data
 * @param userId
 * @param isJsonSource
 */
const useGetPerformances = (userId: string, isJsonSource: boolean = false) => {

    let {getUserPerformances} = useApiDataService()
    let {getLocalUserPerformances} = useJsonDataService()

    const [performances, setPerformances] = useState({} as Performances);

    /**
     * Fetch the performances data from the API
     * @param id
     */
    const fetchPerformances = async (id: string = '12') => {
        const data = await getUserPerformances(id);
        setPerformances(data);
    }
    /**
     * Fetch the performances data from the JSON file
     * @param id
     */
    const fetchLocalPerformances = async (id: string = '12') => {
        const data = await getLocalUserPerformances(id);
        setPerformances(data)
    }

    /**
     * useEffect to fetch call the appropriate function to fetch data
     */
    useEffect(() => {
        if (userId && !isJsonSource) {
            fetchPerformances(userId)
        }
        if (userId && isJsonSource) {
            fetchLocalPerformances(userId)
        }
    }, [userId, isJsonSource])

    return {performances}

}

export default useGetPerformances;
