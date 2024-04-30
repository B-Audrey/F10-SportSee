import './info.scss'
import {InfoComponentProps} from '@/app/shared/interfaces/props.interface';
import Image from 'next/image';


export default function InfoComponent({ icon, text, value }: InfoComponentProps) {

    return <div className={'info box-background'}>
        <div className={'info-picto'}>
            <Image src={icon.default.src} alt={'icon'} width={60} height={60} />
        </div>
        <div className={'info-text'}>
            <h3>{value}</h3>
            <span>{text}</span>
        </div>
    </div>
}
