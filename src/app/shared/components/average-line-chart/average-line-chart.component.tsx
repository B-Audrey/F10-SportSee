import './average-line-chart.component.scss'
import {ComponentConfig} from '@/app/shared/interfaces/component-config.interface';

export default function AverageLineChartComponent({userId, isJsonSource}: ComponentConfig ) {
    return <div className={'average-line-chart'}>
        <span className={'average-line-chart-title'}>Durée moyenne des sessions</span>
        <span className={'average-line-chart-value'}>39 min</span>
    </div>
}
