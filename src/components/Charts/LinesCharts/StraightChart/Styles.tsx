import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles({
    Title: {
      display: "flex",
      justifyContent: "space-between",
      // padding: " 8px 10px",
      alignItems: "flex-start",
      paddingBottom: "0",
      fontFamily: " 'DM Sans', sans-serif!important",
    },
  
    perText: {
      fontFamily: " 'DM Sans', sans-serif!important",
      fontSize: "14px",

      fontWeight:"600",
      marginBottom:"4px"
    },
    axisText: {
      position: "absolute",
      right: "10px",
      color: "rgb(0 0 0 / 87%)",
      fontSize: "12px",
      top: "6px",
    },
    overAllAxis: {
      position: "absolute",
      right: "10px",
      color: "rgb(0 0 0 / 87%)",
      fontSize: "12px",
      top: "11px",
    },
  
    generalOver: {
      overflow: "hidden",
      margin: "auto",
    },
  
    apexchartsapexchartxexample: {
      margin: "auto",
  
    },
    // apexchartsCanvas{
    //   margin:"0"
    // },
  
    indecator:{
      width:"200px",
      textAlign:"center",
      alignItems:"center",
      margin:"auto"
    }
  
  });