'use client'
import '../styles/dashboard.scss';
import React, {useState} from 'react';
import InfoComponent from '@/app/shared/components/info/info.component';
import {Calories, Carbs, Fat, Protein} from '@/app/assets/index';
import {InfoComponentProps} from '@/app/shared/interfaces/props.interface';
import Loading from '@/app/shared/components/loading/loading.component';
import ActivityChart from '@/app/shared/components/activity-chart/activity-chart.component';
import useGetUser from '@/app/shared/utils/useGetUser';
import ScoreChartComponent from '@/app/shared/components/score-chart/score-chart.component';
import AverageLineChartComponent from '@/app/shared/components/average-line-chart/average-line-chart.component';
import {is} from 'immutable';


export default function Dashboard() {

    //JSON OR API SOURCE
    let [isJsonSource, setIsJsonSource] = useState(false)
    const handleRevertJsonSource = () => {
        setIsJsonSource(!isJsonSource);
    }

    // URL TO GET USER ID
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('user') || '12';

    //user and loading from useGetUser
    const {user} = useGetUser(Number(userId), isJsonSource)
    const infoData = [
        {
            icon: Calories,
            text: "Calories",
            value: `${user.keyData?.calorieCount.toLocaleString('en-US')}KCal`, // use locale string en style to insert come into the numbers
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
    ] as InfoComponentProps[]


    return <>
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
                            <div>graph 2</div>
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
    </>
}
