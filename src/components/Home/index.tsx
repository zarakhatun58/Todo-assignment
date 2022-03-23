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
import PieChartFirst from './../Charts/DonutCHarts/PieChartFirst/index';
import AllOverSweap from './../Charts/BarCHarts/AllOverSweap/index';
import ImageUpload from './../ImageUpload/index';
import Print from '../Print';
import RadialCharts from './../Charts/DonutCHarts/RadialCharts/index';
import SemiCircle from './../Charts/DonutCHarts/SemiCircle/index';
import NewLineChart from '../Charts/BarCHarts/NewLineChart';
import DynamicCharts from '../Charts/BarCHarts/DynamicCharts';
import GaugeChart from '../Charts/GaugeChart';
import SpeedGauge from '../Charts/BarCHarts/SpeedGauge';
import RadialSpeed from '../Charts/RadialSpeed';


const Home = () => {
    const classes=useStyles();
    return (
        <> 
        <Grid container spacing={2}>
            <Grid  item xs={4}><DaubleChart/> </Grid> 
            <Grid  item xs={4}><NewBarChart/> </Grid> 
            <Grid  item xs={4}><NewChart/> </Grid> 
            <Grid item xs={4}><RoundChart/> </Grid> 
            <Grid item xs={4}><ColumChart/> </Grid> 
            <Grid item xs={4}><HalpChart/> </Grid> 
            <Grid item xs={4}><GlobeChart/> </Grid> 
            <Grid item xs={4}> <RadiusChartBar/></Grid> 
            <Grid item xs={4}><StraightChart/> </Grid> 
            <Grid item xs={4}><PieChartFirst/> </Grid> 
            <Grid item xs={4}><AllOverSweap/> </Grid> 
            <Grid item xs={4}><ImageUpload/> </Grid> 
            <Grid item xs={4}><Print/> </Grid> 
            <Grid item xs={4}><RadialCharts/> </Grid> 
            <Grid item xs={4}><SemiCircle/> </Grid> 
            <Grid item xs={4}><NewLineChart/> </Grid> 
            <Grid item xs={4}><DynamicCharts/> </Grid> 
            <Grid item xs={4}><GaugeChart/> </Grid> 
            <Grid item xs={6}><SpeedGauge/> </Grid> 
            <Grid item xs={6}><RadialSpeed/> </Grid> 
        </Grid>
        </>
    );
};

export default Home;