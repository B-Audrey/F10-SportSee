import './score-chart.component.scss'
import {Legend, Pie, PieChart, ResponsiveContainer} from 'recharts';
import React, {useEffect, useState} from 'react';
import useGetUser from '@/app/shared/utils/custom-hooks/useGetUser';
import ScoreChartLegendComponent from '@/app/shared/components/score-chart/score-chart-legend.component';
import {ConfigProps} from '@/app/shared/interfaces/config-props.interface';
import {formateScore} from '@/app/shared/utils/formatter';

export default function ScoreChartComponent({userId, isJsonSource}: ConfigProps) {

    const {user} = useGetUser(userId, isJsonSource)
    const [todayScore, setTodayScore] = useState(0)

    useEffect(() => {
        setTodayScore(formateScore(user))
    }, [user]);



    const startAngle = 180 // starting at 180 degrees : 9 o'clock
    const endAngle = startAngle - 360 * todayScore; // calculate the end angle based on the score

    console.log('todayScore', todayScore)
    console.log('startAngle', startAngle)
    console.log('endAngle', endAngle)

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
            <Pie cornerRadius={5} dataKey="value" isAnimationActive={false} data={[{name: 'score', value: todayScore}]}
                 fill="red" outerRadius={60} innerRadius={50} startAngle={startAngle} endAngle={endAngle} minAngle={1}/>
            <Pie fill="white" dataKey="bg" startAngle={0} endAngle={360} data={[{bg: 360}]} outerRadius={50}/>
            <Legend content={<ScoreChartLegendComponent todayScore={todayScore}/>} verticalAlign="middle" align="center"/>
        </PieChart>
        </ResponsiveContainer>
    </div>
}
