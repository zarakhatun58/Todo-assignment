import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({

    Header: {
       padding: "10px",
      //  display:"flex",
      //  justifyContent:"space-around",
      // paddingRight:"16px",
      // paddingLeft:"16px",
    },
    HeaderText: {
      color: "#004C75",
      fontSize: "16px",
     
    },
    firstLabel: {
      fontSize: "10px",
      paddingBottom: "10px",
    },
    secLabel: {
      fontSize: "18px",
      paddingTop: "10px",
      marginLeft: "10px",
    },
  
    
    PriceList: {
      height:"200px",
      // width:"200px",
      paddingTop:"52px",
     
    //  display:"flex",
      "& li": {
        // flexGrow: 1,
        // display: "inline-grid",
         justifyContent: "end",
        // padding: "10px 0px",
        // paddingTop: "-50px",
        marginBottom:"10px",
      },
    },
    PriceFirst: {
      background: "#e7f6f8",
      margin: "0",
      "& h2": {
        fontSize: "15px",
        color: "#1BAAB5",
        // lineHeight: 1,
        // marginBottom: "5px",
        "& p": {
          // fontSize: "18px",
          // verticalAlign: "middle",
          // display: "inline-block",
          background: "#e7f6f8",
          padding: "3px 3px",
          margin:" 0",
          marginLeft: "7px",
          fontSize: "14px",
      borderRadius: "3px",
        },
      },
      "& span": {
        fontSize: "11px",
        color: "#ABB1B5",
        // background: "#E7F5F6",
        padding: "5px 2px",
        textAlign: "left",
        fontWeight:"bold",
        // borderRadius: "30px",
        // marginTop: "-15px",
        width:"81px",
        paddingRight:"0",
      },
    },
    PriceSec: {
      background: "#F4F8FA",
      margin: "0",
      "& h2": {
        fontSize: "15px",
        color: "#606C74",
        // lineHeight: 1,
        marginBottom: "5px",
        "& p": {
         // fontSize: "16px",
          // verticalAlign: "middle",
          // display: "inline-block",
          background: "#F4F8FA",
          padding: "3px 3px",
          margin:" 0",
          marginLeft: "7px",
          fontSize: "14px",
          borderRadius: "3px",
        },
      },
      "& span": {
        fontSize: "11px",
        color: "#ABB1B5",
       //  background: "#E8E9EB",
       padding: "5px 2px",
      
       textAlign: "left",
       fontWeight:"bold",
       width:"81px",
       paddingRight: "0px",
      },
    },
    PriceThird: {
      background: "#FDFBF9",
      margin: "0",
      "& h2": {
        fontSize: "15px",
        color: "#913B32",
        // lineHeight: 1,
        // marginBottom: "5px",
        "& p": {
          //fontSize: "18px",
          // verticalAlign: "middle",
          // display: "inline-block",
          color:"#D1A984",
          backgroundColor:"#FDFBF9",
          padding: "3px 3px",
          margin:" 0",
          marginLeft: "7px",
          fontSize: "14px",
      borderRadius: "3px",
        },
      },
      "& span": {
        fontSize: "11px",
        color: "#ABB1B5",
        // background: "#EFE2E0",
        padding: "5px 2px",
        textAlign: "left",
        fontWeight:"bold",
         margin: "0",
         width:"81px",
         paddingRight: "0px",
      },
    },
  
  
    PriceFourth: {
       background: "#F6F6F6",
      "& h2": {
        fontSize: "15px",
        color: "#913B32",
        lineHeight: 1,
        marginBottom: "5px",
        "& p": {
        //  fontSize: "18px",
          // verticalAlign: "middle",
          // display: "inline-block",
          padding: "3px 3px",
          margin:" 0",
          marginLeft: "7px",
          fontSize: "14px",
          borderRadius: "3px",
          backgroundColor:"#F6F6F6",
          color:"#A9A9A9",
         
        },
      },
      "& span": {
        fontSize: "11px",
        color: "#ABB1B5",
        // background: "#EFE2E0",
        padding: "5px 2px",
        textAlign: "left",
        fontWeight:"bold",
        borderRadius: "30px",
        marginTop: "-1px",
        width:"81px",
        paddingRight: "0px",
      },
    },
  
    PriceFifth: {
       background: "#F9F5F4",
      "& h2": {
        fontSize: "15px",
        color: "#913B32",
        lineHeight: 1,
        marginBottom: "5px",
        "& p": {
         // fontSize: "18px",
          // verticalAlign: "middle",
          // display: "inline-block",
  backgroundColor:"#F9F5F4",
  padding: "3px 3px",
  margin:" 0",
  marginLeft: "7px",
  fontSize: "14px",
          borderRadius: "3px",
         color:"#913B32",
        },
      },
      "& span": {
        fontSize: "11px",
        color: "#ABB1B5",
        // background: "#EFE2E0",
        padding: "5px 2px",
        textAlign: "left",
        fontWeight:"bold",
        borderRadius: "30px",
        marginTop: "-1px",
        width:"81px",
        paddingRight: "0px",
      },
    },
  summery:{
    fontSize:" 12px",
      color: "#666666",
      marginBottom: "15px",
  }
  
  
  });
  