import React from 'react';
import { ApexOptions } from 'apexcharts';
import  ReactApexChart  from 'react-apexcharts';

const DynamicCharts = () => {
    const options: ApexOptions = {
        chart: {
            height: 150,
            type: "radialBar",
        },
        series: [67, 45, 13],
        colors: ["#20E647","#E40010","#1E8CC7" ],
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                track: {
                    background: '#333',
                    startAngle: -135,
                    endAngle: 135,
                },
                dataLabels: {
                    name: {
                        show: true,
                    },
                    value: {
                        fontSize: "30px",
                        show: true
                    }
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "light",
                type: "horizontal",
                gradientToColors: ["#20E647","#E40010","#1E8CC7"],
                stops: [0, 100]
            }
        },
        stroke: {
            lineCap: "butt"
        },
        labels: ["Progress"]
    };

    const series= [
        {
          name: "all",
          data: [67, 45, 13],
        },
        
    
      ]
   

    return (
        <>
            <ReactApexChart
                options={options}
                series={series}
                type="radialBar"
               
               

            />
        </>
    );
};

export default DynamicCharts;