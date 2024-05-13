import './score-chart.component.scss'
import {Legend, Pie, PieChart, ResponsiveContainer} from 'recharts';
import React, {useEffect, useState} from 'react';
import useGetUser from '@/app/shared/utils/custom-hooks/useGetUser';
import ScoreChartLegendComponent from '@/app/shared/components/score-chart/score-chart-legend.component';
import {ConfigProps} from '@/app/shared/interfaces/config-props.interface';
import {formateScore} from '@/app/shared/utils/formatter';

/**
 * ScoreChartComponent functional component to display the score chart
 * @param userId
 * @param isJsonSource
 */
export default function ScoreChartComponent({userId, isJsonSource}: ConfigProps) {

    const {user} = useGetUser(userId, isJsonSource)
    const [todayScore, setTodayScore] = useState(0)

    /**
     * useEffect to format the user score and set it in the state
     * whenever the user data changes.
     */
    useEffect(() => {
        setTodayScore(formateScore(user)) // Format and set the score.
    }, [user]);

    // Define the angles for the pie chart to visualize the score graphically.
    const startAngle = 180 // starting at 180 degrees : 9h
    const endAngle = startAngle - 360 * todayScore; // calculate the end angle based on the score


    return <div className={'box-background pie-chart-container'}>
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={200} height={200}>
            <text
                x={20}
                y={25}
                style={{fontSize: '14px', fontWeight: 'bold', color: "#20253A"}}
            >
                Score
            </text>
            {/* Pie component to draw the score pie chart */}
            <Pie cornerRadius={5} dataKey="value" isAnimationActive={false} data={[{name: 'score', value: todayScore}]}
                 fill="red" outerRadius={60} innerRadius={50} startAngle={startAngle} endAngle={endAngle} minAngle={1}/>
            {/* Pie component to draw the center full pie with a white background */}
            <Pie fill="white" dataKey="bg" startAngle={0} endAngle={360} data={[{bg: 360}]} outerRadius={50}/>
            <Legend content={<ScoreChartLegendComponent todayScore={todayScore}/>} verticalAlign="middle" align="center"/>
        </PieChart>
        </ResponsiveContainer>
    </div>
}
