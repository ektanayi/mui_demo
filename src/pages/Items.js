import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Collapse, Typography } from '@mui/material';
import './Home.css';
import Stack from '@mui/material/Stack';
import Collaps1 from './Collaps1';
import Collaps2 from './Collaps2';
const Items = () => {
  return (
    <>
    
    <Grid container>

<Grid xs={12} md={12}> 
<Typography  variant="subtitle" className='first-head'>Good Morning ,Pushpavalli</Typography>

 </Grid>
<Grid xs={12} md={12}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        '& > :not(style)': {
          mt: 5,
          mb:4,
          p:2,
          width: 270,
          height: 93,
        },
      }}
    >
    
     <Paper elevation={3} align="center">
      <Typography variant='subtitle' className='boxtxt'>You have downloaded</Typography>
      <Typography variant='h4' fontWeight={800}  p={1}>26</Typography>
     </Paper>
      <Paper elevation={3} align="center" >
      <Typography variant='subtitle' className='boxtxt'>Total List of Company</Typography>
      <Typography variant='h4' fontWeight={800} p={1}>TBD</Typography>
      </Paper>
      <Paper elevation={3} align="center">
      <Typography variant='subtitle' className='boxtxt'>Total List of Company</Typography>
      <Typography variant='h4' fontWeight={800}  p={1}>TBD</Typography>
      </Paper>
      <Paper elevation={3} align="center">
      <Typography variant='subtitle' className='boxtxt'>Total List of Company</Typography>
      <Typography variant='h4' fontWeight={800}  p={1}>TBD</Typography>
      </Paper>
   </Box>
 
   </Grid>
 

<Grid xs={12} md={12}  mt={2} mb={2}> 
<Typography variant="subtitle" className='first-head'> Recent Searches (10)</Typography>

 </Grid>
<Grid xs={12} md={12}>
  <Collaps1 />
</Grid>


<Grid xs={12} md={12} mt={5} mb={2}>
<Typography variant="subtitle" className='first-head' >Treanding Searches</Typography>

   </Grid>
<Grid xs={12} md={12}>
     <Collaps2 />
</Grid>
</Grid>


</>
  );
}

export default Items;