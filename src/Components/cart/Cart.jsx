import React, { useEffect, useState } from "react";
import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import Cartitems from "./cartitems/Cartitems";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = ({ setshowcart }) => {
  const [cartitems, setCartitems] = useState([]);
  console.log(cartitems);
  const navigate = useNavigate();
  let price = 0;
  for (let i = 0; i < cartitems.length; i++) {
    price += Number(cartitems[i].price);
  }
  const getdata = () => {
    axios
      .get(`http://localhost:8080/cart`)
      .then((res) => {
        setCartitems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getdata();
  }, [Cartitems]);

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
        {cartitems.length > 0 ? (
          <>
            <div style={{ overflowY: "scroll", height: "28rem" }}>
              {cartitems?.map((it) => (
                <Cartitems key={it.id} {...it} setCartitems={setCartitems} />
              ))}
            </div>
            <div
              style={{
                position: "fixed",
                bottom: "0",
                right: "0",
                width: "100%",
                background: "none",
              }}
              className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal</span>
                <span className="total">&#8377;{price}</span>
              </div>
              <div className="button">
                <button
                  className="checkout-cta"
                  onClick={() => {
                    navigate("/shipping");
                    setshowcart(false);
                  }}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <BsCartX />
            <span>No products in the cart</span>
            <button
              className="return-cta"
              onClick={() => {
                navigate("/");
                setshowcart(false);
              }}>
              RETURN TO SHOP
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
