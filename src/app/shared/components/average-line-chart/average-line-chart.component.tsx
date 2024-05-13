import './average-line-chart.component.scss'
import {ConfigProps} from '@/app/shared/interfaces/config-props.interface';
import useGetAverage from '@/app/shared/utils/custom-hooks/useGetAverage';
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';
import React from 'react';
import AverageLineChartTooltipComponent
    from '@/app/shared/components/average-line-chart/average-line-chart-tooltip.component';

export default function AverageLineChartComponent({userId, isJsonSource}: ConfigProps) {

    const CustomCursor = ({points, width}: any) => {
        const { x } = points[0];

        return (
            <rect
                x={x}
                width={width}
                height="100%"
                fill="rgba(0, 0, 0, 0.1)"
            />
        );
    };

    const {average} = useGetAverage(userId, isJsonSource)

    return <div className={'box-background average-line-container'}>
        <ResponsiveContainer width="100%" height="100%">

        <LineChart width={200} height={200} data={average.sessions} margin={{
            top: 70,
            right: 10,
            left: 10,
            bottom: 20,
        }}>
            <defs>
                <linearGradient id="colorLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)"/>
                    <stop offset="100%" stopColor="rgba(255, 255, 255, 0.9)"/>
                </linearGradient>
            </defs>
            <text
                x={30} // x position of the text is same as the left margin
                y={30} // y position of the text is same as the top margin
                style={{fontSize: '14px', fill: "#FBFBFB80"}}
            >
                Durée moyenne des
            </text>
            <text
                x={30} // x position of the text is same as the left margin
                y={50} // y position of the text is same as the top margin
                style={{fontSize: '14px', fill: "#FBFBFB80"}}
            >
                sessions
            </text>
            <XAxis dataKey="day" tickLine={false} tick={{fill: "#FBFBFB80"}} stroke={'#FF0101'} tickMargin={10}
                   fontSize={12}/>
            <Line type="monotone" dataKey="sessionLength" dot={false} activeDot={{r: 3}}
                  strokeWidth={2}
                  stroke="url(#colorLine)"
                  strokeLinecap="round"
            >

            </Line>

            <Tooltip
                content={<AverageLineChartTooltipComponent/>}
                cursor={<CustomCursor/>}/>
        </LineChart>
        </ResponsiveContainer>
    </div>
}
