import React from 'react';
import { AppBar, useTheme, Typography, Tabs, Tab ,Box } from '@mui/material';
//  import todoIcon from "../../../../Assets/Images/todoIcon.png";
import GlobeChart from './../../DonutCHarts/GlobeChart/index';
import StraightChart from './../../LinesCharts/StraightChart/index';
import SwipeableViews from 'react-swipeable-views';
import { useStyles } from './../../LinesCharts/StraightChart/Styles';


interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>
                    {children}
                </>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const AllOverSweap=()=>{
    const theme = useTheme();
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        <>
            <AppBar position="static" elevation={0} color="transparent">
            <Box className={classes.Title}>
                <Box>
                  <Typography component="h3"  className={classes.perText}>Quarterly performance </Typography>   
                  <Typography style={{color: "#606C74",fontSize: "12px",}}>Total invoiced value in AED</Typography>
                </Box>
               
                <Box sx={{ fontSize: '12px', color: '#606c74', }}> 2022 - Q1 </Box>
            </Box>
                <Tabs
                    value={value}
                    className={classes.indecator}
                    onChange={handleChange}
                    TabIndicatorProps={{
                        style: {
                          backgroundColor: "#3DB7C0"
                         }
                        }}
                    variant="fullWidth"
                    aria-label="full width tabs example">
                 <Tab disableRipple={true} icon={<img alt="Midea" style={{height:'30px'}} src="https://i.ibb.co/g6TCJVh/587865-bigthumbnail.jpg" />} {...a11yProps(2)} />
                     <Tab disableRipple={true} icon={<img alt="Midea" style={{height:'30px'}}  src="https://i.ibb.co/g6TCJVh/587865-bigthumbnail.jpg" />} {...a11yProps(0)} /> 
                    <Tab disableRipple={true} icon={<img alt="Overall" style={{height:'30px'}}  src="https://i.ibb.co/g6TCJVh/587865-bigthumbnail.jpg" />} {...a11yProps(1)} />
                   
                </Tabs>
                
            </AppBar>
            <SwipeableViews
             style={{margin:"auto"}}
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}>
                 {/* <TabPanel value={value} index={0} dir={theme.direction}>
                  <Overall/>
                </TabPanel> */}
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <GlobeChart />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <StraightChart />
                </TabPanel>
               
            </SwipeableViews>
          </>
    );
};

export default AllOverSweap;