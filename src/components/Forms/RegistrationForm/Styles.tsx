
import { makeStyles,withStyles } from '@mui/styles';
import StepConnector from '@material-ui/core/StepConnector';

const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: "20px",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop:'20px',
      paddingBottom:'20px'
    },
    avatar: {
      margin: "20px",
      backgroundColor: '#1f2d40',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: "20px",
    },
    submit: {
      margin: "20px",
    },
  }));
  export default useStyles;
  
  export const useStylesSidebarFooter = makeStyles(theme => ({
    root: {
      padding: "20px",
    },
    button: {
      margin: "20px",
    },
  }));
  
  export const useStylesAddText = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: "20px",      
      },
    },
  }));
  
  export const useStylesTestForm = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: "20px",
    },
    instructions: {
      marginTop: "20px",
      marginBottom: "20px",
    },
  }));
  export const QontoConnector = withStyles({
      alternativeLabel: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
      },
      active: {
        '& $line': {
          borderColor: '#784af4',
        },
      },
      completed: {
        '& $line': {
          borderColor: '#784af4',
        },
      },
      line: {
        borderColor: '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
      },
  })(StepConnector);
  
//   export const useStylesTestModel = makeStyles(theme => ({
//     appBar: {
//         position: 'relative',
//       },
//       title: {
//         marginLeft: theme.spacing(2),
//         flex: 1,
//         flexDirection: 'rowReverse'
//       },
//       paper: {
//         position: 'absolute',
//         width: 550,
//         backgroundColor: theme.palette.background.paper,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//       },
//     }));