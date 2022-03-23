import { ApexOptions } from 'apexcharts';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface type{
    chart:any[];

}
const NewLineChart = () => {

    // Set cell size in pixels
    // let cellSize = 30;
    // chart.events.on("datavalidated", function (ev) {

    //     // Get objects of interest
    //     let chart = ev.target;
    //     let categoryAxis = chart.yAxes.getIndex(0);

    //     // Calculate how we need to adjust chart height
    //     let adjustHeight = chart.data.length * cellSize - categoryAxis.pixelHeight;

    //     // get current chart height
    //     let targetHeight = chart.pixelHeight + adjustHeight;

    //     // Set it on chart's container
    //     chart.svgContainer.htmlElement.style.height = targetHeight + "px";
    // });


    const options: ApexOptions = {
        colors: ['#E40010', '#1E8CC7'],
        chart: {
            height: 100,
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
            size: [3, 3],
            shape: "circle",
            hover: {
                sizeOffset: 5,
            },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        // title: {
        //   text: 'Product Trends by Month',
        //   align: 'left'
        // },


        grid: {

            xaxis: {
                lines: {
                    show: false
                },
            },
            yaxis: {
                lines: {
                    show: true
                },
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar',],
        },

        fill: {
            colors: ["#1BAAB5", "#ABB1B5"],
        },
        annotations: {

            yaxis: [
                {
                    // y: new Date('23 Nov 2017').getTime(),
                    y: 60,

                    strokeDashArray: 1,
                    borderColor: '#004C75',
                    fillColor: '#004C75',
                    borderWidth: 2,
                    label: {
                        borderColor: '#00E396',
                        style: {
                            color: 'white',
                            background: '#1BAAB5',

                        },
                        text: 'Target 60'
                    }
                }
            ]
        }
    }
    const series = [{
        data: [
            {
                x: "jan",
                y: 54
            }, {
                x: "feb",
                y: 66
            },
            {
                x: "mar",
                y: 87
            }
        ],
    }]
    return (
        <div>
            <ReactApexChart
                options={options}
                series={series}
                type="line"
                height={250}
                width={550}

            />
        </div>
    );
};

export default NewLineChart;