'use client'
import '../styles/dashboard.scss';
import {User} from '@/app/shared/interfaces/user.interface';
import {UserService} from '@/app/shared/services/user.service';
import {useEffect, useState} from 'react';


export default function Dashboard() {

    const userService = new UserService()

    let [user, setUser] = useState({} as User);

    useEffect(() => {
        console.log(user)
        userService.getUserById(12)
            .then(res => {
                setUser(res)
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
     : null)
}
