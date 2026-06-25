
// import img4 from '../../assets/indoorplant.jpg'
import { Link } from "react-router-dom";
import Footer from '../../componants/footer/Footer'
import Header from '../../componants/header/Header'

import plantsimglogo from '../../assets/plantsimglogo.avif'
import potsimglogo from'../../assets/potsimglogo.avif'
import fertilizer from '../../assets/fertilizerimglogo.avif'
import tools from '../../assets/toolsimglogo.jpg'
import './Shop.css'
import MonsteraDeliciosa from '../../assets/plants/montesoraplant.jpg'
import FiddleLeafFig from '../../assets/plants/FiddleLeafFig.jpg'
import  BirdofParadise from '../../assets/plants/BirdofParadise.jpg'
import ArecaPalm from '../../assets/plants/ArecaPalm.jpg'
import RubberPlant from '../../assets/plants/RubberPlant.jpg'
import contentimg from '../../assets/Gemini_Generated_Image_xi2bf0xi2bf0xi2b.png'
import contentimg2 from '../../assets/contentimg2.webp'
import Plants from "./Plants";
import watsol1 from '../../assets/watersolution/watsol1.webp'
import watsol2 from '../../assets/watersolution/watsol2.webp'
import watsol3 from '../../assets/watersolution/watsol3.webp'
import watsol4 from '../../assets/watersolution/watsol4.webp'
import stand1 from '../../assets/stand/stand2.webp'
import stand2 from '../../assets/stand/stand3.webp'
import stand3 from '../../assets/stand/stand4.webp'
import stand4 from '../../assets/stand/stand5.webp'
import stand5 from '../../assets/stand/stand1.avif'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import gift1 from '../../assets/gift/gift1.webp'
import gift2 from '../../assets/gift/2.webp'
import gift3 from '../../assets/gift/gift3.webp'
import gift4 from '../../assets/gift/gift4.webp'
import gift5 from '../../assets/gift/gift5.webp'
import gift6 from '../../assets/gift/gift6.webp'
import ReactCompareImage from 'react-compare-image';
import slide1 from '../../assets/gift/slide1.webp'
import slide2 from '../../assets/gift/slide2.webp'
import deskimg1 from '../../assets/deskplant/deskimg1.png'
import deskimg2 from '../../assets/deskplant/deskimg2.png'
import deskimg3 from '../../assets/deskplant/deskimg3.png'
import deskimg4 from '../../assets/deskplant/deskimg4.webp'
import deskimg5 from '../../assets/deskplant/deskimg5.png'
import deskimg6 from '../../assets/deskplant/deskimg6.png'
import deskimg7 from '../../assets/deskplant/deskimg7.png'

function Shop(){
    return(
        <>
        <Header/>
        {/* <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className=" display-5 fw-normal text-success">Popular Plants</h1>
        </div> */}


<div className="container py-3">
  <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">

    <div className="text-center">
      <img src={plantsimglogo} alt="plants" className="category-img" />
      <br />
      <Link to="/plants" className="text-decoration-none text-dark fw-medium">
        Plants
      </Link>
    </div>

    <div className="text-center">
      <img src={potsimglogo} alt="pots" className="category-img" />
       <br />
      <Link to="/pots" className="text-decoration-none text-dark fw-medium">
        Pots
      </Link>
    </div>

    <div className="text-center">
      <img src={fertilizer} alt="fertilizer" className="category-img" />
      <br />
      <Link to="/fertilizer" className="text-decoration-none text-dark fw-medium">
        Fertilizer
      </Link>
    </div>

    <div className="text-center">
      <img src={tools} alt="tools" className="category-img" />
        <br />
      <Link to="/tools" className="text-decoration-none text-dark fw-medium">
        Tools
      </Link>
    </div>

  </div>
</div>




<div className="occasion-section py-5">
  <div className="container">

    <h5 className="text-center fw-bold my-3">
      Plants By Occasion
    </h5>

    <div className="row g-4">

      {/* Birthday */}
      <div className="col-md-6">
        <div className="occasion-card">
          <img src={gift1} className="occasion-img" alt="Birthday" />
          <p className="text-center mt-2">Return Gifts</p>
        </div>
      </div>

      {/* Good Luck */}
      <div className="col-md-3">
        <div className="occasion-card">
          <img src={gift2} className="occasion-img" alt="Good Luck" />
          <p className="text-center mt-2">Birthday Gifts</p>
        </div>
      </div>

      {/* Get Well Soon */}
      <div className="col-md-3">
        <div className="occasion-card">
          <img src={gift3} className="occasion-img" alt="Get Well Soon" />
          <p className="text-center mt-2">HouseWarming Gifts</p>
        </div>
      </div>

      {/* Housewarming */}
      <div className="col-md-3">
        <div className="occasion-card">
          <img src={gift4} className="occasion-img" alt="Housewarming" />
          <p className="text-center mt-2">Aniversary Gifts</p>
        </div>
      </div>

      {/* Congratulations */}
      <div className="col-md-3">
        <div className="occasion-card">
          <img src={gift5} className="occasion-img" alt="Congratulations" />
          <p className="text-center mt-2">Congratulations</p>
        </div>
      </div>

      {/* Anniversary */}
      <div className="col-md-6">
        <div className="occasion-card">
          <img src={gift6} className="occasion-img" alt="Anniversary" />
          <p className="text-center mt-2">ThankYou Gifts</p>
          
        </div>
      </div>

    </div>
  </div>
</div>



<div className="container desk-con py-5">
  <h2 className="lead fs-4 text-center fw-normal text-success mb-4">
    New Arrivals
  </h2>

  <div className="slider-container">
    <div className="slider-track">

      <img src={deskimg1} alt="" />
      <img src={deskimg2} alt="" />
      <img src={deskimg3} alt="" />
      <img src={deskimg4} alt="" />
      <img src={deskimg5} alt="" />
      <img src={deskimg6} alt="" />
      <img src={deskimg7} alt="" />

      {/* Duplicate for seamless loop */}
      <img src={deskimg1} alt="" />
      <img src={deskimg2} alt="" />
      <img src={deskimg3} alt="" />
      <img src={deskimg4} alt="" />
      <img src={deskimg5} alt="" />
      <img src={deskimg6} alt="" />
      <img src={deskimg7} alt="" />

    </div>
  </div>

  <div className="text-center mt-4">
    <a href="/plants" className="read-more-btn">
      Read More →
    </a>
  </div>
</div>


<div className="container py-5">
 <div className="compare-wrapper mx-auto">
  <ReactCompareImage
    leftImage={slide1}
    rightImage={slide2}
    sliderLineWidth={2}
  />
</div>
</div>


             <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                   <h4 className="text-center fw-normal text-success mb-4">
        Smart Watering Solutions
    </h4>
    <p className="lead fs-6">
                 Keep your plants healthy and hydrated with efficient watering tools designed for effortless plant care ✨
                </p>
                </div>
<div className="container py-4 px-6 justify-content-center">
 <div className=" row justify-content-center gx-2">


<div className="col-md-2 text-center">
  <div className="img-banner overflow-hidden rounded-4">
   <img
    src={watsol1}
    className="img-fluid rounded-4"
    alt=""
    style={{
      height: "220px",
      width: "180px",
      objectFit: "cover"
    }}
  />

  <div className="mt-4">
    <Link
  to="/buynow"
  state={{
    name: "Peace lily",
    price: "₹699",
    image: watsol1,
    
  }}
  className="btn  btn-outline-success rounded-pill px-2 w-50"
>
  Buy
</Link>  
  </div>
  </div>
</div>



<div className="col-md-2 text-center">
  <div className="img-banner overflow-hidden rounded-4">
   <img
    src={watsol2}
    className="img-fluid rounded-4"
    alt=""
    style={{
      height: "220px",
      width: "180px",
      objectFit: "cover"
    }}
  />

  <div className="mt-4">
    <Link
  to="/buynow"
  state={{
    name: "Peace lily",
    price: "₹699",
    image: watsol2,
    
  }}
  className="btn  btn-outline-success rounded-pill px-2 w-50"
>
  Buy
</Link>  
  </div>
  </div>

</div>

<div className="col-md-2 text-center">
  <div className="img-banner overflow-hidden rounded-4">
   <img
    src={watsol3}
    className="img-fluid rounded-4"
    alt=""
    style={{
      height: "220px",
      width: "180px",
      objectFit: "cover"
    }}
  />

  <div className="mt-4">
    <Link
  to="/buynow"
  state={{
    name: "Peace lily",
    price: "₹699",
    image: watsol3,
    
  }}
  className="btn  btn-outline-success rounded-pill px-2 w-50"
>
  Buy
</Link>  
  </div>
  </div>

</div>


<div className="col-md-2 text-center">
  <div className="img-banner overflow-hidden rounded-4">
   <img
    src={watsol4}
    className="img-fluid rounded-4"
    alt=""
    style={{
      height: "220px",
      width: "180px",
      objectFit: "cover"
    }}
  />

  <div className="mt-4">
     <Link
  to="/buynow"
  state={{
    name: "Peace lily",
    price: "₹699",
    image: watsol4,
    
  }}
  className="btn  btn-outline-success rounded-pill px-2 w-50"
>
  Buy
</Link>  
  </div>
  </div>

</div>

  </div>
</div>
   <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                   <h4 className="text-center fw-normal text-success mb-4">
        Stylish Plant Stands
    </h4>
    <p className="lead fs-6">
                Elevate your greenery with elegant plant stands that enhance both plant display and home decor✨
                </p>
                </div>
<div className="container py-4 px-6 justify-content-center">
 <div className=" row justify-content-center gx-2">


<div className="col-md-2 text-center">
  <div className="img-banner overflow-hidden rounded-4">
   <img
    src={stand1}
    className="img-fluid rounded-4"
    alt=""
    style={{
      height: "220px",
      width: "180px",
      objectFit: "cover"
    }}
  />

  <div className="mt-4">
    <Link
  to="/buynow"
  state={{
    name: "Peace lily",
    price: "₹699",
    image: stand1,
    
  }}
  className="btn  btn-outline-success rounded-pill px-2 w-50"
>
  Buy
</Link>  
  </div>
  </div>

</div>

<div className="col-md-2 text-center">
  <div className="img-banner overflow-hidden rounded-4">
   <img
    src={stand3}
    className="img-fluid rounded-4"
    alt=""
    style={{
      height: "220px",
      width: "180px",
      objectFit: "cover"
    }}
  />

  <div className="mt-4">
    <Link
  to="/buynow"
  state={{
    name: "Peace lily",
    price: "₹699",
    image: stand3,
    
  }}
  className="btn  btn-outline-success rounded-pill px-2 w-50"
>
  Buy
</Link>  
  </div>
  </div>

</div>

<div className="col-md-2 text-center">
  <div className="img-banner overflow-hidden rounded-4">
   <img
    src={stand2}
    className="img-fluid rounded-4"
    alt=""
    style={{
      height: "220px",
      width: "180px",
      objectFit: "cover"
    }}
  />

  <div className="mt-4">
    <Link
  to="/buynow"
  state={{
    name: "Peace lily",
    price: "₹699",
    image: stand2,
    
  }}
  className="btn  btn-outline-success rounded-pill px-2 w-50"
>
  Buy
</Link>  
  </div>
  </div>

</div>

<div className="col-md-2 text-center">
  <div className="img-banner overflow-hidden rounded-4">
   <img
    src={stand4}
    className="img-fluid rounded-4"
    alt=""
    style={{
      height: "220px",
      width: "180px",
      objectFit: "cover"
    }}
  />

  <div className="mt-4">
    <Link
  to="/buynow"
  state={{
    name: "Peace lily",
    price: "₹699",
    image: stand4
    
  }}
  className="btn  btn-outline-success rounded-pill px-2 w-50"
>
  Buy
</Link>  
  </div>
  </div>

</div>



<div className="col-md-2 text-center">
  <div className="img-banner overflow-hidden rounded-4">
   <img
    src={stand5}
    className="img-fluid rounded-4"
    alt=""
    style={{
      height: "220px",
      width: "180px",
      objectFit: "cover"
    }}
  />

  <div className="mt-4">
    <Link
  to="/buynow"
  state={{
    name: "Peace lily",
    price: "₹699",
    image: stand5,
    
  }}
  className="btn  btn-outline-success rounded-pill px-2 w-50"
>
  Buy
</Link>  
  </div>
  </div>

</div>

  </div>
</div>




{/* <Swiper
  modules={[Navigation, Autoplay]}
  spaceBetween={1}
  slidesPerView={4}
  navigation
  autoplay={{ delay: 3000 }}
  loop={true}
  breakpoints={{
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 4 },
  }}
>
  <SwiperSlide>
 <div className="col-md-2 text-center">
  <div className="img-banner overflow-hidden rounded-4">
   <img
    src={stand5}
    className="img-fluid rounded-4"
    alt=""
    style={{
      height: "220px",
      width: "180px",
      objectFit: "cover"
    }}
  />

  <div className="mt-4">
    <button className="btn btn-outline-success rounded-pill px-4">
      Explore
    </button>
  </div>
  </div>

</div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="col-md-2 text-center">
  <div className="img-banner overflow-hidden rounded-4">
   <img
    src={stand4}
    className="img-fluid rounded-4"
    alt=""
    style={{
      height: "220px",
      width: "180px",
      objectFit: "cover"
    }}
  />

  <div className="mt-4">
    <button className="btn btn-outline-success rounded-pill px-4">
      Explore
    </button>
  </div>
  </div>

</div>
  </SwiperSlide>

  <SwiperSlide>
<div className="col-md-2 text-center">
  <div className="img-banner overflow-hidden rounded-4">
   <img
    src={stand3}
    className="img-fluid rounded-4"
    alt=""
    style={{
      height: "220px",
      width: "180px",
      objectFit: "cover"
    }}
  />

  <div className="mt-4">
    <button className="btn btn-outline-success rounded-pill px-4">
      Explore
    </button>
  </div>
  </div>

</div>
  </SwiperSlide>

  <SwiperSlide>
<div className="col-md-2 text-center">
  <div className="img-banner overflow-hidden rounded-4">
   <img
    src={stand2}
    className="img-fluid rounded-4"
    alt=""
    style={{
      height: "220px",
      width: "180px",
      objectFit: "cover"
    }}
  />

  <div className="mt-4">
    <button className="btn btn-outline-success rounded-pill px-4">
      Explore
    </button>
  </div>
  </div>

</div>
  </SwiperSlide>
  <SwiperSlide>
<div className="col-md-2 text-center">
  <div className="img-banner overflow-hidden rounded-4">
   <img
    src={stand1}
    className="img-fluid rounded-4"
    alt=""
    style={{
      height: "220px",
      width: "180px",
      objectFit: "cover"
    }}
  />

  <div className="mt-4">
    <button className="btn btn-outline-success rounded-pill px-4">
      Explore
    </button>
  </div>
  </div>

</div>
  </SwiperSlide>
 

 
</Swiper> */}



<Footer/>


        </>
    )
}
export default Shop