import './average-line-chart.component.scss'

export default function AverageLineChartTooltipComponent({ active, payload }: any) {
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
