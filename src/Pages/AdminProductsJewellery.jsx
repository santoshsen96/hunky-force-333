import { Box, Button, Center, Flex, Stack, useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Adminsidebar from '../Components/AdminSideBar'
//import "../CSS/Admindashboard.css"
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { getProductsjewellery } from '../Redux/AdminProduct/action'
import AdminProductcard from '../Components/AdminProductCard'

export const AdminProductsJewellery = () => {
    const [searchParams]=useSearchParams()
    const dispatch=useDispatch()
    const location = useLocation()
    const {products} = useSelector((store)=>store.AdminProduct)
  
    let obj = {
      params:{
        gender:searchParams.getAll("womens")
      }
  }
  
  useEffect(()=>{
      dispatch(getProductsjewellery(obj))
    },[location.search,products])
  
  const toast=useToast()
  const handleDelete=(id)=>{
     // dispatch(DeleteProductWatch(id))
      return toast({
        title: 'Product Deleted Successfully!!!',
        description: `Total Number Of Products : ${products.length-1} `,
        status: 'success',
        duration: 5000,
        isClosable: true,
        position:'top'
      })
    }
  return (
    <Box>
     
    {/* <Navbar/> */}
    <Flex className='dashboardcont' justifyContent={"space-evenly"} >
    <Box className='sidebarcont' >
    <Adminsidebar/>
    </Box>
    <Box className='adminmenproduct' w={"82%"} display={"grid"} padding={"1%"}>
       {/* write code here  */}
      {/* <h1>sen</h1>
      Products of Men Category will be displayed here with edit and delete button */}
      {products.length>0 && products.map((el)=>{
        return <Box key={el.id} boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px" paddingBottom={"10px"} >
          <Center>
          <Box>
          <Stack height={"500px"}>
          <AdminProductcard  {...el} />
          </Stack>
           <Flex justifyContent={"space-between"} padding={"1%"} marginTop={"1%"} w="100%">
          <Button color={"green"} marginRight={"20px"}><Link to ={`/admin-edit/${el.id}`}>Edit</Link></Button>
          <Button onClick={()=>handleDelete(el.id)} color={"red"} >Delete</Button>
          </Flex>
          </Box>
          </Center>
         
          </Box>
      })}
    </Box>
  </Flex>
  </Box>
  )
}
