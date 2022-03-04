import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useTheme } from '@mui/material';
import { ApexOptions } from 'apexcharts';


// interface ApexOptions {
//     options?: ApexOptions | undefined,
//     event:any[],
//     chartContext:any[],
//     config:any[],
//     labels:string[],
// }
interface ApexChartProps { }

interface ApexChartState {
    options?: any;
    series?: any;
}

const GlobeChart = () => {
    const theme = useTheme();


    const options: ApexOptions = {
        colors: ["#157880", "#913B32", "#157880", "#913B32",],

        labels: ["Apple", "Mango", "Orange", "Watermelon"],
        theme: {
            monochrome: {
                enabled: false
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: "100%",
                        type: "pie",
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
        
        
    
    // const series = [
    //     {
    //         name: ["Globe"],
    //         data: [25, 15, 44, 55, 41, ],

    //     },

    // ]
    return (
        <>
            <ReactApexChart
                options={options}
                series={series}
                type="pie"
                width="280"
            />
        </>
    );
};

export default GlobeChart;

/*
        const [chartData, setChartData]=useState({
            series: [44, 55, 13, 43, 22],
            options: {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },

        })

*/