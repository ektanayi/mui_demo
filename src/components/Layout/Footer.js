import React from 'react';
import { Box, Typography } from '@mui/material';
import {Link} from 'react-router-dom';
import '../../styles/HeaderStyles.css';
const Footer = () => {
  return (
    <>
       <Box sx={{textAlign:'center',bgcolor:'#1A1A19',color:'white', p:2}}>
             <Typography variant='h5' sx={{"@media (max-width:600px)":{fontSize:'1rem'}}}>
             <Box sx={{display:{xs: 'none', sm: 'block'}}}>
              <ul className="navigation-menu">
                <li>
                  <Link to={''}>Contact us</Link>
                </li>
                <li>
                  <Link to={''}>Security</Link>
                </li>
                <li>
                  <Link to={''}>Anti-spam</Link>
                </li>
                <li>
                  <Link to={''}>Policy</Link>
                </li>
                <li>
                  <Link to={''}>Help</Link>
                </li>
                <li>
                  <Link to={''}>En</Link>
                </li>
              </ul>
            </Box>
            </Typography>
       </Box>
    </>
  )
}

export default Footer
