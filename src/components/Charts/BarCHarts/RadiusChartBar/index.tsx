import React from 'react';
import  ReactApexChart  from 'react-apexcharts';
import { useTheme } from '@mui/material';
import { ApexOptions } from 'apexcharts';

const RadiusChart = () => {
    const theme = useTheme();
  
    const chartData: ApexOptions = {
      chart: {
        type: "line",
        id: "apexchart-example",
        foreColor: theme.palette.primary.main,
       
        toolbar: {
            show: false,
        },
      },
      dataLabels: {
        enabled: false
    },
    plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10
        },
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100]
          // colorStops: []
        }
      },
      legend: {
        // position: '',
        width: 400
        // position: 'top',
      },
      series: [
        {
          name: "Distance Traveled",
          type: "column",
          data: [440, 505, 414, 571, 227, 413, 201, 352, 652, 320, 257, 160]
        },
        {
          name: "Time Traveled",
          type: "line",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 42, 22, 12, 16]
        }
      ]
    };
  
    return (
        <> 
    <ReactApexChart
     options={chartData}
      series={chartData.series}
       />
    </>
    );
  };

  export default RadiusChart;