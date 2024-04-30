import './score-chart.scss'
import {Legend, Pie, PieChart} from 'recharts';
import React from 'react';

export default function ScoreChart({todayScore}: {todayScore: number}) {

    const CustomLegend = ({ todayScore }: any) => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{fontSize: '1.2em'}}>{todayScore * 100}%</span>
                <span style={{fontSize: '0.8em', color:'#74798C'}}>de votre <br/> objectif</span>
            </div>
        );
    };

    const startAngle = 180 // starting at 180 degrees : 9 o'clock
    const endAngle = startAngle - 360 * todayScore; // calculate the end angle based on the score

    console.log(startAngle)
    console.log(endAngle)

    return <div className={'box-background'}>
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
            <Pie fill="white" dataKey="bg" startAngle={0} endAngle={360} data={[{bg:360}]} outerRadius={50}/>
            <Legend  content={ <CustomLegend todayScore={todayScore} />} verticalAlign="middle" align="center" />
        </PieChart>
    </div>
}
