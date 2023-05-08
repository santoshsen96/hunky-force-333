import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Shipping.scss";
import Footer from "../Footer";

export const setData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

function Shipping() {
  //   let payment_total = localStorage.getItem("payment_total");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [pincode, setPincode] = useState("");
  const [statename, setStatename] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const user_data = {
    firstname: firstname,
    lastname: lastname,
    address1: address1,
    address2: address2,
    pincode: pincode,
    statename: statename,
    country: country,
    email: email,
    phone: phone,
  };
  const saveData = (e) => {
    e.preventDefault();
    setData("shipping", user_data);
    navigate("/payment");
  };

  return (
    <div>
      <div id="shipping" className="shipping">
        <div></div>
        <div className="actualform">
          <h1 className="sam">Where should we send your order?</h1>
          <form onSubmit={saveData} className="data">
            <h3>Enter Your name and address</h3>
            <div className="addressinfo">
              <input
                type="text"
                placeholder="First Name"
                required
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              <input
                type="text"
                placeholder="Address Line1"
                required
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
              />
              <input
                type="text"
                placeholder="Address Line2"
                required
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
              <input
                type="text"
                placeholder="PIN code"
                required
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
              <input
                type="text"
                placeholder="State"
                required
                value={statename}
                onChange={(e) => setStatename(e.target.value)}
              />
              <input
                type="text"
                placeholder="Country"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div>
              <div>
                <h3>What's your contact information</h3>
              </div>
              <div className="contactinfo">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="phone"
                  placeholder="Indian Mobile Number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="shipp_button">
              <input type="submit" value="Continue to Payment" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shipping;
