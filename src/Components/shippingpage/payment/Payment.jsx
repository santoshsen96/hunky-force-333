import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Navbar } from "../../Components/Navbar";
import "./Payment.scss";
import Footer from "../../Footer";

function Payment() {
  let payment_total = localStorage.getItem("payment_total");
  const [card, setCards] = useState("none");
  const [netbanking, setNetbanking] = useState("none");
  const [emi, setEmi] = useState("none");
  const [popup, setPopup] = useState("none");
  const [pay, setPay] = useState("block");
  const [otpshow, setOtp] = useState("none");
  const [hidebutton, setHidebutton] = useState("block");
  const [home, setHome] = useState("none");
  const [addr, setAddr] = useState({});
  const handleOTP = () => {
    setOtp("grid");
    setHidebutton("none");
  };

  const handledisplaycard = () => {
    setCards("block");
    setNetbanking("none");
    setEmi("none");
  };
  const handledisplaynet = () => {
    setCards("none");
    setNetbanking("block");
    setEmi("none");
  };
  const handledisplayemi = () => {
    setCards("none");
    setNetbanking("none");
    setEmi("block");
  };
  const handleDetails = () => {
    setPopup("block");
    setPay("none");
  };
  const closepopup = () => {
    setPopup("none");
    setPay("block");
  };
  useEffect(() => {
    const address = JSON.parse(localStorage.getItem("shipping")) || {
      address1: "",
      address2: "",
      city: "",
      pincode: "",
      statename: "",
      country: "",
    };
    setAddr(address);
  }, []);

  return (
    <div>
      <div className="payment" id="payment">
        <div style={{ display: pay }} id="abc" className="abc">
          <div className="method">
            <div className="lead">
              <h1>How do you want to pay?</h1>
            </div>
            <div className="payinfull">
              <div className="payinfull_heading">
                <h4>Pay in full.</h4>
              </div>
              <div className="collection">
                <button onClick={handledisplaycard} className="card cb">
                  <h3>Credit or Debit Card</h3>
                  <p>Visa, Mastercard, AMEX, Discover, Diners Club, RuPay</p>
                </button>
                <div style={{ display: card }} className="atm">
                  <div className="atm_main">
                    <div className="atm_main_heading">
                      <p>Enter your card information</p>
                    </div>
                    <div className="atm_inp">
                      <div className="card_number">
                        <input type="number" placeholder="Card number" />
                      </div>
                      <div className="exp_cvv">
                        <input
                          type="text"
                          placeholder="Expiration MM/YY"
                          required
                        />
                        <input type="text" placeholder="CVV" required />
                      </div>
                    </div>
                  </div>
                  <div className="billing">
                    <div className="billing_main">
                      <div className="billing_heading">
                        <h4>Billing address</h4>
                      </div>
                      <div className="address">
                        <span>
                          {" "}
                          <input type="checkbox" name="" id="" required />
                          use my billing address
                        </span>
                        <br />
                        <span>
                          <b>
                            {addr.address1},{addr.address2}
                          </b>
                          <b>{addr.city}</b>
                          <b>{addr.pincode}</b>
                          <b>{addr.statename}</b>
                          <b>{addr.country}</b>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <button onClick={handledisplaynet} className="netbanking">
                  <h3>Net Banking</h3>
                </button>
                <div style={{ display: netbanking }} className="logos">
                  <div className="banks">
                    <div>
                      <img
                        src="https://onemg.gumlet.io/image/upload/m56yb9uqxdypc7hdrn4a.png"
                        alt=""
                      />
                      <p>ICICI</p>
                    </div>
                    <div>
                      <img
                        src="https://onemg.gumlet.io/marketing/ef67d9dc-6d6d-478b-8fcf-6b42f730852d.png"
                        alt=""
                      />
                      <p>HDFC</p>
                    </div>
                    <div>
                      <img
                        src="https://res.cloudinary.com/du8msdgbj/image/upload/v1529400496/marketing/p1pmddrmfgus2qiuznm1.png"
                        alt=""
                      />
                      <p>AXIS</p>
                    </div>
                    <div>
                      <img
                        src="https://onemg.gumlet.io/marketing/0104bc4f-ac20-448c-8862-44d3d7a60658.png"
                        alt=""
                      />
                      <p>KOTAK</p>
                    </div>
                    <div>
                      <img
                        src="https://onemg.gumlet.io/marketing/46eba1af-8537-4b6d-95f0-bf81cfcb90a1.png"
                        alt=""
                      />
                      <p>SBI</p>
                    </div>
                  </div>
                  <div className="additional_banks">
                    <select name="" id="">
                      Additional Banks
                      <option value=""> Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="Payovertime">
              <div style={{ display: emi }} className="atm">
                <div className="atm_main">
                  <div className="atm_main_heading">
                    <p>Enter your card information</p>
                  </div>
                  <div className="atm_inp">
                    <div className="card_number">
                      <input type="number" placeholder="Card number" />
                    </div>
                    <div className="exp_cvv">
                      <input
                        type="text"
                        placeholder="Expiration MM/YY"
                        required
                      />
                      <input type="text" placeholder="CVV" required />
                    </div>
                  </div>
                </div>
                <div className="billing">
                  <div className="billing_main">
                    <div className="billing_heading">
                      <p>Billing address</p>
                    </div>
                    <div className="address">
                      <span>
                        {" "}
                        <input type="checkbox" name="" id="" required />
                        use my billing address
                      </span>
                      <br />
                      <span>
                        <b>
                          {addr.address1},{addr.address2}
                        </b>{" "}
                        <b>{addr.city} </b> <b> {addr.pincode}</b>{" "}
                        <b> {addr.statename} </b> <b> {addr.country}</b>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="review_button">
            <button style={{ display: hidebutton }} onClick={handleOTP}>
              Review Your Order
            </button>
            <form
              onSubmit={(e) => {
                e.preventDefault();

                setHome("flex");
              }}
              className="otpset"
              style={{ display: otpshow }}>
              <label>
                OTP has been sent to your mobile {addr.phone},please Enter the
                otp
              </label>
              <input type="number" placeholder="Enter your OTP" required />
              <input className="otpsubmit" type="submit" value="Submit" />
            </form>
            <div style={{ display: home }} className="ordersuccess">
              <div className="ordersuccesspopup">
                <h1>
                  ✅ Your order has been confirmed <span>🎉</span>
                </h1>
                <div className="address_pop">
                  <div>
                    <h2>Order will be deliverd below address!</h2>
                    <h4>
                      Address: {addr.address1}, {addr.address2}
                    </h4>
                    <h3> {addr.city}</h3>
                    <h3>Pincode: {addr.pincode}</h3>
                    <h3>State: {addr.statename}</h3>
                    <h3>Country: {addr.country}</h3>
                  </div>
                  <div className="imgbox">
                    <img src="https://i.postimg.cc/YSKBpWR6/gz.png" alt="" />
                  </div>
                </div>
                <Link to="/">
                  <button>Continue Shopping</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="popup" style={{ display: popup }}>
          <div className="closepopup" onClick={closepopup}>
            ❌
          </div>
          <div className="ordertotal">
            <h2>Your Order Total</h2>
          </div>
          <div className="editbag">
            <h3>1 item</h3>
            <Link to="/cart">Edit bag</Link>
          </div>
          <div className="subtotal">
            <p>Subtotal</p>
            <p>₹{payment_total}</p>
          </div>
          <div className="shipping">
            <p>Shipping</p>
            <p>FREE</p>
          </div>
          <div className="totalprice">
            <h3>Total</h3>
            <p>₹ {payment_total}</p>
          </div>
          <div className="orderDetails">
            <h2>Your Order Details</h2>
          </div>
          <div className="deliverson">
            <h3>
              Delivers on: <br />
              Sat 8 april
            </h3>
            <a href="#">Change</a>
          </div>
          <div className="deliversto">
            <h4>
              Delivery to: <br />{" "}
              <span>
                <b>
                  {addr.address1},{addr.address2}
                </b>
                <b>{addr.city}</b>
                <b>{addr.pincode}</b>
                <b>{addr.statename}</b>
                <b>{addr.country}</b>
              </span>
            </h4>
            <Link to="/shipping">Change</Link>
          </div>
          <div className="paymentchange">
            <h3>Payment</h3>
            <Link to="/payment">Change</Link>
          </div>
          <div className="review">
            <a href="#">
              <h3>Review</h3>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
