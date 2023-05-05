import React from 'react';
import "./Homepage.css";
import {MdKeyboardArrowLeft} from "react-icons/md";
import {MdKeyboardArrowRight} from "react-icons/md";
import { Link } from 'react-router-dom';

export const HomePage = (props) => {

 
        const slides=[{image:`https://cdn.shopify.com/s/files/1/2942/2830/products/Wcr5_800x.jpg?v=1517263217`},
        {image:`https://cdn.shopify.com/s/files/1/2942/2830/products/Wcr1_800x.jpg?v=1517262890`},
        {image:`https://cdn.shopify.com/s/files/1/2942/2830/products/Emul1_800x.jpg?v=1525804495`},
        {image:`https://cdn.shopify.com/s/files/1/2942/2830/products/Nmul26_800x.jpg?v=1517263155`},
        {image:`https://cdn.shopify.com/s/files/1/2942/2830/products/Pmul4_800x.jpg?v=1517260748`},
        {image:`https://cdn.shopify.com/s/files/1/2942/2830/products/Bmul31_7a40e076-7fb3-4b74-b414-5b983cf523a5_800x.jpg?v=1517263060`},
        {image:`https://cdn.shopify.com/s/files/1/2942/2830/products/Wla1_800x.jpg?v=1517263221`},
        {image:`https://cdn.shopify.com/s/files/1/2942/2830/products/Ram5_800x.jpg?v=1517262907`},
{image:`https://cdn.shopify.com/s/files/1/2942/2830/products/Wmul1_800x.jpg?v=1517263224`},
{image:`https://cdn.shopify.com/s/files/1/2942/2830/products/Emul1_800x.jpg?v=1525804495`},
{image:`https://cdn.shopify.com/s/files/1/2942/2830/products/Ebu5_800x.jpg?v=1525473427`},


    ]
        

    
        const slideLeft=()=>{
            var slider=document.getElementById("slider");
            slider.scrollLeft=slider.scrollLeft+500;
        }
    
        const SlideRight=()=>{
            var slider=document.getElementById("slider")
            slider.scrollLeft=slider.scrollLeft-500;
        
        }
  return (
    <>
    <div className="topsection">
      <img src="https://i.postimg.cc/vZwjMg9w/top-bannerr.png" alt=""/> 
    </div>

{/* new collection section */}
    <div className='new'>
      <h1>New Collections</h1>
      <p>Check Out the New Collections of  Famous Brands</p>
    </div>

    {/* slider top */}
<div id="main-slider-container">
        <MdKeyboardArrowLeft size={40} position="absolute" className="slide-icon left" onClick={slideLeft}/>
        
        <div id="slider">
           { 
           slides.map((slide,index)=>{
                return(
<div className="slider-card" key={index}>
    <img  src={slide.image}/>
{/* <img src="https://images.coach.com/is/image/Coach/ch813_b4bk_a0?$imageRec$"/> */}

</div>
                )
            })
        }
            </div>
        <MdKeyboardArrowRight size={40} className="slide-icon right" onClick={SlideRight}/>
    </div>
       
       {/* categories */}
       <div className='categoriez'>
        <div><h1>Categories</h1>
        <p>Discover Our Collection of Jewellery by Categories</p><br></br><br></br>
        
        <Link to =""><h3>Rings</h3></Link><br></br>
        <Link to =""><h3>Bracelets</h3></Link><br></br>
         <Link to =""><h3>Earring</h3></Link><br></br>
          <Link to =""><h3>Necklace & Pendants</h3></Link><br></br>
           <Link to =""><h3>Watches</h3></Link><br></br>
            <Link to =""><h3>Men's Jewelery</h3></Link><br></br>

            <button><Link to="">ALL CATEGORIES</Link></button>
            </div>
        <div><img src="https://i.postimg.cc/mD8kW1rb/half-facee.png"/></div>
       </div>

{/* Bessellers */}
<div className='bessellers'>
    <h1>Bessellers</h1>
    <p>Top-rated Jewellery from our Collection</p>
</div>

{/* grid section */}

<div className='grid'>
    <div><img src="https://cdn.shopify.com/s/files/1/2942/2830/products/Pab5_800x.jpg?v=1517262828" alt=""/>
    <h3>Amber Pendenant</h3>
    </div>
    <div><img src="https://cdn.shopify.com/s/files/1/2942/2830/products/Ptq9_800x.jpg?v=1517262865" alt=""/>
    <h3>Turquoise Pendant</h3>
    <p></p></div>
    <div><img src="https://cdn.shopify.com/s/files/1/2942/2830/products/Pam5_800x.jpg?v=1517262834" alt=""/>
    <h3>Multi Stone Pendant</h3>
    </div>
    <div><img src="https://cdn.shopify.com/s/files/1/2942/2830/products/Pmul1_800x.jpg?v=1517262849" alt=""/>
    <h3>Ammonite Pendant</h3>
    </div>
</div>


{/* gift section */}

<div className='gifts'>
    <div><img src="https://img.freepik.com/free-photo/3d-gift-box-scene-with-clouds_173207-1895.jpg?size=626&ext=jpg&ga=GA1.1.751070098.1683189659&semt=ais" alt=""/></div>
    <div><h1>Gifts</h1>
    <h5>Looking for the perfect gifts?</h5>
    <h5>Look no further!Our ectensive collections of jewellery gifts</h5>
    <h5>includes something for everyone-from elegant and timeless</h5>
    <h5>piecesfor her bold and sophisticated designs for him</h5></div>

</div>



{/* about section */}

<div className='about'>
    <div><h1>About</h1>
    <p>Gleams is more than just Gliding</p><br/><br/>
    <p>Gleams works with the vision of offering tastefully designed jewellery at revolutionary prices. This is achieved by eliminating all inefficiencies which result in drastically reduced costs. With Gleams, users stand to save as much as 30% when compared to prices in the market.
Our website is designed to bridge the vast gap between the virtual and the physical world. This has been attained with the help of the Virtual Try-on feature that permits the users to virtually put on 1000s of earrings to see just how they look when placed on the ears.
With over 100 thousand downloads, the CaratLane app has emerged to be one of the most liked applications in the jewellery circuit.</p><br/>
<p>Gleams provides the exquisite craftsmanship of beautiful jewellery designs such as rings, earrings, pendants, necklace, chains, bangles, bracelets, mangalsutra, nose pins. Apart from jewellery, Gleams offers 22k (916) and 24k (995) gold coins with certification and the guarantee of a BIS Hallmarked stamp.</p></div>
    <div><img src="https://i.postimg.cc/W1GrWPKT/about.png" alt=""/></div>
</div>
{/* meeting section */}

<div className='meeting'>
    <div><img src='https://i.postimg.cc/JznDqLRy/meeting.png' alt=''/></div>
    <div><h1>Arrange a Meeting with Personal Consultant</h1>
    <p>Find a Boutique Near or Visit Our Flagship Store</p><br></br><br></br>
    <button><Link to="">LEARN MORE</Link></button>
    </div>
</div>


</>
  )
}

