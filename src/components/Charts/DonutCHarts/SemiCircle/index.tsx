import React from 'react';
import { ApexOptions } from 'apexcharts';
import { useTheme } from '@mui/material';
import  ReactApexChart  from 'react-apexcharts';

const SemiCircle = () => {
    const theme = useTheme();
    // const options: ApexOptions = {
    //     colors: ["#3DB7C0", "#A4DDE1", "#222222", "#ABB1B5", "#606C74"],
    //     //  colors: ["#222222", "#3DB7C0", "#A4DDE1", "#ABB1B5", "#606C74" ],

    //     labels: ["Apple", "Mango", "Orange", "Watermelon", "Banana"],
    //     theme: {
    //         monochrome: {
    //             enabled: false
    //         }
    //     },
    //     responsive: [
    //         {
    //             breakpoint: 480,
    //             options: {
    //                 radialBar: {
    //                     width: "100%",
    //                     type: 'radialBar',
    //                 },
    //                 legend: {
    //                     show: false
    //                 },
    //             },
    //         },
    //     ],
    //     chart: {
    //         events: {
    //             dataPointSelection: (event, chartContext, config) => {
    //                 console.log(config.w.config.labels[config.dataPointIndex]);
    //             }
    //         },
            
    //     },
    //     legend: {
    //         show: false
    //     },
    //     dataLabels: {
    //         enabled: false
    //     },
    // }
    const series =[ 55, 33, ]


    const options: ApexOptions = {
        // series: [76, 67, 61, 90],
        chart: {
        height: 390,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: -90,
          endAngle: 90,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            }
          }
        }
      },
      colors: ['#1ab7ea', '#0084ff', ],
        labels: ['Vimeo', 'Messenger', ],
      legend: {
        show: false,
        floating: false,
        fontSize: '16px',
        position: 'left',
        offsetX: 160,
        offsetY: 15,
        labels: {
           
          useSeriesColors: false,
        },
        // markers: {
        //   size: 0
        // },
        formatter: function(seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
        },
        itemMargin: {
          vertical: 3
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
              show: false
          },
          labels: {
              show: false
          }
        }
      }]
      };
      
    return (
        <>
            <ReactApexChart
                options={options}
                series={series}
                type="radialBar"
                width="280"
            /> 
        </>
    );
};

export default SemiCircle;