import './info.scss'
import {InfoComponentProps} from '@/app/shared/interfaces/props.interface';


export default function InfoComponent({ icon, text, value }: InfoComponentProps) {

    return <div className={'info'}>
        <div className={'info-picto'}>
            <img src={icon.default.src} alt={'icon'} />
        </div>
        <div className={'info-text'}>
            <h3>{value}</h3>
            <span>{text}</span>
        </div>
    </div>
}
