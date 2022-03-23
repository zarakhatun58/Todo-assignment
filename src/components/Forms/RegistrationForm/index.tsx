import { Avatar, Container, CssBaseline, Typography, Grid, Button } from '@mui/material';
import React,{useState} from 'react';
import useStyles from './Styles';
import  MenuItem  from '@mui/material/MenuItem';
import { ValidatorForm, TextValidator, SelectValidator} from 'react-material-ui-form-validator';
import {SIGN_UP_TEXT, EMAIL_ADDRESS_TEXT, VAIDATE_TEXT,
        EMAIL_ERROR, PASSWORD_TEXT, FIRST_NAME_TEXT, LAST_NAME_TEXT,
        SELECT_LANGUAGE_TEXT, GERMAN_TEXT, FRENCH_TEXT, PORTUGUESE_TEXT, SET_USER_DATA} from '../Constant';



interface IFormInput {
    props: any;
    mobileNumber:number;
    email:String;
    text:String;
    number:number;
      
  }
  export const RegistrationForm = React.forwardRef((props, ref) => {
    return (
        <div>
        <a href="https://taqeef.sharepoint.com/:b:/r/sites/OPR/ACModel/Agreements/ALN151A0002.pdf"></a>
    </div>
    );
  });



// const RegistrationForm = ({props:any}) => {
//     const classes=useStyles();
//     const [formData, setFormdata]=useState({
//         firstName:{value:"", error:false},
//         lastName:{value:"", error:false},
//         foreignLanguage:{value:"german", error:false},
//         email:{value:"", error:false},
//         password:{value:"", error:false}  	
//     });
//     const handleFieldChange =({e:any})=>{  	
//         e.preventDefault();
//         let errorFlag=false;;
//         const { name} = e.target;
//         if(e.target.value ===""){
//             errorFlag=true;
//         }
//         setFormdata({...formData, [name]:{value:e.target.value.trim(),error: errorFlag}});
//     }
    
//     const handleFormSubmit =(e)=>{
//         e.preventDefault();
//         var promise = new Promise(function(resolve, reject) {		
//               resolve(props.userRegister(formData));		
//           });
  
//       promise.then(function () {			
//               props.history.push('/login')
//           }).catch(function () { 
//               console.log('Some error has occured'); 
//           });  	
//     } 
    
//     return (
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <div className={classes.paper}>
//           {/* <Avatar className={classes.avatar}>
//             <LockOutlinedIcon />
//           </Avatar> */}
//           <Typography component="h1" variant="h5">
//             {SIGN_UP_TEXT}
//           </Typography>
//           <ValidatorForm  noValidate autoComplete="off" onSubmit={handleFormSubmit} className={classes.form} name="registerForm">
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextValidator
//                   autoComplete="fname"
//                   name="firstName"
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label={FIRST_NAME_TEXT}
//                   value={formData.firstName.value || "" }
//                   error = {formData.firstName.error || false }
//                   validators={['required']}
//                   errorMessages={[VAIDATE_TEXT]}
//                   onChange={handleFieldChange}
//                   autoFocus                
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextValidator
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="lastName"
//                   label={LAST_NAME_TEXT}
//                   name="lastName"
//                   autoComplete="lname"
//                   value={formData.lastName.value || ""}
//                   error = {formData.lastName.error || false }
//                   validators={['required']}
//                   errorMessages={[VAIDATE_TEXT]}
//                   onChange={handleFieldChange}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                   <SelectValidator
//                       variant="outlined"
//                       required
//                       fullWidth
//                       select
//                       id="foreignLanguage"	                
//                       label={SELECT_LANGUAGE_TEXT}
//                       name="foreignLanguage"
//                       value={formData.foreignLanguage.value || "german"}
//                       error = {formData.foreignLanguage.error || false }
//                       onChange={handleFieldChange}
//                     >
//                         <MenuItem value={'german'}>{GERMAN_TEXT}</MenuItem>
//                         <MenuItem value={'french'}>{FRENCH_TEXT} </MenuItem>
//                         <MenuItem value={'portuguese'}>{PORTUGUESE_TEXT} </MenuItem>
//                      </SelectValidator>
//                  </Grid>
//               <Grid item xs={12}>
//                 <TextValidator
//                   variant="outlined"                
//                   fullWidth
//                   id="email"
//                   label={EMAIL_ADDRESS_TEXT}
//                   name="email"
//                   autoComplete="email"
//                   value={formData.email.value || ""}
//                   validators={['required', 'isEmail']}
//                   errorMessages={[VAIDATE_TEXT, EMAIL_ERROR]}
//                   error = {formData.email.error || false }
//                   onChange={handleFieldChange}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextValidator
//                   variant="outlined"
//                   required
//                   fullWidth
//                   name="password"
//                   label={PASSWORD_TEXT}
//                   type="password"
//                   id="password"
//                   autoComplete="current-password"
//                   value={formData.password.value || ""}
//                   validators={['required']}
//                   errorMessages={[VAIDATE_TEXT]}
//                   error = {formData.password.error || false }
//                   onChange={handleFieldChange}
//                 />
//               </Grid>            
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               {SIGN_UP_TEXT}
//             </Button>          
//           </ValidatorForm>
//         </div>      
//       </Container>
//     );
//   }
  
  
// //   const mapDispachToProps  = ({dispatch:any}) => {
// //       return {
// //           userRegister: (formdata:any) => {
// //               dispatch({ type: SET_USER_DATA, data: formdata })
// //           }		
// //       }
// //   }
//  // export default connect(null, mapDispachToProps)(RegistrationForm);

//  export default RegistrationForm;