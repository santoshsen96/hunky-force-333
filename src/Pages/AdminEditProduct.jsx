import React, { useEffect, useState } from 'react'
import { Box, Flex,Heading,Input,Button } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editProductWatch, editProductWatchToProduct } from '../Redux/AdminProduct/action'
import Adminsidebar from '../Components/AdminSideBar'
import axios from 'axios'

export const AdminEditProduct = () => {
    const[pro,setPro]=useState({})
    const dispatch=useDispatch()
    const toast=useToast()
    const { id } = useParams()
    console.log(id)
    //const { products } = useSelector((store) => store.AdminProduct)
     //console.log(products)
    
    

    useEffect(()=>{
        // const editproduct = products.find((el) => el.id === id)
        // setPro(editproduct)
        axios.get(`http://localhost:8080/watches/${id}`).then((res)=>{
            console.log(res.data)
            setPro(res.data)
        })
    },[])

    const handleChange=(e)=>{
        //console.log(e)
       const {name,value}=e.target

       setPro((prev) =>{
           return {...prev,[name]:value}
       })
    }
    const handleEdit=(e)=>{
      e.preventDefault()
      
      dispatch(editProductWatchToProduct(pro,id))
      dispatch(editProductWatch(pro,id))
      return toast({
        title: 'Product Edited Successfully',
        description: "",
        status: 'success',
        duration: 5000,
        isClosable: true,
        position:'top'
      })
    }
    console.log(pro)
  return (
   
    <Box>
            
            <Flex className='addproductpagecontainer' justifyContent={"space-evenly"} marginTop={"8%"}>
                <Box w={"18%"}>
                    <Adminsidebar />
                </Box>
                <Box className='formcontainer' w={"82%"} textAlign="center">
                <Heading color={"#2d2d2d"} marginBottom="2%">EDIT PRODUCT:{id}</Heading>
                    <Box className='form' padding={"3%"}   margin="2% auto" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
                       <form onSubmit={handleEdit} >
                        <FormControl isRequired >
                            <FormLabel>ID</FormLabel>
                            <Input type="number" value={pro?.id} onChange={handleChange} name="id" placeholder='Enter ID' />
                            <FormLabel>Image</FormLabel>
                            <Input type="text" value={pro?.image} onChange={handleChange} name="image" placeholder='Enter Image URL' />
                            <FormLabel>Title</FormLabel>
                            <Input type="text" value={pro?.title} onChange={handleChange} name="title" placeholder='Enter Product Title' />
                            <FormLabel>Brand </FormLabel>
                            <Input type="text" value={pro?.brand} onChange={handleChange} name="brand" placeholder='Enter Product Brand' />
                            <FormLabel>Discount</FormLabel>
                            <Input type={"number"} value={pro?.discount} onChange={handleChange} name="discount" placeholder='Enter Discount' />
                            <FormLabel>Gender</FormLabel>
                            <Input type="text" value={pro?.gender} onChange={handleChange} name="gender"  placeholder='Enter Gender' />
                            
                            <FormLabel>Size</FormLabel>
                            <Input type="text" value={pro?.size} onChange={handleChange}  name="size" placeholder='Enter Product Size' />
                            <FormLabel>Price</FormLabel>
                            <Input type="number"  value={pro?.price} onChange={handleChange}  name="price" placeholder='Enter Product Price' />
                            <FormLabel>Category</FormLabel>
                            <Input type="text" value={pro?.category} onChange={handleChange}  name="category" placeholder='Enter Product Category' />
                            <Button backgroundColor={"#2d2d2d"} color="white" marginTop={"3%"} type="submit">EDIT PRODUCT</Button>
                        </FormControl>
                        </form>
                    </Box>
                </Box>

                
            </Flex>
        </Box>
    
  )
    
}
