'use client'
import '../styles/dashboard.scss';
import {User} from '@/app/shared/interfaces/user.interface';
import {UserService} from '@/app/shared/services/user.service';
import {useEffect, useState} from 'react';
import {Activity} from '@/app/shared/interfaces/activity.interface';
import {Performances, Stats} from '@/app/shared/interfaces/stats.interface';


export default function Dashboard() {

    const userService = new UserService()

    let [user, setUser] = useState({} as User);
    let [activity, setActivity] = useState({} as Activity);
    let [stats, setStats] = useState({} as Stats);
    let [performance, setPerformance] = useState({} as Performances);

    useEffect(() => {
        userService.getUserById(12)
            .then(res => {
                setUser(res)
            })
        userService.getUserDailyActivity(12)
            .then(res => {
                setActivity(res)
            })
        userService.getUserAveragePerSession(12)
            .then(res => {
                setStats(res)
            })
        userService.getUserPerformance(12)
            .then(res => {
                setPerformance(res)
            })
    }, [])


    return (user.id ?
        <section>
            <header>
                <h1>Bonjour <strong> {user.userInfos.firstName} </strong></h1>
                <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
            </header>
            <div className={'graphs'}>
            </div>
        </section>
     : <h1>Loading...</h1>)
}
