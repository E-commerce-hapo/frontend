import React from 'react'
import "./Chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart ({ title, data, dataKey, grid}) {
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="99%" aspect={ 3/1 } >
                <LineChart data={data} margin={{ left: 30, right: 20}} >
                    <XAxis dataKey="month" stroke="#5550bd" style={{ fontSize: 12}}/>
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                    <Tooltip/>
                    { grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/> }
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}