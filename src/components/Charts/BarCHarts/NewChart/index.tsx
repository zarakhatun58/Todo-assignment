import React from 'react';
import  ReactApexChart  from 'react-apexcharts';
import { useTheme } from '@mui/material';
import { useStyles } from './Styles';


interface ApexOptions{
    //  position: string;
    //   style:string;
    //    maxItems?: number | undefined;
    //     hideOverflowingLabels?: boolean | undefined;
    //      position?: string | undefined; orientation?
    //       "horizontal" | "vertical" | undefined; 
        }


const NewChart = () => {

    const theme = useTheme();
    const classes = useStyles();

    const options: ApexOptions = {
        colors: ["#1BAAB5", "#ABB1B5"],
        chart: {
            id: "apexchart-example",

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
    }

    const series = [
        {
            name: "Old",
            data: ["44000", "55000", "41000"],

        },
        {
            name: "New",
            data: ["9000", "21000", "31000"],
        },





    ]
    return (
        <div>
              <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height={190}
                width={650}
                padding="10px"
                color="#ABB1B5"
                fontSize="13px"

                className={classes.generalOver}
            />
        </div>
    );
};

export default NewChart;