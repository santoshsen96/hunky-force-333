import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

import Navbar from '../Components/Navbar'
import "../CSS/Admindashboard.css"
import Adminsidebar from '../Components/AdminSideBar'
import Admindashboard from '../Components/AdminDashboard'


const Admin = () => {
  return (
    
    <Box>
     {/* <Navbar/> */}
      <Flex className='dashboardcont'  justifyContent={"space-evenly"} >
      <Box className='sidebarcont' >
      <Adminsidebar/>
      </Box>
      <Box className='adminpagedashboardbox' >
        <Admindashboard/>
        
      </Box>
    </Flex>
    </Box>
  )
}

export default Admin