import React from "react";
import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import Cartitems from "./cartitems/Cartitems";
// import { useNavigate } from "react-router-dom";

const Cart = ({ setshowcart }) => {
  // const navigate = useNavigate();
  return (
    <div className="cart-panel">
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span
            className="close-btn"
            onClick={() => {
              setshowcart(false);
            }}>
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>
        <Cartitems />
        {/* <div className="empty-cart">
          <BsCartX />
          <span>No products in the cart</span>
          <button
            className="return-cta"
            onClick={() => {
              // navigate("");
              setshowcart(false);
            }}>
            RETURN TO SHOP
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Cart;
