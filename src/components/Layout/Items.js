import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Collapse, Typography } from '@mui/material';
import '../../pages/Home.css';
import Item1data from './Item1data';
import Item1 from './Item1';
import Tab from './Tab';
import Tab2 from './Tab2';


const Items = () => {
  return (
    <>
    
 <Grid container className='itemgrid'>

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
          ml:1,
          p:3,
          width: 250,
          height: 110,
        },
      }}
    >
    
    {
       Item1data.map((val, ind) => {
        return <Item1
          title={val.title} 
          text={val.text}
        />
      })
    }
   </Box>
 
   </Grid>
 

<Grid xs={12} md={12}  mt={2} mb={2}> 
<Typography variant="subtitle" className='first-head'> Recent Searches (10)</Typography>

 </Grid>
<Grid xs={12} md={12}>
  <Tab />
</Grid>


<Grid xs={12} md={12} mt={5} mb={2}>
<Typography variant="subtitle" className='first-head' >Treanding Searches</Typography>

   </Grid>
<Grid xs={12} md={12}>
<Tab2 />
</Grid>
</Grid>


</>
  );
}

export default Items;