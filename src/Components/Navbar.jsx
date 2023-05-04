import React from "react";
import { useState } from "react";
import Cart from "./cart/Cart";

export const Navbar = () => {
  const [showcart, setshowcart] = useState(false);
  console.log(showcart);
  const handlecart = () => {
    setshowcart((prev) => !prev);
  };
  return (
    <div>
      <p onClick={handlecart}>cart</p>
      {showcart && <Cart setshowcart={setshowcart} />}
    </div>
  );
};
