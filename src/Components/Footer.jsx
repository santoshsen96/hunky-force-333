import React from "react";
import { Link } from "react-router-dom";
import {FaInstagram} from "react-icons/fa";
import "./Footer.css";
import {FiFacebook} from "react-icons/fi";
import {RxTwitterLogo} from "react-icons/rx";
import {TbBrandTelegram} from "react-icons/tb";


const Footer=()=>{
    return(
        <>
        <div>
<div className="footer">
    <div><img src="https://i.postimg.cc/YSKBpWR6/gz.png"  alt=""/>
    <div className="logo" ><Link to="https://www.facebook.com/"><FiFacebook size={30} /></Link>
    <Link to="https://www.instagram.com/"><FaInstagram size={30}/></Link>
    <Link to="https://www.instagram.com/"><RxTwitterLogo size={30}/></Link>
    <Link to="https://telegram.org/"><TbBrandTelegram size={30}/></Link>
    </div>
</div>
    <div><p>Contact Us</p>
    <p>Service</p>
    <p>Return</p>
    <p>Sterms of use</p>
    <p>How to order?</p></div>
    <div><p>Rings</p>
    <p>Bracelets</p>
    <p>Earrings</p>
    <p>Necklace & Pendants</p>
    <p>Watches</p>
    </div>
    <div><h1>Discover the latest collections,news and exclusive launches</h1>
    <input type="text" placeholder="Enter your email address" />
    <p>Legal Notice</p>
    <p>Private Policy</p></div>
</div>
        </div>
        </>
    );
}
export default Footer;