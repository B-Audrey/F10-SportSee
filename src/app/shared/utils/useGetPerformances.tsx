import useApiDataService from '@/app/shared/services/api-user.service';
import useJsonDataService from '@/app/shared/services/json-user.service';
import {useEffect, useState} from 'react';

const useGetPerformances = (userId: string, isJsonSource: boolean = false) => {

    let {getUserPerformances} = useApiDataService()
    let {getLocalUserPerformances} = useJsonDataService()

    const [performances, setPerformances] = useState({} as Performances);


    const fetchPerformances = async (id: string = '12') => {
        const data = await getUserPerformances(id);
        setPerformances(data);
    }
    const fetchLocalPerformances = async (id: string = '12') => {
        const data = await getLocalUserPerformances(id);
        setPerformances(data)
    }

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
