
import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles({

    
html: {
    boxSizing: "border-box",
    },
   "& ::before,::after": {
    boxSizing:"inherit",
    },
   "#root,body" :{
    minHeight: "100vh",
    },

    body:{
    margin:" 0",
    },

   "#root,todoListApp": {
    display: "flex",
    flexFlow: "column nowrap",
    },

    "#root": {
    alignItems: "center",
    width:" 100%",
    },

    todoListApp: {
    paddingTop: "32px",
    width: "100%",
    maxWidth: "480px",
    },

    "todoFormInput,todoItem" :{
    border: "1px solid #ececec",
    },

    "todoForm,input": {
    padding:" 0 14px",
    // width: "100%",
    height: "48px",
    transition: ".25s border ease-in-out",
    },

    "todoForm,input:focus" :{
    outline:" 0",
    border: "1px solid #3498db",
    },
    /* Todo list styles */
    "todoList,ul":{
    padding:" 0",
    margin:" 0",
    },

    "todoList &li ":{
    listStyleType: "none",
    },
    /* Todo item styles */
    todoItem: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems:" center",
    padding: "8px",
    },

   " todoForm ,todoList, ul &todoItem": {
    borderTop: "0",
    },
    
    todoItemInputWrapper :{
    flexGrow: "1",
    padding: "0 16px",
    },

    "todoItem &input":{
    width: "100%",
    border:" 0",
    borderBottom: "1px solid transparent",
    transition: ".25s border-bottom ease-in-out",
    },

    "todoItem & input:focus" :{
    outline: "0",
    borderBottom: "1px solid #3498db",
    },
    
   " todoItem & todo-input-error":{
    borderBottom: "1px solid #e74c3c",
    },

    "todo-item & span" :{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width:" 32px",
    height:" 32px",
    borderRadius:" 50%",
    border: "1px solid #ececec",
    transition: ".25s all ease-in-out",
    },


   "todo-item-unchecked:hover": {
    background: "hsla(168, 76%, 42%, .25)",
    border: "1px solid hsl(168, 76%, 42%, .25)",
    },

    todoItemChecked :{
    color:"#fff",
    background:" #1abc9c",
    border:"1px solid #1abc9c",
    },

    itemRemove :{
    display: "flex",
    paddingLeft: "8px",
    paddingRight:"8px",
    fontSize: "28px",
    cursor:" pointer",
    lineHeight: "1",
    color:"#ececec",
    transition: ".25s color ease-in-out",
    },

    "itemRemove:hover":{
    color: "#111",
    },
form:{
    width:"400px",
    backgroundColor:"purple",
    margin:"auto",
    color:"aqua",
}

})

