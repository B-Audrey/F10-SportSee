import useApiDataService from '@/app/shared/services/api-user.service';
import useJsonDataService from '@/app/shared/services/json-user.service';
import {Average} from '@/app/shared/interfaces/average.interface';
import {useEffect, useState} from 'react';
import {convertDay} from '@/app/shared/utils/day-convert';

const useGetAverage = (userId: string, isJsonSource: boolean = false) => {

    let {getUserAveragePerSession} = useApiDataService()
    let {getLocalUserAveragePerSession} = useJsonDataService()

    const [average, setAverage] = useState({} as Average);

    const fetchAverage = async (id: string = '12') => {
        const data = await getUserAveragePerSession(id);
        data.sessions.map((session) => session.day = convertDay(session.day?.toString()))
        setAverage(data);
    }
    const fetchLocalAverage = async (id: string = '12') => {
        const data = await getLocalUserAveragePerSession(id);
        data.sessions.map((session) => session.day = convertDay(session.day?.toString()))
        setAverage(data)
    }

    useEffect(() => {
        if(userId && !isJsonSource) {
            fetchAverage(userId)
        }
        if(userId && isJsonSource) {
            fetchLocalAverage(userId)
        }
    }, [userId, isJsonSource])

    return {average}

}

export default useGetAverage;
