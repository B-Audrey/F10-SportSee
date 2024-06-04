import './average-line-chart.component.scss'

/**
 * AverageLineChartTooltipComponent functional component to display the tooltip on graph
 * @param active
 * @param payload
 */
export default function AverageLineChartTooltipComponent({ active, payload }: any) {
    /**
     * Display the tooltip with the value passed in the payload
     */
    if (active && payload && payload.length) {
        return (
            <div className={'average-line-chart-tooltip-container'}>
                {payload.map((item: any) => (
                    <p key={item.dataKey}>
                        {`${item.value} min`}
                    </p>
                ))}
            </div>
        );
    }
    return (<span>Pas de données</span>);
}
