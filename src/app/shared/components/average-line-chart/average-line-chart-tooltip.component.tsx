import './average-line-chart.component.scss'

export default function AverageLineChartTooltipComponent({ active, payload }: any) {
    console.log(payload);
    if (active && payload && payload.length) {
        // Rendre les éléments en utilisant le bon format
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
