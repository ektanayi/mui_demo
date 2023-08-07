import React from 'react'
import Header from '../components/Layout/Header';
import Items from './Items';
import Table from './Table';
import Box from '@mui/material/Box';
import './Home.css';

const Home = () => {


  return (
    <Box
    sx={{
      p: 5,
     mt:1,
     ml:5,
     bgcolor: 'background.paper',
     borderRadius: 1,
    }}
  >

     <Header />
    <Items />
    <Box mt={5}>
    <Table />  
    </Box>
   
   </Box>
   
  )
}

export default Home