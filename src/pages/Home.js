import React from 'react'
import Table from '../components/Layout/Table';
import Box from '@mui/material/Box';
import Items from '../components/Layout/Items';
import Layout2 from '../components/Layout/Layout2';


const Home = () => {

  return (

    <Layout2>
      <Box
        sx={{
          p: 5,
          mt: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >

        <Items />
        <Box mt={5}>
          <Table />
        </Box>
      </Box>
    </Layout2>
  )
}

export default Home