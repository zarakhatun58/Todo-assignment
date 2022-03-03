import React from 'react';
import { useStyles } from './Styles';
import { Grid } from '@mui/material';
import DaubleChart from '../Charts/BarCHarts/DaubleChart/index';
import NewChart from '../Charts/BarCHarts/NewChart/index';
import NewBarChart from '../Charts/BarCHarts/NewBarChart/index';
import RoundChart from '../Charts/DonutCHarts/RoundChart';
import ColumChart from './../Charts/BarCHarts/ColumChart/index';
import HalpChart from './../Charts/DonutCHarts/RoundChart/HalpChart/index';
import GlobeChart from '../Charts/DonutCHarts/GlobeChart';
import RadiusChartBar from './../Charts/BarCHarts/RadiusChartBar/index';
import StraightChart from './../Charts/LinesCharts/StraightChart/index';

const Home = () => {
    const classes=useStyles();
    return (
        <Grid container spacing={2}>
            <Grid xs={4}><DaubleChart/> </Grid> 
            <Grid xs={4}><NewBarChart/> </Grid> 
            <Grid xs={4}><NewChart/> </Grid> 
            <Grid xs={4}><RoundChart/> </Grid> 
            <Grid xs={4}><ColumChart/> </Grid> 
            <Grid xs={4}><HalpChart/> </Grid> 
            <Grid xs={4}><GlobeChart/> </Grid> 
            <Grid xs={4}> <RadiusChartBar/></Grid> 
            <Grid xs={4}><StraightChart/> </Grid> 
        </Grid>
        
    );
};

export default Home;