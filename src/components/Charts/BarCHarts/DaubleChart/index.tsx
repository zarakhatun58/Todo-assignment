import { useTheme, Grid } from '@mui/material';
import React, { useState } from 'react';
import { useStyles } from './Styles';
import  ReactApexChart  from 'react-apexcharts';


interface ApexChartProps { }

const DaubleChart = () => {
    const theme = useTheme();
    const classes = useStyles();

    const [chartData, setChartData] = useState({
        options: {
            colors: ["#1BAAB5", "#ABB1B5"],
            chart: {
                id: "apexchart-example",
                className: "apexchartsCanvas",
                foreColor: theme.palette.grey[700],
                gap: "10px",
                toolbar: {
                    show: false,
                },
                legend: {
                    fontSize: "32px"
                },
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: "top",
                        style: {
                            colors: ["#1BAAB5", "#ABB1B5"],
                            fontSize: "13px",
                        },
                    },
                },
            },

            dataLabels: {
                enabled: false
            },

            xaxis: {
                categories: ["Jan", "Feb", "Mar"],
                position: "bottom",
                labels: {
                    show: true,
                    style: {
                        colors: ["#606C74"],
                        fontSize: "13px",

                    },
                },
            },
            fill: {
                colors: ["#1BAAB5", "#ABB1B5"],
            },
        },
        series: [
            {
                name: "New",
                data: ["44000", "55000", "41000"],

            },
            {
                name: "Old",
                data: ["9000", "21000", "31000"],
            },

        ]

    });
    return (
        <div>
            <Grid style={{ position: "relative", margin: "auto" }}>
                {/* <Grid><Typography className={classes.overAllAxis}>X-axis are in 1000 </Typography></Grid>  */}
                <ReactApexChart
                    options={chartData.options}
                    series={chartData.series}
                    type="bar"
                    height={190}
                    width={650}
                    padding="10px"
                    color="#ABB1B5"
                    fontSize="13px"

                    className={classes.generalOver}
                />
            </Grid>
        </div>
    );
};

export default DaubleChart;