/* eslint-disable */
import { Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

import { useTheme } from '@mui/material';
// import { useStyles } from "./Styles";
// import "../../../../App.css";
// import  moment  from 'moment';
// import { useTheme } from "@mui/material";
// import { useAppContext } from "../../../../AppContext";
// import { getAgingStatement } from "../../../../GraphService";


// var currentyear = moment().format("YYYY"); //2022
// var Prevyear1 = moment(currentyear).subtract(1,'y').format("YYYY"); //2021
// var Prevyear2 = moment(currentyear).subtract(2,'y').format("YYYY"); //2020
// var Prevyear3 = moment(currentyear).subtract(3,'y').format("YYYY"); //2019

// let options: ApexOptions = {};
// let series: any = [];

interface ApexChartProps { }
interface ApexOptions {
  //  position: string;
  //   style:string;
  //    maxItems?: number | undefined;
  //     hideOverflowingLabels?: boolean | undefined;
  //      position?: string | undefined; orientation?
  //       "horizontal" | "vertical" | undefined; 
}

const ColumChart = () => {
//   const classes=useStyles();
  const theme = useTheme();
//   const app = useAppContext();

//   let currentQuarter: any = parseInt(moment().format("M"));
//   // let currentQuarter:any=parseInt("10");

//   const [statement, setStatement] = useState<any>([]);
//   var listItems = app.listInfo;

//   const loadMessage = async () => {
//     if (statement.length == 0) {
//       try {
//         var listItems = app.listInfo?.PDCStatement;
//         if (listItems != null) {
//           const response = await getAgingStatement(
//             app.authProvider!,
//             app.siteInfo?.siteId,
//             listItems,
//             app.user?.email
//           );
//           const { value = [] } = response;
//           const sortedActivities = value.sort((b: any, a: any) => Date.parse(a.lastModifiedDateTime) < Date.parse(b.lastModifiedDateTime) ? -1 : 1);

//           setStatement(sortedActivities);
//            console.log(sortedActivities);
//         }
//       } catch (err: any) {
//         app.displayError!(err.message);
//       }
//     }
//   };

//   useEffect(() => {
//      console.log(listItems);
//     if (listItems) {
//       loadMessage();
//     }
//   }, [app.listInfo]);

//     if (currentQuarter <= 3) {

//     options = {
//         colors: ["#157880", "#913B32"],
//         chart: {
//           id: "apexchart-example",
//           foreColor: theme.palette.grey[700],
//           gap: "10px",
//           toolbar: {
//             show: false,
//           },
//           legend: {
//             fontSize: "32px"
//           },
//         },
//         plotOptions: {
//           bar: {
//             horizontal: false,
//             dataLabels: {
//               position: "top",
//               style: {
//                 colors: ["#157880", "#913B32"],
//                 fontSize: "13px",
//               },
//             },
//           },
//         },
  
//         dataLabels: {
//           enabled: false
//         },
//         legend: {
//           show: false
//         },
  
//         xaxis: {
//           categories: ["2019", "2020", "2021", "2022"],
//           position: "bottom",
//           labels: {
//             show: true,
//             style: {
//               colors: ["#606C74"],
//               fontSize: "13px",
//             },
//           },
//         },
//         fill: {
//           colors: ["#21C1CE", "#1BAAB5","#19929B","#157880", ],
//         },
//       }

//     {
//       statement &&
//         statement.map((statementItem: any, index: any) => {
//           const { fields = {} } = statementItem;
//           return (

//   series= [
//               {
//                 name: ["Q1"],
//                 // data: ["34", "15", "21", "15"],
//                 data: ["" + Prevyear1 + "", "" + Prevyear2 + "", "" + Prevyear3 + "","" + currentyear + "",], 
//               },  
//               {
//                 name: ["Q2"],
//                 data: ["" + Prevyear1 + "", "" + Prevyear2 + "", "" + Prevyear3 + "","" + currentyear + "",], 
                
//               },
//               {
//                  name: ["Q3"],
//                  data: ["" + Prevyear1 + "", "" + Prevyear2 + "", "" + Prevyear3 + "","" + currentyear + "",], 
//               },
//               {
//                  name: "Q4",
//                  data: ["" + Prevyear1 + "", "" + Prevyear2 + "", "" + Prevyear3 + "","" + currentyear + "",], 
//               },
//               // {
//               //    name: "Feb Order",
//               //   data: ["15", "23", "30", "30"],
//               // },
//               // {
//               //    name: "Mar Order",
//               //   data: ["34", "15", "21", "15"],
//               // },
             
//             ]
//           )
//         });
//     }


//   }

    const options: ApexOptions = {
      colors: ["#157880", "#913B32"],
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
          horizontal: false,
          borderRadius: 10,
          dataLabels: {
            position: "top",
            style: {
              colors: ["#157880", "#913B32"],
              fontSize: "13px",
            },
          },
        },
      },

      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },

      xaxis: {
        categories: ["2019", "2020", "2021", "2022"],
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
        colors: ["#21C1CE", "#1BAAB5","#19929B","#157880", ],
      },
    }
  const series= [
      {
        name: ["Q1"],
        data: ["34", "15", "21", "15"],
        
      },  
      {
        name: ["Q2"],
        data: ["9", "21", "31", "30"],
        
      },
      {
         name: ["Q3"],
        data: ["24", "44", "14", "16"],
        classNames: [],
      },
      {
         name: "Q4",
        data: ["11", "12", "33", "48"],
      },
    //   {
    //      name: "Feb Order",
    //     data: ["15", "23", "30", "30"],
    //   },
    //   {
    //      name: "Mar Order",
    //     data: ["34", "15", "21", "15"],
    //   },
     
    ]
   
 


  return (
    <>
      <Grid >
        <Typography component="div" >
         All Data by different Colour
        </Typography>

        <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={225}
        padding="5px"
        
        color="#1BAAB5"
        fontSize="13px"
      />
      </Grid>
    </>
  );
};

export default ColumChart;
