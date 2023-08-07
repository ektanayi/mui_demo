import React from 'react';
import './Login.css';
import Grid from '@mui/material/Grid'; 
import background from '../images/ic_Vector.svg';
import loginImg from '../images/ic_Business.svg';
import logo from '../images/ic_itpa_logo.svg';
import {Box,Button,TextField,Typography} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';

import { Link } from 'react-router-dom';

const Login = () => {

  return (
    <>
   <div style={{backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",          
    }}>
 <Grid container>

      <Grid xs={8} md={8}>
        <img src={loginImg} className='login_svg' alt='...'/>
      </Grid>

      <Grid xs={4} md={4}>
        <Box textAlign="center">
         <img src={logo} alt="..."  marginTop= {5} margin={2} className="logo" /> 
         <Typography variant='h4' margin={2} fontWeight="700">Welcome Back</Typography>
        </Box>
      
        <Box 
        display="flex"
        flexDirection={"column"}
         maxWidth={380}
         padding={5}
         margin={3}
        borderRadius={1}
        backgroundColor="white"
        boxShadow={"5px 5px 10px #ccc"}
        sx={{  
          "hover":{
            boxShadow:"10px 10px 20px #ccc",
          },
        }}
      >
        <InputLabel htmlFor="component-simple" sx={{fontWeight:'800',color:'black'}}>Email Address</InputLabel>
       <TextField 
       margin="normal"
       type={"email"}
       variant="outlined"
       style={{
        maxWidth: '350px',
        height:'50px'
 }}
       />
       <InputLabel htmlFor="component-simple" sx={{fontWeight:'800',color:'black'}}>Password</InputLabel>
          <TextField 
           margin="normal"
           type={"password"}
           variant="outlined"
           style={{
            maxWidth: '350px',
            height:'50px'
          }}/>
          <Link href="#" underline="none" className='link'>Forgot Password ?</Link>

          <Button component={Link} to="/"
           margin="normal"
          variant="contained"
          size="large"
          color="warning"
          style={{
            maxWidth: '350px',
            height:'50px'
          }}>
            Sign in
            </Button>

            <Typography variant='p' marginTop={2} textAlign="center">By registering, I acccept <strong>the terms of use</strong> and <strong>confidentiality Policy</strong></Typography>
          </Box>
      </Grid>
</Grid>
      </div>
      
      </>
  )
}

export default Login