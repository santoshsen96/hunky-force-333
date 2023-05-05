import React from 'react';
import "./Homepage.css";
import {MdKeyboardArrowLeft} from "react-icons/md";
import {MdKeyboardArrowRight} from "react-icons/md";

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
       <div className='categories'></div>

{/* Bessellers */}
<div className='bessellers'>
    <h1>Bessellers</h1>
    <p>Top-rated Jewellery from our Collection</p>
</div>

{/* grid section */}

<div className='grid'>
    <div><img src="https://cdn.shopify.com/s/files/1/2942/2830/products/Pab5_800x.jpg?v=1517262828"/>
    <h3>Amber Pendenant</h3>
    </div>
    <div><img src="https://cdn.shopify.com/s/files/1/2942/2830/products/Ptq9_800x.jpg?v=1517262865"/>
    <h3>Turquoise Pendant</h3>
    <p></p></div>
    <div><img src="https://cdn.shopify.com/s/files/1/2942/2830/products/Pam5_800x.jpg?v=1517262834"/>
    <h3>Multi Stone Pendant</h3>
    </div>
    <div><img src="https://cdn.shopify.com/s/files/1/2942/2830/products/Pmul1_800x.jpg?v=1517262849"/>
    <h3>Ammonite Pendant</h3>
    </div>
</div>


{/* gift section */}

<div className='gifts'>
    <div><img src="https://img.freepik.com/free-photo/3d-gift-box-scene-with-clouds_173207-1895.jpg?size=626&ext=jpg&ga=GA1.1.751070098.1683189659&semt=ais"/></div>
    <div><h1>Gifts</h1>
    <h5>Looking for the perfect gifts?</h5>
    <h5>Look no further!Our ectensive collections of jewellery gifts</h5>
    <h5>includes something for everyone-from elegant and timeless</h5>
    <h5>piecesfor her bold and sophisticated designs for him</h5></div>

</div>






</>
  )
}

