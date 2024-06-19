import {useEffect, useState} from 'react';
import useApiDataService from '../../services/api-user.service';
import useJsonDataService from '../../services/json-user.service';
import {Average, Sessions} from '../../interfaces/average.interface';
import {convertDay} from '../day-convert';


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
        data?.sessions?.map((session: Sessions) => session.day = convertDay(session.day?.toString()))
        setAverage(data);
    }
    /**
     * Fetch the average data from the JSON file
     * @param id
     */
    const fetchLocalAverage = async (id: string = '12') => {
        const data = await getLocalUserAveragePerSession(id);
        data.sessions.map((session: Sessions) => session.day = convertDay(session.day?.toString()))
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
