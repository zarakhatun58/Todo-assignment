import React, { useState } from 'react';
import {  NestedValue, SubmitHandler, useForm, useFormContext } from 'react-hook-form';

import { Input, Button, Grid, Select, Typography, Box, FormControl, TextField, Autocomplete, Alert } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import { useStyles } from './Styles';
// import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';

type Option = {
  label: string;
  value: string;
};

const options = [
  { label: 'Forgot username',value: 'username' },
  { label: 'Forgot password', value: 'Password'},
];

enum GenderEnum {
  UserName = "UserName",
  Password = "Password",
  other = "other"
}

interface IFormInput {
 
  mobileNumber:number;
  email:String;
  text:String;
  number:number;
  gender: GenderEnum;
  iceCreamType: {label: string; value: string };
  options:{label: string; value: string } ;
  autocomplete: NestedValue<Option[]>;
  select: NestedValue<number[]>;
  user: any[];
  
}

const ImageUpload = () => {
const classes=useStyles();
const [inputVal, setInputVal] = useState('');
// const [user, setUser] = useState(null);
  const { register,control,reset, handleSubmit ,formState: { errors } } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
 
  useEffect(() => {
    // reset form with user data
    reset();
}, [inputVal]);

  return (
    <Grid
    container
    spacing={0} >

    <Grid item xs={12} className={classes.WelcomeRightContent}>
      <Typography component="div" className={classes.loginContent}>

        <Box className={classes.loginBackPage}>

          <Grid
            className={classes.firstHalf}>
            <Grid style={{ display: "flex", justifyContent: "center" }}>
              <Typography className={classes.textHeader}>
                Can&apos;t Sign into your Account?
              </Typography>

              <Grid className="alert alert-warning alert-dismissible" role="alert"
                style={{ position: "absolute", right: "-10px" }}>
                {/* <Link to="/">
                  <Button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"

                  >
                    <span aria-hidden="true" className={classes.close}> <CloseIcon /></span>
                  </Button>
                </Link> */}


              </Grid>
            </Grid>

            <Grid>

            </Grid>

            <Typography style={{ marginBottom: "0px", fontSize: "14px", color: "#606C74" }}>If you cant sign into your account, Follow the instructions for help getting back into your account.</Typography>

          </Grid>


<FormControl className={classes.form} onSubmit={handleSubmit(onSubmit)}>


            <Autocomplete
              disablePortal
              id="combo-box-demo"
              size="small"
              options={options}
              sx={{ width: "93%", paddingLeft: "1%" }}
              renderInput={(params) => <TextField {...params} label="Select the issue" />}
            />

            <Grid item xs={12}>
              <Typography className={classes.howText}>How can you contact?</Typography>
            </Grid>
            <Grid style={{ marginLeft: "0", marginTop: "16px" }}>
              <Grid container spacing={2} item xs={12} style={{ justifyContent: "space-evenly", width: "100%" }}>


                <Grid style={{ width: "45%" }} >

                  <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { width: "100%" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="mobile-number"
                      label="Enter Your Mobile Number"
                      type="number"
                      size="small"
                      autoComplete="number"
                      {...register("mobileNumber", {
                        required: true
                      }) }                      
                      onChange={e => setInputVal(e.target.value)}
                    />
                      {errors.mobileNumber && "mobile Number is required"}
                  </Box>

                </Grid>
                <Grid style={{ width: "45%" }}>

                  <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { width: "100%" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-password-input"
                      label="Enter your Email"
                      size="small"
                      type="email"
                      {...register("email", {
                        required: true
                      })}
                      autoComplete="current-password"
                     
                      onChange={e => setInputVal(e.target.value)}
                    />
                     {errors.email && "email is required"}
                  </Box>
                </Grid>

              </Grid>

              <Grid container spacing={2} item xs={12} style={{ justifyContent: "space-evenly", width: "100%", marginTop: "16px" }}>


                <Grid style={{ width: "45%" }} >

                  <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { width: "100%" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="name"
                      label="Enter Dealer Name"
                      type="text"
                      size="small"
                      {...register("text", {
                        required: true
                      })}                     
                      onChange={e => setInputVal(e.target.value)}
                    />
                    {errors.text && "text is required"}
                  </Box>

                </Grid>
                <Grid style={{ width: "45%" }}>

                  <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { width: "100%" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="dealer-code"
                      label="Enter Dealer Code"
                      type="number"
                      size="small"
                      {...register("number", {
                        required: true
                      })}
                      onChange={e => setInputVal(e.target.value)}
                    />
                    {errors.number && "number is required"}
                  </Box>
                </Grid>

              </Grid>
            </Grid>
            <Grid container spacing={2} item xs={12} style={{ marginTop: "15px", marginLeft: "1%" }}>
              <TextField
                label="Submit Your Request"
                id="outlined-start-adornment"
                sx={{ width: '91%' }}
                onChange={e => setInputVal(e.target.value)}
                required
                size="small"
              />
            </Grid>

            <Grid style={{ marginLeft: "1%" }}>
              <Typography style={{ textAlign: "left", marginTop: "30px " }}> Add attachments or screenshots</Typography>
              <Grid style={{ textAlign: "left", marginLeft: "0%" }}>
                {/* <FileUploadIcon/>  */}

                <form>
                <label htmlFor="upload-photo">
                <input type="file" name="name" multiple /><br /><br />
                  <Button color="primary" variant="contained" component="span">
                    <UploadIcon />
                  </Button>
                  </label>
                </form>




              </Grid>
            </Grid>

            <Grid>
           
              <Typography variant="h6" className={classes.SignInButton}>           
                <Button id="modal" variant="contained"  >Submit</Button>
              </Typography>

            </Grid>
          </FormControl>
        
        {/* <Alert severity="warning"> Error</Alert> */}
         
        </Box>
      </Typography>

    </Grid>
  </Grid>
  );
};

export default ImageUpload;


