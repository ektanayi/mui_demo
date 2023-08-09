import React from 'react'
import Paper from '@mui/material/Paper';
import {Typography } from '@mui/material';


const Item1 = (props) => {
  return (
    <Paper elevation={3} align="center">
    <Typography variant='subtitle' className='boxtxt'>{props.title}</Typography>
    <Typography variant='h5' fontWeight={600}  p={1}>{props.text}</Typography>
   </Paper>
  )
}

export default Item1