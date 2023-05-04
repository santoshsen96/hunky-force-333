import React from "react";
import { MdClose } from "react-icons/md";
import "./Cartitems.scss";
export const data = [
  {
    id: 1,
    image:
      "https://www.worldofwatches.com/media/catalog/product/cache/6275b0637049ab4262e9abf2e63a6f54/m/e/mens-promaster-diver-polyurethane-dark-blue-dial-watch-citizen-czbn0151-09l_1.jpg",
    title: "Men's Promaster Diver Polyurethane Dark Blue Dial Watch",
    brand: "Citizen",
    gender: "Mens",
    price: 224.95,
    discount: "40%",
    category: "Mens Watch",
    description:
      "The Citizen Promaster Diver series watch features a stainless steel 44 mm case, with a uni-directional rotating bezel a dark blue dial and a scratch resistant mineral crystal.The 20 mm polyurethane band is fitted with a tang clasp .This beautiful wristwatch, powered by a citizen caliber eco-drive e168, Japan made eco-drive movement, supports: date, hour, minute, second functions.This watch has a water resistance of up to 660 feet/200 meters, suitable for short periods of recreational swimming.This stylish timepiece is sure to complete any man's collection.",
  },
  {
    id: 2,
    image:
      "https://www.worldofwatches.com/media/catalog/product/cache/6275b0637049ab4262e9abf2e63a6f54/m/e/mens-classic-leather-black-dial-watch-emporio-armani-ar1732_1.jpg",
    title: "Men's Classic Leather Black Dial",
    brand: "Emporio Armani",
    gender: "Mens",
    price: 103.98,
    discount: "41%",
    category: "Mens Watch",
    description:
      "The Emporio Armani Classic series watch features a stainless steel 41 mm case, with a fixed bezel a black dial and a scratch resistant mineral crystal.The 20 mm leather band is fitted with a tang clasp .This beautiful wristwatch, powered by quartz movement, supports: date, hour, minute, second functions.This watch has a water resistance of up to 100 feet/30 meters, suitable for short periods of recreational swimming.This stylish timepiece is sure to complete any man's collection.",
  },
];
const Cartitems = () => {
  return (
    <>
      <div className="cart-products">
        {data.map((it) => (
          <div className="product-container" key={it.id}>
            <div className="image-container">
              <img src={it.image} alt={it.brand} />
            </div>
            <div className="prod-details">
              <span className="name">{it.title}</span>
              <MdClose
                className="close-btn"
                //   onClick={() => handleremovefromcart(item)}
              />
              <div className="quantity-buttons">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <div className="text">
                <span>1</span>
                <span>x</span>
                <span className="highlight">
                  <span>&#8377;</span>
                  {it.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cartitems;
