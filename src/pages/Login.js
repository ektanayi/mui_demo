import React from 'react'
import './Login.css';
import background from '../images/login.jpeg';
import {Box,Button,TextField,Typography} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div style={{backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",     
    height:"680px" 
   
}}>
<Box
 display="flex"
 position={"absolute"}
 top={'240px'}
 right={'135px'}
 flexDirection={"column"}
  maxWidth={350}
  maxHeight={400}
  padding={5}
  borderRadius={1}
  backgroundColor="white"
 boxShadow={"5px 5px 10px #ccc"}

 sx={{  
   "hover":{
     boxShadow:"10px 10px 20px #ccc",
   },
 }}
>

     <TextField 
       margin="normal"
       type={"email"}
       variant="outlined"
       label="Email id"
       style={{
        maxWidth: '350px',
        border:'1px solid lightgray'
     
 }}
       />
       <TextField 
           margin="normal"
           type={"password"}
           variant="outlined"
           label="password"
           style={{
            maxWidth: '350px',
            border:'1px solid lightgray'
           
          }}/>
          <Link href="#" underline="none" className='link'>Forgot Password ?</Link>

          <Button component={Link} to="/home"
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

            <Typography variant='body2' marginTop={2} textAlign="center">By registering, I acccept <strong>the terms of use</strong> and <strong>confidentiality Policy</strong></Typography>


</Box>



  </div>
  )
}

export default Login