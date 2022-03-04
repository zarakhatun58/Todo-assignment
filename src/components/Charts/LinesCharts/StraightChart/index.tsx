import { ApexOptions } from 'apexcharts';
import React from 'react';
import  ReactApexChart  from 'react-apexcharts';

const StraightChart = () => {

    const options: ApexOptions = {
        colors: ['#ff0000', '#546E7A'],
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            },
            
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size:[3, 3],
            shape: "circle",
            hover:{
                sizeOffset: 5,
            },
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: 'Product Trends by Month',
            align: 'left'
        },
       
       
        grid: {
           
            xaxis: {
                lines: {
                    show: false
                },
            },   
            yaxis: {
                lines: {
                    show: false
                },
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }



    }

    const series = [
        {
            name: "Desktops",
            data: [10, 71, 65, 51, 49, 62, 69, 91, 148],
        },
        {
            name: "Mobiles",
            data: [15, 31, 38, 54, 44, 16, 19, 91, 108],
        },
    ]

    return (
        <div>
            <ReactApexChart
                options={options}
                series={series}
                type="line" height={350} />
        </div>
    );
};

export default StraightChart;

/*
grid: {
    show: false,
    // row: {
    //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    //     // opacity: 0.5
        
    // },
},

*/