import React from 'react';
import { useTheme } from '@mui/material';
import { useStyles } from '../NewChart/Styles';
import { ApexOptions } from 'apexcharts';
import  ReactApexChart  from 'react-apexcharts';

// let options: ApexOptions = {};
// let series: any = [];

const NewBarChart = () => {
//     let currentQuarter: any = parseInt(moment().format("M"));
//    // let currentQuarter: any = parseInt("7");
//    const app = useAppContext();
 
   const classes = useStyles();
   const theme = useTheme();
//    const [statement, setStatement] = useState<any>([]);
//    var listItems = app.listInfo;
 
//    const loadMessage = async () => {
//      if (statement.length == 0) {
//        try {
//          var listItems = app.listInfo?.PDCStatement;
//          if (listItems != null) {
//            const response = await getQuarterlyPerformanceGeneral(
//              app.authProvider!,
//              app.siteInfo?.siteId,
//              listItems,
//              app.user?.email
//            );
//            const { value = [] } = response;
//            const sortedActivities = value.sort((b: any, a: any) => Date.parse(a.lastModifiedDateTime) < Date.parse(b.lastModifiedDateTime) ? -1 : 1);
 
//            setStatement(sortedActivities);
//            // console.log(sortedActivities);
//          }
//        } catch (err: any) {
//          app.displayError!(err.message);
//        }
//      }
//    };
//    useEffect(() => {
//      // console.log(listItems);
//      if (listItems) {
//        loadMessage();
//      }
//    }, [app.listInfo]);
  
 
 
//    if (currentQuarter <= 3) {
//      options = {
 
//        // labels: ["10", "20", "30", "40"],
//        chart: {
//          id: "ApexChartProps",
//          foreColor: theme.palette.grey[700],
//          toolbar: {
//            show: false,
//          },
 
//        },
//        plotOptions: {
//          bar: {
//            horizontal: true,
//            barHeight: "40%",
 
//            dataLabels: {
//              position: "top",
 
//            },
//          },
 
//        },
 
//        dataLabels: {
//          enabled: false
//        },
 
//        xaxis: {
//          categories: ["Jan", "Feb", "Mar"],
//          position: "bottom",
//          labels: {
//            show: true,
//            style: {
//              colors: ["#606C74"],
//              fontSize: "13px",
//            },
//          },
//        },
//        fill: {
//          colors: ["#1BAAB5"],
//        },
//      };
 
//      {
//        statement &&
//          statement.map((statementItem: any, index: any) => {
//            const { fields = {} } = statementItem;
//            return (
//              series = [
//                {
//                  name: "Orders (AED)",
//                  data: [""+fields?.Jan+"", ""+fields?.Feb+"", ""+fields?.Mar+""],
//                  fill: {
//                    colors: ["#606C74"],
//                  },
//                },
//              ]
//            );
//      });
//    }
 
//  }
//    else if (currentQuarter > 3 && currentQuarter <= 6) {
//    options = {
 
//      // labels: ["10", "20", "30", "40"],
//      chart: {
//        id: "ApexChartProps",
//        foreColor: theme.palette.grey[700],
//        toolbar: {
//          show: false,
//        },
 
//      },
//      plotOptions: {
//        bar: {
//          horizontal: true,
//          barHeight: "40%",
 
//          dataLabels: {
//            position: "top",
 
//          },
//        },
 
//      },
 
//      dataLabels: {
//        enabled: false
//      },
 
//      xaxis: {
//        categories: ["Apr", "May", "Jun"],
//        position: "bottom",
//        labels: {
//          show: true,
//          style: {
//            colors: ["#606C74"],
//            fontSize: "13px",
//          },
//        },
//      },
//      fill: {
//        colors: ["#1BAAB5"],
//      },
//    };
//    {
//      statement &&
//        statement.map((statementItem: any, index: any) => {
//          const { fields = {} } = statementItem;
//          return (
//            series = [
//              {
//                name: "Orders (AED)",
//                data: [""+fields?.Apr+"", ""+fields?.May+"", ""+fields?.Jun+""],
//                fill: {
//                  colors: ["#606C74"],
//                },
//              },
//            ]
//          );
//    });
//  }
//  }
//  else if (currentQuarter > 6 && currentQuarter <= 9) {
//    options = {
 
//      // labels: ["10", "20", "30", "40"],
//      chart: {
//        id: "ApexChartProps",
//        foreColor: theme.palette.grey[700],
//        toolbar: {
//          show: false,
//        },
 
//      },
//      plotOptions: {
//        bar: {
//          horizontal: true,
//          barHeight: "40%",
 
//          dataLabels: {
//            position: "top",
 
//          },
//        },
 
//      },
 
//      dataLabels: {
//        enabled: false
//      },
 
//      xaxis: {
//        categories: ["Jul", "Aug", "Sep"],
//        position: "bottom",
//        labels: {
//          show: true,
//          style: {
//            colors: ["#606C74"],
//            fontSize: "13px",
//          },
//        },
//      },
//      fill: {
//        colors: ["#1BAAB5"],
//      },
//    };
//    {
//      statement &&
//        statement.map((statementItem: any, index: any) => {
//          const { fields = {} } = statementItem;
//          return (
//            series = [
//              {
//                name: "Orders (AED)",
//                data: [""+fields?.Jul+"", ""+fields?.Aug+"", ""+fields?.Sep+""],
//                fill: {
//                  colors: ["#606C74"],
//                },
//              },
//            ]
//          );
//    });
//  }
//  }
//  else {
//    options = {
 
//      // labels: ["10", "20", "30", "40"],
//      chart: {
//        id: "ApexChartProps",
//        foreColor: theme.palette.grey[700],
//        toolbar: {
//          show: false,
//        },
 
//      },
//      plotOptions: {
//        bar: {
//          horizontal: true,
//          barHeight: "40%",
 
//          dataLabels: {
//            position: "top",
 
//          },
//        },
 
//      },
 
//      dataLabels: {
//        enabled: false
//      },
 
//      xaxis: {
//        categories: ["Oct", "Nov", "Dec"],
//        position: "bottom",
//        labels: {
//          show: true,
//          style: {
//            colors: ["#606C74"],
//            fontSize: "13px",
//          },
//        },
//      },
//      fill: {
//        colors: ["#1BAAB5"],
//      },
//    };
//    {
//      statement &&
//        statement.map((statementItem: any, index: any) => {
//          const { fields = {} } = statementItem;
//          return (
//            series = [
//              {
//                name: "Orders (AED)",
//                data: [""+fields?.Oct+"", ""+fields?.Nov+"", ""+fields?.Dec+""],
//                fill: {
//                  colors: ["#606C74"],
//                },
//              },
//            ]
//          );
//    });
//  }
//  }
 
const options:ApexOptions = {
 
     labels: ["10", "20", "30", "40"],
    chart: {
      id: "ApexChartProps",
      foreColor: theme.palette.grey[700],
      toolbar: {
        show: false,
      },

    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "40%",

        dataLabels: {
          position: "top",

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
      colors: ["green"],
    },
  };

const series = [
                 {
                   name: "NewWay",
                //    data: [""+fields?.Oct+"", ""+fields?.Nov+"", ""+fields?.Dec+""],
                data:["40", "24", "15"],
                   fill: {
                     colors: ["#606C74"],
                   },
                 },
               ]
 
 return (
   <>
     {/* <Grid item xs={6}>
      <Typography className={classes.axisText}>X-axis are in 1000 </Typography></Grid>  */}
     <ReactApexChart
       options={options}
       series={series}
       type="bar"
       height={186}
       padding="3px"
       width={650}
       fontSize="12px"
       color="#606C74"
 
       className={classes.generalOver}
     />
   </>
 );
 };

export default NewBarChart;