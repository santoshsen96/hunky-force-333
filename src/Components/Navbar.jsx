



// navbar with chakraUI

import {
    Box,
    Flex,
    Image,
    HStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Input,
    
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link, NavLink } from 'react-router-dom';
import { CgShoppingCart } from "react-icons/cg";
import {SlUser} from "react-icons/sl";
import {SlHeart} from "react-icons/sl";
import {useEffect, useRef, useState} from "react";
import Cart from "./cart/Cart";
import { useDispatch } from 'react-redux';
import { getProductsgift } from '../Redux/AdminProduct/action';





const links = [
    { to: "/", name: "HOME" },
    { to: "/Jewelery", name: "JEWELERY" },
    { to: "/Watches", name: "WATCHES" },
    { to: "/Gifts", name: "GIFTS" },
]




const Navbar = () => {
    const [query, setQuery] = useState("")
    const dispatch=useDispatch()
    let ref=useRef()
    const paramObj = {
        params:{
            q:query 
        }
    }
    useEffect(()=>{
        if(ref.current){
            clearTimeout(ref.current)
        }
        ref.current=setTimeout(()=>{
            dispatch(getProductsgift(paramObj))
        },1000)
        
    },[query]) //for search

  const [showcart, setshowcart] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();


    const active = { color: "#D7B14A", textDecoration: "none" };
const deactive = { color: "white", textDecoration: "none" };

const handlecart = () => {
  setshowcart(!showcart);
}
    
    

    return (
        <Box style={{position:'fixed', width:'100%', top:"0",zIndex:"99"}}>
            <Box bg={useColorModeValue('#404040;', '#404040;')} px={7} >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                    color={"#D7B14A"}
                        size={'md'}
                        icon={isOpen ? <CloseIcon color={"#D7B14A"} /> : <HamburgerIcon color={"#D7B14A"}/>}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>
                            <Link to="/">
                            <Image src="https://i.postimg.cc/YSKBpWR6/gz.png" width={200} alt=""/>
                            </Link>
                        </Box>
                        <HStack
                            as={'nav'}
                            spacing={6}
                            display={{ base: 'none', lg: 'flex' }}>
                            {links.map((e) => (
                                <NavLink
                                    key={e.to}
                                    to={e.to}
                                    style={({ isActive }) => {
                                        return isActive ? active : deactive
                                    }}
                                >{e.name}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Input placeholder='Search here...' width={400} onChange={(e)=>setQuery(e.target.value)}  />
                    <Box  style={{
                        fontSize: "27px",
                        border:" 2px #D7B14A"
                    }}
                    >
                        <Flex gap="30px">
{/* login navlink */}
               <NavLink to="/login"><SlUser size={30} color="#D7B14A"/></NavLink>
               {/* wishlist navlink */}
                            <NavLink to=""><SlHeart size={30} color='#D7B14A' /></NavLink>
                            {/* cart navlink */}
<span className='cart-icon'>
                            <CgShoppingCart size={32} color='#D7B14A' onClick={handlecart} />
                           </span>
                            {showcart && <Cart setshowcart={setshowcart} />}

                        </Flex>
                    </Box>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {links.map((e) => (
                                <NavLink key={e.to} to={e.to}>{e.name}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </Box>
    );
}

export default Navbar;


  

