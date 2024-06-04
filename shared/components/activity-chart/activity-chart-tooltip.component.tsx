import React from 'react';
import './activity-chart.component.scss'

/**
 * ActivityChartTooltipComponent functional component to display the tooltip on graph
 * @param active
 * @param payload
 */
export default function ActivityChartTooltipComponent({active, payload}: any) {
    /**
     * Display the tooltip with the value passed in the payload
     */
    if (active && payload && payload.length) {
        return (
            <div className={'activity-chart-tooltip-container'}>
                {/*for each item, display the value*/}
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
