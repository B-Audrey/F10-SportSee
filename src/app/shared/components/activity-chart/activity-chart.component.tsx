import './activity-chart.scss'
import useApiDataService from '@/app/shared/services/api-user.service';
import useJsonDataService from '@/app/shared/services/json-user.service';
import React, {useEffect, useState} from 'react';
import {Activity} from '@/app/shared/interfaces/activity.interface';
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

export default function ActivityChart({isJsonSource, userId}: { isJsonSource: boolean, userId: number }) {

    const CustomTooltip = ({active, payload}: any) => {
        if (active && payload && payload.length) {
            return (
                <div style={{
                    backgroundColor: 'red',
                    padding: '10px',
                    height: '63px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    {payload.map((item: any) => (
                        <p key={item.dataKey} style={{
                            fontSize: '7px',
                            textAlign: 'center',
                            color: 'white',
                            display: 'block',
                            margin: '2em 0'
                        }}>
                            {`${item.value}${item.name === 'kilogram' ? 'kg' : 'kCal'}`}
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    let {getUserDailyActivity} = useApiDataService()
    let {getLocalUserDailyActivity} = useJsonDataService()

    let [activity, setActivity] = useState({} as Activity)

    useEffect(() => {
        if (!isJsonSource) {
            getUserDailyActivity(userId)
                .then(res => {
                    setActivity(res)
                })
        } else {
            getLocalUserDailyActivity(userId)
                .then(res => {
                    setActivity(res)
                })
        }
    }, [isJsonSource, userId])
    return <>
        <div className={'activity-chart box-background'}>
            {/*width and height are set to 100% to make the chart responsive*/}
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={activity?.sessions}
                    margin={{
                        top: 30,
                        right: 10,
                        left: 30,
                        bottom: 30,
                    }}
                >
                    {/* Add background grid, mais it dotted, remove vertical lines and apply color */}
                    <CartesianGrid strokeDasharray="1 2" vertical={false} stroke="#DEDEDE" />
                    {/* text to make the title*/}
                    <text
                        x={30} // x position of the text is same as the left margin
                        y={45} // y position of the text is same as the top margin
                        style={{fontSize: '16px', fontWeight: 'bold', color: "#20253A"}}
                    >
                        Activité quotidienne
                    </text>
                    {/* Need to custom Legend for style with custom payload */}
                    <Legend verticalAlign="top" iconType="circle" align="right" iconSize={8} height={80} payload={
                        [{
                            value: 'Poids (kg)',
                            color: "#282D30",
                        }, {
                            value: 'Calories brûlées (kCal)',
                            color: "#FF0101",
                        }
                        ]}/>
                    {/* Custom the x tick (line) and remove the tickLines above numbers  */}
                    <XAxis tickMargin={10} tick={{fill: "#9B9EAC", strokeWidth: 0.5}} tickLine={false}
                           stroke="#DEDEDE"/>
                    {/* Custom th y tick and place it on the right side */}
                    <YAxis tickMargin={10} tick={{fill: "#9B9EAC", strokeWidth: 0.5}} tickLine={false}
                           stroke="transparent" orientation="right"/>
                    <Tooltip content={<CustomTooltip/>}/>
                    {/* Custom the grey bars, add radius to the top */}
                    <Bar dataKey="kilogram" fill="#282D30" barSize={5} radius={[5, 5, 0, 0]} />
                    {/* Custom the red bars, add radius to the top */}
                    <Bar dataKey="calories" fill="#FF0101" barSize={5} radius={[5, 5, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    </>
}



// TODO masquer les erreurs dans la console du Xasis et Yaxis
//Mettre un lien vers l'issue GitHub de l'erreur de la console.
// const error = console.error;
// console.error = (...args: any) => {
//     if (/defaultProps/.test(args[0])) return;
//     error(...args);
// };
