import './performances-chart.component.scss';
import {ConfigProps} from '@/app/shared/interfaces/config-props.interface';
import useGetPerformances from '@/app/shared/utils/useGetPerformances';
import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer} from 'recharts';
import {translate} from '@/app/shared/utils/translate';


export default function PerformancesChartComponent({userId, isJsonSource}: ConfigProps) {
    const {performances} = useGetPerformances(userId, isJsonSource);

    const formattedData: FormattedDataItem[] = (performances.data || []).map((item) => ({
        value: item.value,
        kind: translate(performances.kind[item.kind.toString()] || 'Unknown'),
    })).reverse();

    return (
        <ResponsiveContainer width="100%" height="100%" className={'performance-chart-container'}>
            <RadarChart outerRadius={80} data={formattedData}
                        margin={{top: 5, right: 5, bottom: 5, left: 5}}
            >
                <PolarGrid gridType="polygon" stroke="#ffffff" radialLines={false}/>
                <PolarAngleAxis dataKey="kind" stroke="#ffffff" tickLine={false} tick={{fontSize: 12}}/>
                <PolarRadiusAxis stroke="#ffffff" tick={false} axisLine={false}/>
                <Radar name="Performance" dataKey="value" stroke="#ff0000" fill="#ff0000" fillOpacity={0.6}/>
            </RadarChart>
        </ResponsiveContainer>
    );
}
