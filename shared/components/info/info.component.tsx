import './info.component.scss'
import {InfoProps} from '@/shared/interfaces/info-props.interface';
import Image from 'next/image';

/**
 * InfoComponent functional component to display the user key data
 * @param icon
 * @param text
 * @param value
 */
export default function InfoComponent({ icon, text, value }: InfoProps) {
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
