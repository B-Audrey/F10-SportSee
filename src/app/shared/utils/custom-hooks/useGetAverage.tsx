import useApiDataService from '@/app/shared/services/api-user.service';
import useJsonDataService from '@/app/shared/services/json-user.service';
import {Average} from '@/app/shared/interfaces/average.interface';
import {useEffect, useState} from 'react';
import {convertDay} from '@/app/shared/utils/day-convert';

/**
 * useGetAverage custom hook to get the average data depending on the source
 * @param userId
 * @param isJsonSource
 */
const useGetAverage = (userId: string, isJsonSource: boolean = false) => {

    let {getUserAveragePerSession} = useApiDataService()
    let {getLocalUserAveragePerSession} = useJsonDataService()

    const [average, setAverage] = useState({} as Average);

    /**
     * Fetch the average data from the API
     * @param id
     */
    const fetchAverage = async (id: string = '12') => {
        const data = await getUserAveragePerSession(id);
        data.sessions.map((session) => session.day = convertDay(session.day?.toString()))
        setAverage(data);
    }
    /**
     * Fetch the average data from the JSON file
     * @param id
     */
    const fetchLocalAverage = async (id: string = '12') => {
        const data = await getLocalUserAveragePerSession(id);
        data.sessions.map((session) => session.day = convertDay(session.day?.toString()))
        setAverage(data)
    }

    /**
     * useEffect to fetch call the appropriate function to fetch data
     */
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
