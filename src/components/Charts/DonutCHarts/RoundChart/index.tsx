/* eslint-disable */
import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
// import Chart from "react-google-charts";

import { useStyles } from './Styles';
import { Pie } from 'recharts';
import { PieChart } from 'recharts';
import { Label } from 'recharts';
import { Cell } from 'recharts';


// const pieData = [
//   ["Task", "AED per month"],
//   ["Jan", 223],
//   ["Feb", 132],
//   ["Mar", 121],
// ];

// const pieOptions = {
//   //title: "Outstanding Balance",
//   pieHole: 0.7,
//   series: [223, 132, 121],
//   labels: ["Jan", "Feb", "Mar"],
//   // color: ["#0086b3", "#ffa31a", "#ff3333"],
//   color: ["#1BAAB5", "#606C74", "#ABB1B5"],
//   plotOptions: {
//     pie: {
//       expandOnClick: false,
//       donut: {
//         show: true,
//         total: {
//           show: true,
//           showAlways: true,
//           label: "AED",
//           fontSize: "24px",
//           color: "black",
//         },
//       },
//     },
//   },
// };
const data = [
  { name: "Group A", value: 7500 },
  { name: "Group B", value: 3750 },
  { name: "Group C", value: 3000 },
  { name: "Group D", value: 2500 },
  { name: "Group E", value: 8250 },
];
const COLORS = ["#913B32", "#1BAAB5", "#8DB6CD", "#A9A9A9", "#D1A984" ];
const RoundChart = () => {
  const classes = useStyles();

  return (
    
    <Grid className={classes.Header} >
       <Typography component="div" className={classes.HeaderText}>
   Most Important Chart
  </Typography>
<Typography component="p" className={classes.summery}>Summery will be uploaded</Typography>

  <Grid style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
  <Grid> 
      <PieChart width={100} height={210}>
        <Pie
          data={data}
          // cx={50}
          // cy={50}
          innerRadius={5}
          outerRadius={50}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          textAnchor="middle"
        >
          <Label
            value="2450"
            position="center"
            className={classes.secLabel}
          />
          {/* <Label
            value="AED"
            position="centerBottom"
            className={classes.firstLabel}
          /> */}
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      </Grid>
      <Grid>
      <List >
        <ListItem
          className={classes.PriceFirst}
          disablePadding={true}
          disableGutters={true}
        >
            <Typography  component="span"> {`< 30 Days`} </Typography>
          <Typography component="h2">
            {" "}
            <p>7500</p>
          </Typography>
        
        </ListItem>
        <ListItem
          className={classes.PriceSec}
          disablePadding={true}
          disableGutters={true}
        >
           <Typography  component="span"> {` < 30-60 Days`} </Typography>
          <Typography component="h2">
            <p>3750</p>
          </Typography>
         
        </ListItem>
        <ListItem
          className={classes.PriceThird}
          disablePadding={true}
          disableGutters={true}
        >
           <Typography  component="span"> {`< 60-90 Days`} </Typography>
          <Typography component="h2">
          <p>3000</p>
          </Typography>
         
        </ListItem>
        <ListItem
          className={classes.PriceFourth}
          disablePadding={true}
          disableGutters={true}
        >
           <Typography  component="span"> {`< 90-120 Days`} </Typography>
          <Typography component="h2">
             <p>2500</p>
          </Typography>
         
        </ListItem>
        <ListItem
          className={classes.PriceFifth}
          disablePadding={true}
          disableGutters={true}
        >
           <Typography  component="span"> {`> 120 Days`} </Typography>
          <Typography component="h2">
             <p>8250</p>
          </Typography>
         
        </ListItem>
      </List>
      </Grid>



  </Grid>
     
    </Grid>
  );
};

export default RoundChart;