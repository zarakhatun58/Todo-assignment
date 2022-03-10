import React from 'react';
import Chart from 'react-google-charts';

const PieChartFirst = () => {
    const pieData = [
        ["Task", "AED per month"],
        ["Jan", 223],
        ["Feb", 132],
        ["Mar", 121],
    ];

    const pieOptions = {
        //title: "Outstanding Balance",
        pieHole: 0.7,
        series: [223, 132, 121],
        labels: ["Jan", "Feb", "Mar"],
        // color: ["#0086b3", "#ffa31a", "#ff3333"],
        color: ["#1BAAB5", "#606C74", "#ABB1B5"],
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    show: true,
                    total: {
                        show: true,
                        showAlways: true,
                        label: "AED",
                        fontSize: "24px",
                        color: "black",
                    },
                },
            },
        },
    };
    return (
        <div>
            <Chart
                chartType="PieChart"
                data={pieData}
                options={pieOptions}
                width={"100%"}
                height={"400px"}
            />
        </div>
    );
};

export default PieChartFirst;