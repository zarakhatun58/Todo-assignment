import React from 'react';
import { ResponsiveContainer, RadialBarChart, Legend, RadialBar, Tooltip } from 'recharts';

interface type{
    minAngle:any[];
    
    clockWise: boolean;
}

const data = [
    { name: 'A', x: 1, fill: "green" },
    { name: 'B', x: 2, fill: "yellow" },
    { name: 'C', x: 3, fill: "aqua" },
    { name: 'D', x: 4, fill: "blue" },
    { name: 'E', x: 5, fill: "orange" },
    { name: 'F', x: 6, fill: "red" },
    { name: 'G', x: 7, fill: "black" },
    { name: 'H', x: 8, fill: "purple" },
    { name: 'I', x: 9, fill: "gray" },
];

const style = {
    top: 0,
    left: 350,
    lineHeight: "24px",
    minAngle: "number",
    clockWise:"boolean",
};



const ChartRadialOne = () => {
    return (
        <div>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    width={730}
                    height={250}
                    innerRadius="10%"
                    outerRadius="80%"
                    data={data}
                    startAngle={180}
                    endAngle={0}
                >
                    <RadialBar  label={{ fill: '#666', position: 'insideStart' }} background  dataKey='uv' />
                    <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                    <Tooltip />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ChartRadialOne;