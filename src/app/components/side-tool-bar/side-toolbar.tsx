import './side-toolbar.scss'
import Image from 'next/image';
import bike from '../../assets/bike.png';
import weight from '../../assets/weight.png';
import swim from '../../assets/swim.png';
import yoga from '../../assets/yoga.png';

const SideToolBar = () => {
    return <div className={'sidetoolbar'}>
        <div  className={'sidetoolbar-logos'}>
            <Image src={yoga} alt={'yoga'} width={64} height={64}/>
            <Image src={swim} alt={'swim'} width={64} height={64}/>
            <Image src={bike} alt={'bike'} width={64} height={64}/>
            <Image src={weight} alt={'weight'} width={64} height={64}/>
        </div>
        <span className={'sidetoolbar-copyright'} >Copyright, SportSee 2020</span>
    </div>
}
export default SideToolBar;
