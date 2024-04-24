'use client'
import '../styles/dashboard.scss';
import {User} from '@/app/shared/interfaces/user.interface';
import useApiDataService from '@/app/shared/services/api-user.service';
import React, {useEffect, useState} from 'react';
import InfoComponent from '@/app/shared/components/info/info.component';
import {Calories, Carbs, Fat, Protein} from '@/app/assets/index';
import {InfoComponentProps} from '@/app/shared/interfaces/props.interface';
import useJsonDataService from '@/app/shared/services/json-user.service';


export default function Dashboard() {

    let {getUserById} = useApiDataService()
    let { getLocalUserById } = useJsonDataService()

    let [isJsonSource, setIsJsonSource] = useState(true)
    let [user, setUser] = useState({} as User);

    useEffect(() => {
        if (!isJsonSource) {
            getUserById(18)
                .then(res => {
                    setUser(res)
                })
        } else {
            getLocalUserById(12)
                .then(res => {
                    setUser(res)
                })
        }
    }, [isJsonSource])


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
        }] as InfoComponentProps[]

    const handleRevertJsonSource = () => {
        setIsJsonSource(!isJsonSource);
        console.log('isJsonSource', isJsonSource)
    }

    return <>
        <button className={'change-source-button'} onClick={handleRevertJsonSource}>changer la source</button>
        {user.id ?
            <section>
                <header>
                    <h1>Bonjour <strong> {user.userInfos.firstName} </strong></h1>
                    <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
                </header>
                <div className={'stats-bloc'}>
                    <div className={'graphs'}>

                    </div>
                    <div className={'infos-bloc'}>
                        {infoData.map((current, index) =>
                            <InfoComponent key={`${index}${current.value}`} icon={current.icon}
                                           value={current.value} text={current.text}/>)
                        }
                    </div>
                </div>
            </section>
            : <h1>Loading...</h1>}
    </>
}
