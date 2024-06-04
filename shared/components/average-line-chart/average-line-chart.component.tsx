import './average-line-chart.component.scss'
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';
import React from 'react';
import {ConfigProps} from '../../interfaces/config-props.interface';
import useGetAverage from '../../utils/custom-hooks/useGetAverage';
import AverageLineChartTooltipComponent from './average-line-chart-tooltip.component';


/**
 * AverageLineChartComponent functional component to display the average line chart
 * @param userId
 * @param isJsonSource
 */
export default function AverageLineChartComponent({userId, isJsonSource}: ConfigProps) {

    /**
     * Custom cursor component to display a background rectangle on the chart
     * @param points
     * @param width
     */
    const CustomCursor = ({points, width}: any) => {
        const {x} = points[0]; // Use the x-coordinate of the first point to position the rectangle.
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
                    {/* Define a linear gradient to color the line chart, will be called with its id */}
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
                    y={50} // y position of the text lower than first text
                    style={{fontSize: '14px', fill: "#FBFBFB80"}}
                >
                    sessions
                </text>
                {/* XAxis component to display the days on the x-axis without tickLines*/}
                <XAxis dataKey="day" tickLine={false} tick={{fill: "#FBFBFB80"}} stroke={'#FF0101'} tickMargin={10}
                       fontSize={12}/>
                {/* Line component to draw the line chart without dot and with custom color ref by url(id) */}
                <Line type="natural" dataKey="sessionLength" dot={false} activeDot={{r: 3}}
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
