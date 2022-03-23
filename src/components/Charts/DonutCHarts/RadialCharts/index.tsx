import React from 'react';
import { Legend, RadialBar, RadialBarChart } from 'recharts';
import { useTheme } from '@mui/material';
import { ApexOptions } from 'apexcharts';
import  ReactApexChart  from 'react-apexcharts';

interface type{
    minAngle: number;
}


const RadialCharts = () => {
    const theme = useTheme();


    const options: ApexOptions = {
        colors: ["#3DB7C0", "#A4DDE1", "#222222", "#ABB1B5", "#606C74"],
        //  colors: ["#222222", "#3DB7C0", "#A4DDE1", "#ABB1B5", "#606C74" ],

        labels: ["Apple", "Mango", "Orange", "Watermelon", "Banana"],
        theme: {
            monochrome: {
                enabled: false
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    radialBar: {
                        width: "100%",
                        type: 'radialBar',
                    },
                    legend: {
                        show: false
                    },
                },
            },
        ],
        chart: {
            events: {
                dataPointSelection: (event, chartContext, config) => {
                    console.log(config.w.config.labels[config.dataPointIndex]);
                }
            },
            
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
    }
    const series =[44, 55, 13, 43, 22]
    // const data = [
    //     {name:'A', x:1,fill:"green"},
    //     {name:'B', x:2, fill:"yellow"},
    //     {name:'C', x:3, fill:"aqua"},
    //     {name:'D', x:4, fill: "blue"},
    //     {name:'E', x:5, fill:"orange"},
    //     {name:'F', x:6, fill:"red"},
    //     {name:'G', x:7, fill:"black"},
    //     {name:'H', x:8, fill:"purple"},
    //     {name:'I', x:9, fill:"gray"},
    //   ];

    // const style = {
    //     top: 0,
    //     left: 350,
    //     lineHeight: "24px"
    // };


    return (
        <>
       <ReactApexChart
                options={options}
                series={series}
                type="radialBar"
                width="280"
            />
            {/* <RadialBarChart
                width={500}
                height={300}
                cx={150}
                cy={150}
                innerRadius={20}
                outerRadius={140}
                barSize={10}
                data={data}
            >
                <RadialBar
                     minAngle={15}
                    label={{ position: "insideStart", fill: "#fff" }}
                    background
                    clockWise
                    dataKey="uv"
                />
                <Legend
                    iconSize={10}
                    width={120}
                    height={140}
                    layout="vertical"
                    verticalAlign="middle"
                    wrapperStyle={style}
                />
            </RadialBarChart> */}
        </>
    );
};

export default RadialCharts;