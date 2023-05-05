
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";


{/* <Link to=""><img src="https://i.postimg.cc/v8gZQwyy/gleams.png" alt=""/></Link> */}
const links=[
    
    {path:"/",title:"Home"},
    {path:"/Jewelery",title:"Jewelery"},
    {path:"/Watches",title:"Watches"},
    {path:"/Gifts",title:"Gifts"},
    {path:"/ContactUs",title:"Contact Us"},
    {path:"/Account",title:"Account"},
    {path:"/Bag",title:"Bag"},
  
    // {path:"/cart",title:"CART"},

    // {path:"/login", title:"LOGIN"}
];


//styling for navigation bar
const Navbar=()=>{
    const defaultLinkStyle={textDecoration:"none",color:"white"}
    const activeLinkStyle={textDecoration:"none",color:"yellow"}
    return(
        
      <div className="nav">

      {links.map(({path,title})=>(
            <NavLink 
            style={({isActive})=>{
                return isActive ? activeLinkStyle : defaultLinkStyle;
            }}
            key={path}
            to={path}>
                {title}
            </NavLink>
        ))}
       
          
      </div>

    )
}
export default Navbar;







  

