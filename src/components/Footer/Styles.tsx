/* eslint-disable */
import { makeStyles } from "@mui/styles";

// import { makeStyles } from "@mui/material";

export const useStyles = makeStyles({
  Header: {
    background: "#f4f4f4",
  },
  HeaderText: {
    color: "#797676",
    fontSize: "10px",
  },
  FooterHeader: {
    display: "flex",
    background: "#f4f4f4",
    borderRadius: "5px",
    justifyContent:"space-between",

    "& li:first-child": {
      width: "30%",
      float: "left",
    },
    "& li:last-child": {
      width: "30%",
      float: "left",
    },
    "& li": {
      display: "block",
      width: "30%",
      float: "left",
      "& ul": {
        marginLeft: "1px",
      },
      "& ul li": {
        listStyle: "disc",
        color: "#9e9e9e",
        "&:hover": {
          color: "#0277bd",
        },
        display: "list-item",
        fontSize: "14px",
        paddingTop: "3px",
        paddingBottom: "3px",
      },
    },
  },
  SocialMedia: {
    alignItems: 'center',
    display: "flex",
    marginLeft: "0 !important",
    width:"186px",
    "& li": {
      listStyle: "none !important",
      paddingLeft: "0 !important",
      paddingRight: "0 !important",
      width: "auto",

    },
  },
  SubFooter: {
    "& li": {
      display: "block",
      paddingLeft: "0px",
      listStyle: "none !important",
      width: "110% !important",
      float: "left !important",
      alignItems: "left",
    },
  },

  SubFooterSec: {
    "& li": {
      display: "block",
      paddingRight: "30px",
      listStyle: "none !important",
      width: "110% !important",
      float: "left !important",
      alignItems: "left",
      textAlign:"right",
    },
  },

  SubFooterFirst: {
    "& li": {
      display: "block",
      paddingLeft: "0px",
      listStyle: "none !important",
      width: "70% !important",
      float: "left !important",
      alignItems: "left",
      color: "#606c74",
      fontSize: "14px",
    },
  },
  Text: {
    fontSize: "14px",
    fontFamily: "sans-serif",

    alignItems: "center",
    color: "#606c7480",
    "&:hover": {
      color: "#0277bd",
    },
  },
  listText: {
    color: "#606c74",
    fontWeight: "bold",
    textAlign:"right",
  },

  TwitterClass: {
    width: "auto !important",
  },
  youtubeClass: {
    
  },
  Copyright: {
    alignItems: "center",
    color: "#9e9e9e",
    textAlign:"center",
    // display: "flex",
    // justifyContent: "space-between",
    padding: " 15px 0",

    borderTop: "1px solid #e4e4e4",
    margin: " 0 15px",
    "& div": {
      fontSize: "12px",
    },
  },
  Policy: {
    display: "flex",
    width: "200px",
    justifyContent: "flex-end",
    "& li": {
      justifyContent: "flex-end !important",
      paddingTop: "0px !important",
      paddingBottom: "0px !important",
    },
  },
  FirstRow: {
    display: "flex !important",
    alignItems: "left",
  },
});
