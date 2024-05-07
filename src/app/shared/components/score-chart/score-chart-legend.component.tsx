import React from 'react';

export default function ScoreChartLegendComponent({todayScore}: any) {
    parseInt(todayScore)
    if (todayScore === 0 || !todayScore) {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <span style={{fontSize: '0.8em', color: '#74798C'}}>Pas de données</span>
            </div>)
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <span style={{fontSize: '1.2em'}}>{Math.round(todayScore * 100)}%</span>
            <span style={{fontSize: '0.8em', color: '#74798C'}}>de votre <br/> objectif</span>
        </div>
    );
};
