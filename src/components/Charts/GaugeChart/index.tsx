import { ApexOptions } from 'apexcharts';
import React from 'react';
import  ReactApexChart  from 'react-apexcharts';

const GaugeChart = () => {
   const options: ApexOptions= {
    colors: ["#1BAAB5", "#ABB1B5"],
  
        series: [76,55],
        chart: {
        type: 'radialBar',
        offsetY: -20,
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: '97%',
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              color: '#999',
              opacity: 1,
              blur: 2
            }
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: -2,
              fontSize: '22px'
            }
          }
        }
      },
      grid: {
        padding: {
          top: -10
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91]
        },
      },
      annotations: {
       
        yaxis: [
          {
            // y: new Date('23 Nov 2017').getTime(),
            y: 20,
            
            strokeDashArray: 0,
            borderColor: '#004C75',
            fillColor: '#004C75',
            borderWidth: 2,
            label: {
              borderColor: '#00E396',
              style: {
                color: 'white',
                background: '#1BAAB5',
               
              },
              text: 'Target 20'
            }
          }
        ]
      },
      labels: ["Apple",  ],
      };

      const series =[44,   ]
    return (
        <div>
           <ReactApexChart
                options={options}
                 series={series}
                type="radialBar"
                // height={250}
                // width={550}

            /> 
        </div>
    );
};

export default GaugeChart;