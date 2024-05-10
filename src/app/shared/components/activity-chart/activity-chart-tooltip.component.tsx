import React from 'react';
import './activity-chart.component.scss'


export default function ActivityChartTooltipComponent({active, payload}: any) {
    if (active && payload && payload.length) {
        return (
            <div className={'activity-chart-tooltip-container'}>
                {payload.map((item: any) => (
                    <p key={item.dataKey} className={'activity-chart-tooltip-content'}>
                        {`${item.value}${item.name === 'kilogram' ? 'kg' : 'kCal'}`}
                    </p>
                ))}
            </div>
        );
    }
    return (<span>pas de données</span>);
};
