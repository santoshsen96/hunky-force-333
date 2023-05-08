import { Button } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from 'react-router-dom';
import "../CSS/AdminProductCard.css";



const AdminProductcard = ({id,title,image,brand,price,category,gender,discount}) => {

//   const wishlistAdd = ()=>{
//     let obj = {
//       id,title,image,brand,price,style,category,gender,size,discount
//     }
//     axios.post(`https://fashique-api.onrender.com/wishlist`,obj)
//     .then((res)=>{console.log(res)})
//     .catch((err)=>{console.log(err)});
//   }
  return (
    <Link to={`/${id}`}>
      <div className="cardd">
        <img src={image} alt={title} width={20} height={2} />
        <div>-{discount}</div>
        
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
    </Link>
  );
}

export default AdminProductcard;