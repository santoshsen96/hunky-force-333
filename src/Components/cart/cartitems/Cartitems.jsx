import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import "./Cartitems.scss";
import axios from "axios";
const Cartitems = ({ id, image, brand, title, price, setCartitems }) => {
  const [count, setCount] = useState(1);
  const deleteProduct = async (id) => {
    const res = await axios.delete(`http://localhost:8080/cart/${id}`);
    return res;
  };

  const handledelete = (id) => {
    deleteProduct(id).then((res) => {
      if (res.status === 200) {
        setCartitems((prev) => prev.filter((it) => it.id !== id));
      }
    });
  };

  return (
    <>
      <div className="cart-products">
        <div className="product-container" key={id}>
          <div className="image-container">
            <img src={image} alt={brand} />
          </div>
          <div className="prod-details">
            <span className="name">{title}</span>
            <MdClose className="close-btn" onClick={() => handledelete(id)} />
            <div className="quantity-buttons">
              <span onClick={() => setCount((p) => p - 1)}>-</span>
              <span>{count}</span>
              <span onClick={() => setCount((p) => p + 1)}>+</span>
            </div>
            <div className="text">
              <span>1</span>
              <span>x</span>
              <span className="highlight">
                <span>&#8377;</span>
                {price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartitems;
