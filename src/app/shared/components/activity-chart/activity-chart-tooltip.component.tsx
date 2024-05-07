import React from 'react';

export default function ActivityChartTooltipComponent ({active, payload}: any) {
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
    return (<div> pas de données à afficher</div>);
};
