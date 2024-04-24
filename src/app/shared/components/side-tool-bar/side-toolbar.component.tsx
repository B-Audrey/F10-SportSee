import './side-toolbar.scss'
import Image from 'next/image';
import {Bike, Swim, Weight, Yoga} from '@/app/assets/index';

export default function SideToolbarComponent() {
    return <div className={'sidetoolbar'}>
        <div className={'sidetoolbar-logos'}>
            <Image src={Yoga} alt={'yoga'} width={64} height={64}/>
            <Image src={Swim} alt={'swim'} width={64} height={64}/>
            <Image src={Bike} alt={'bike'} width={64} height={64}/>
            <Image src={Weight} alt={'weight'} width={64} height={64}/>
        </div>
        <span className={'sidetoolbar-copyright'}>Copyright, SportSee 2020</span>
    </div>
}
