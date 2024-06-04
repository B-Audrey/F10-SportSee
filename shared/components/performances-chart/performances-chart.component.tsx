import './performances-chart.component.scss';

import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer} from 'recharts';
import {FormattedDataItem} from '../../interfaces/performances.interface';
import {ConfigProps} from '../../interfaces/config-props.interface';
import useGetPerformances from '../../utils/custom-hooks/useGetPerformances';
import {formatePerformance} from '../../utils/formatter';


/**
 * PerformancesChartComponent functional component to display the performances chart
 * @param userId
 * @param isJsonSource
 */
export default function PerformancesChartComponent({userId, isJsonSource}: ConfigProps) {

    const {performances} = useGetPerformances(userId, isJsonSource);
    const formattedData: FormattedDataItem[] = formatePerformance(performances);

    return (
        <ResponsiveContainer width="100%" height="100%" className={'performance-chart-container'}>
            <RadarChart outerRadius={80} data={formattedData}
                        margin={{top: 5, right: 5, bottom: 5, left: 5}}
            >
                {/* PolarGrid to add a polygonal grid to the radar chart but not the lines from middle */}
                <PolarGrid gridType="polygon" stroke="#ffffff" radialLines={false}/>

                {/* PolarAngleAxis to show categories on the perimeter of the radar */}
                <PolarAngleAxis dataKey="kind" stroke="#ffffff" tickLine={false} tick={{fontSize: 12}}/>

                {/* PolarRadiusAxis to configure the radial axis (not visible in this configuration so set to false) */}
                <PolarRadiusAxis tick={false} axisLine={false}/>

                {/* Radar component to plot the performance data, styled with stroke and fill */}
                <Radar dataKey="value" stroke="#ff0000" fill="#ff0000" fillOpacity={0.6}/>
            </RadarChart>
        </ResponsiveContainer>
    );
}
