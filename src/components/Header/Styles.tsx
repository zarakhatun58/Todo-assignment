
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  Header: {
    padding: "15px",
  },
  HeaderText: {
    color: "white",
    fontSize: "16px",
    textAlign:"center",
  },
lineText:{
    width:"95%",
    alignItems:"center",
    textAlign:"center",
    margin:"auto",
    marginLeft:"30px",
    color:"#E1E1E1",   
},

secLine:{
    width:"95%",
    alignItems:"center",
    textAlign:"center",
    color:"#E1E1E1",   
    margin:"auto",
     marginBottom:"30px",
     marginLeft:"43px",
},

invoiceText:{
   fontSize:"16px",
fontWeight:"600",
color:"#606C74",
marginBottom:"7px",
},
 
nameText:{
    fontSize:"13px",
    fontWeight:"300",
    color:"#606C74",
    "& span":{
fontWeight:"600",
fontSize:"12px",
width:"136px",
display:"inline-block",

    },
},

accountField:{
    textAlign:"end",
},

TabHeader: {
    minHeight: "35px",
  },
  TabTitle: {
    minHeight: "unset !important",
    padding: "5px 16px !important",
    color: '#1BAAB5 !important',
    textTransform:"none",
  },
  body: {
    fontSize: "14px",
    textAlign: "center",
    margin: "0",
    padding: "0",
  },
  headerText: {
    color: "#222222",
    fontSize: "14px",
    textAlign: "center",
    fontWeight:"500",
  },
  table: {
    fontSize: "14px",
     marginLeft: "30px",
    padding: "0",
    color: "rgb(63, 143, 223)",
    textAlign: "center",
    width: "calc(100% - 30px)",
  },
  textAll: {
    color: "rgb(63, 143, 223)",
    fontSize: "14px",
    paddingRight: "0px",
    textAlign: "center",
  },
  Cell: {
    color: "rgb(63, 143, 223)",
    fontSize: "14px",
    margin: "0",
    padding: "0",
    textAlign: "center",
  },

  tableRow: {
    backgroundColor: "#F2F6F8 !important",
    color: "#004C75 !important",
    fontSize: "14px !important",
    margin: "0",
    padding: "3px 6px !important",
    textAlign: "left",
  },
  TableBody: {
    padding: "6px !important",
    fontSize: "14px !important",
  },
  TableCell: {
    padding: "6px ",
    fontSize: "14px ",
    opacity: 0.8,
  },


});

