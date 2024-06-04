'use client'
import './dashboard.scss';
import React, {useEffect, useState} from 'react';
import {Calories, Carbs, Fat, Protein} from '../../assets';
import useGetUser from '../../shared/utils/custom-hooks/useGetUser';
import NotFound from '../../shared/components/not-found/not-found';
import {InfoProps} from '../../shared/interfaces/info-props.interface';
import ActivityChart from '../../shared/components/activity-chart/activity-chart.component';
import AverageLineChartComponent from '../../shared/components/average-line-chart/average-line-chart.component';
import PerformancesChartComponent from '../../shared/components/performances-chart/performances-chart.component';
import ScoreChartComponent from '../../shared/components/score-chart/score-chart.component';
import InfoComponent from '../../shared/components/info/info.component';
import Loading from '../../shared/components/loading/loading.component';


/**
 * Dashboard functional component to display the user dashboard
 * this is the actual main page of the application
 */
export default function Dashboard() {

    let [isJsonSource, setIsJsonSource] = useState(false)
    let [userId, setUserId] = useState('')

    /**
     * useEffect to get the user id from the url only at the first render
     * and set it in the state
     */
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('user') || '';
        setUserId(id);
    }, []);

    /**
     * useGetUser custom hook to get the user data
     * @param userId
     * @param isJsonSource
     */
    const {user} = useGetUser(userId, isJsonSource)

    // if the user is not found, display the NotFound component
    if (!user) {
        return <NotFound/>
    }

    /**
     * handleRevertJsonSource function to change the source of the data when button is clicked
     */
    const handleRevertJsonSource = () => {
        setIsJsonSource(!isJsonSource);
    }


    // infoData array of objects to display the user key data
    const infoData = [
        {
            icon: Calories,
            text: "Calories",
            value: `${user.keyData?.calorieCount.toLocaleString('en-US')}KCal`, // use toLocaleString with en-US style to insert come into the numbers
        }, {
            icon: Protein,
            text: "Protéines",
            value: `${user.keyData?.proteinCount.toLocaleString('en-US')}g`,
        }, {
            icon: Carbs,
            text: "Glucides",
            value: `${user.keyData?.carbohydrateCount.toLocaleString('en-US')}g`,
        },
        {
            icon: Fat,
            text: "Lipides",
            value: `${user.keyData?.carbohydrateCount.toLocaleString('en-US')}g` || '0',
        },
    ] as InfoProps[]


    return <div className={'main-content'}>
        <button className={'change-source-button'} onClick={handleRevertJsonSource}>changer la source</button>
        {user.id ?
            <section>
                <header>
                    <h1>Bonjour <strong> {user.userInfos.firstName} </strong></h1>
                    <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
                </header>
                <div className={'stats-container'}>
                    <div className={'graphs-bloc'}>
                        <ActivityChart isJsonSource={isJsonSource} userId={userId}/>
                        <div className={'graph-content'}>
                            <AverageLineChartComponent userId={userId} isJsonSource={isJsonSource}/>
                            <PerformancesChartComponent userId={userId} isJsonSource={isJsonSource}/>
                            <ScoreChartComponent userId={userId} isJsonSource={isJsonSource}/>
                        </div>
                    </div>
                    <div className={'infos-bloc'}>
                        {infoData.map((current, index) =>
                            <InfoComponent key={`${index}${current.value}`} icon={current.icon}
                                           value={current.value} text={current.text}/>)
                        }
                    </div>
                </div>
            </section>
            :
            <Loading/>
        }
    </div>
}
