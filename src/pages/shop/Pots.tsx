// import img1 from '../../assets/snakeplant.jpg'
// import img2 from '../../assets/moneyplant.jpg'
// import img3 from '../../assets/peacelilyplant.jpg'
// import img4 from '../../assets/indoorplant.jpg'
import { Link } from "react-router-dom";
// import succulent1 from '../../assets/succulentPlant1.jpg'
// import succulent2 from '../../assets/succulentPlant2.jpg'
// import succulent3 from '../../assets/SucculentPlant3.jpg'
// import mango from '../../assets/treeimg1.webp'
// import guava from '../../assets/treeimg2.webp'
// import coconut from '../../assets/treeimg3.jpg'
// import marigold from '../../assets/flowerimg2.webp'
// import lavender from '../../assets/flowerimg3.jpg'
// import orchid from '../../assets/flowerimg1.avif'
// import tulsi from '../../assets/herbsimg1.webp'
// import mint from '../../assets/herbsimg2.avif'
// import aloevera from '../../assets/herbsimg3.webp'
// import Bougainvillea from '../../assets/outdoorplantimg1.png'
// import Ixora from '../../assets/outdoorplantimg2.jpg'
// import Jasmine from '../../assets/outdoorimg3.webp'
// import plantsimglogo from '../../assets/plantsimglogo.avif'
// import potsimglogo from'../../assets/potsimglogo.avif'
// import fertilizer from '../../assets/fertilizerimglogo.avif'
// import tools from '../../assets/toolsimglogo.jpg'
import Footer from '../../componants/footer/Footer'
import Header from '../../componants/header/Header'
import './Pots.css'

import pot1 from '../../assets/pots/pot1a.webp'
import pot2 from '../../assets/pots/pot2.webp'
import pot3 from '../../assets/pots/pot3.webp'
import pot4 from '../../assets/pots/pot4.webp'
import pot5 from '../../assets/pots/pot5.webp'
import pot6 from '../../assets/pots/pot6.webp'
import pot7 from '../../assets/pots/pot7.webp'
import pot8 from '../../assets/pots/pot8.webp'
import pot9 from '../../assets/pots/pot9.webp'
import pot10 from '../../assets/pots/pot10.webp'
import pot11 from '../../assets/pots/pot11.webp'
import pot12 from '../../assets/pots/pot12.webp'
import pot13 from '../../assets/pots/pot13.webp'
import pot14 from '../../assets/pots/pot14.webp'
import pot15 from '../../assets/pots/pot15.webp'
import pot16 from '../../assets/pots/pot16.webp'


function Pots(){
    return(
        <>
        <Header/>
<div className="container py-5">
     <h5 className="text-center fw-normal text-success mb-4">
       POTS AND PLANTERS
    </h5>

<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="/shop">Shop</a></li>
    <li className="breadcrumb-item active" aria-current="page">Pots</li>
  </ol>
</nav>

    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">

       
        <div className="col">
            <div className="card product-card h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={pot1}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Ceramic Planter                    </h6>

                    <h5 className="text-success fw-bold">
₹799                    </h5>

                    <p className="small text-muted">
Premium ceramic pot with elegant finish.                    </p>

<Link
  to="/buynow"
  state={{
    name: "Ceramic Planter",
    price: "₹799",
    image: pot1,
  }}
  className="btn btn-outline-success w-100"
>
  Buy Now
</Link>  
                </div>
            </div>
        </div>
                <div className="col">
            <div className="card product-card h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={pot2}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Fiber Pot                    </h6>

                    <h5 className="text-success fw-bold">
₹599                    </h5>

                    <p className="small text-muted">
Lightweight and weather-resistant planter.                    </p>

<Link
  to="/buynow"
  state={{
    name: "Fiber Pot  ",
    price: "₹599",
    image: pot2,
  }}
  className="btn btn-outline-success w-100"
>
  Buy Now
</Link>  
                </div>
            </div>
        </div>
                <div className="col">
            <div className="card product-card h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={ pot3}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Hanging Basket                    </h6>

                    <h5 className="text-success fw-bold">
₹399                    </h5>

                    <p className="small text-muted">
Perfect for balconies and indoor décor.                    </p>

<Link
  to="/buynow"
  state={{
    name: "Hanging Basket ",
    price: "₹399",
    image: pot3,
  }}
  className="btn btn-outline-success w-100"
>
  Buy Now
</Link>  
                </div>
            </div>
        </div>

                      <div className="col">
            <div className="card product-card h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={ pot4}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Self-Watering Pot                    </h6>

                    <h5 className="text-success fw-bold">
₹999                    </h5>

                    <p className="small text-muted">
Modern planter with automatic watering system.                    </p>

<Link
  to="/buynow"
  state={{
    name: "Self-Watering Pot ",
    price: "₹999",
    image: pot4,
  }}
  className="btn btn-outline-success w-100"
>
  Buy Now
</Link>  
                </div>
            </div>
        </div>

                      <div className="col">
            <div className="card product-card h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={pot5}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Terracotta Pot
                    </h6>

                    <h5 className="text-success fw-bold">
₹299                    </h5>

                    <p className="small text-muted">
                      
Traditional clay pot with natural drainage.                    </p>

<Link
  to="/buynow"
  state={{
    name: "Terracotta Pot",
    price: "₹399",
    image: pot5,
  }}
  className="btn btn-outline-success w-100"
>
  Buy Now
</Link>  
                </div>
            </div>
        </div>
 
        <div className="col">
            <div className="card product-card h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={pot6}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Metal Plant Stand                    </h6>

                    <h5 className="text-success fw-bold">
₹1,299                    </h5>

                    <p className="small text-muted">
Stylish stand for showcasing plants.                    </p>

<Link
  to="/buynow"
  state={{
    name: "Metal Plant Stand ",
    price: "₹1,299 ",
    image: pot6,
  }}
  className="btn btn-outline-success w-100"
>
  Buy Now
</Link>  
                </div>
            </div>
        </div>
                <div className="col">
            <div className="card product-card h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={pot7}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Wooden Planter Box                    </h6>

                    <h5 className="text-success fw-bold">
₹899                    </h5>

                    <p className="small text-muted">
Rustic planter ideal for herbs and flowers.                    </p>

<Link
  to="/buynow"
  state={{
    name: "Wooden Planter Box ",
    price: "₹899",
    image: pot7,
  }}
  className="btn btn-outline-success w-100"
>
  Buy Now
</Link>  
                </div>
            </div>
        </div>
                <div className="col">
            <div className="card product-card h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={ pot8}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Designer Pot Set                    </h6>

                    <h5 className="text-success fw-bold">
₹1,499                    </h5>

                    <p className="small text-muted">
Decorative set of premium planters.                    </p>

<Link
  to="/buynow"
  state={{
    name: "Designer Pot Set",
    price: "₹1,499",
    image: pot8,
  }}
  className="btn btn-outline-success w-100"
>
  Buy Now
</Link>  
                </div>
            </div>
        </div>

                      <div className="col">
            <div className="card product-card h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={ pot9}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Oval Ceramic Pot                    </h6>

                    <h5 className="text-success fw-bold">
₹699                    </h5>

                    <p className="small text-muted">
Contemporary planter for indoor use.                    </p>

<Link
  to="/buynow"
  state={{
    name: "Oval Ceramic Pot ",
    price: "₹699",
    image: pot9,
  }}
  className="btn btn-outline-success w-100"
>
  Buy Now
</Link>  
                </div>
            </div>
        </div>

                      <div className="col">
            <div className="card product-card h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={ pot10}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Balcony Railing Planter
                    </h6>

                    <h5 className="text-success fw-bold">
₹549                    </h5>

                    <p className="small text-muted">
                      
Space-saving planter for balconies.                    </p>

<Link
  to="/buynow"
  state={{
    name: "Balcony Railing Planter",
    price: "₹459",
    image: pot10,
  }}
  className="btn btn-outline-success w-100"
>
  Buy Now
</Link>  
                </div>
                
            </div>
        </div>

                    <div className="col">
            <div className="card product-card h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={ pot11}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Terracotta Pot
                    </h6>

                    <h5 className="text-success fw-bold">
₹299                    </h5>

                    <p className="small text-muted">
                      
Traditional clay pot with natural drainage.                    </p>

<Link
  to="/buynow"
  state={{
    name: "Terracotta Pot",
    price: "₹299 ",
    image: pot11,
  }}
  className="btn btn-outline-success w-100"
>
  Buy Now
</Link>  
                </div>
                
            </div>
        </div>
                            <div className="col">
            <div className="card product-card h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={ pot12}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Wooden Planter Box
                    </h6>

                    <h5 className="text-success fw-bold">
₹899                    </h5>

                    <p className="small text-muted">
                      
Rustic planter ideal for herbs and flowers.                    </p>

<Link
  to="/buynow"
  state={{
    name: "Wooden Planter Box",
    price: "₹899 ",
    image: pot12,
  }}
  className="btn btn-outline-success w-100"
>
  Buy Now
</Link>  
                </div>
                
            </div>
        </div>

                            <div className="col">
            <div className="card product-card h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={ pot13}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Designer Pot Set
                    </h6>

                    <h5 className="text-success fw-bold">
                     ₹1,499
                    </h5>

                    <p className="small text-muted">
                      
Decorative set of premium planters.                    </p>

<Link
  to="/buynow"
  state={{
    name: "Designer Pot Set",
    price:  "₹1,499",
    image: pot13,
  }}
  className="btn btn-outline-success w-100"
>
  Buy Now
</Link>  
                </div>
                
            </div>
        </div>
                                    <div className="col">
            <div className="card product-card h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={ pot14}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Oval Ceramic Pot
                    </h6>

                    <h5 className="text-success fw-bold">
₹699                    </h5>

                    <p className="small text-muted">
                      
Contemporary planter for indoor use.                    </p>

<Link
  to="/buynow"
  state={{
    name: "Oval Ceramic Pot",
    price: "₹699",
    image: pot14,
  }}
  className="btn btn-outline-success w-100"
>
  Buy Now
</Link>  
                </div>
                
            </div>
        </div>
                                    <div className="col">
            <div className="card product-card h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={ pot15}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Balcony Railing Planter
                    </h6>

                    <h5 className="text-success fw-bold">
                     ₹599                    </h5>

                    <p className="small text-muted">
                      
Space-saving planter for balconies.                    </p>

<Link
  to="/buynow"
  state={{
    name: "Balcony Railing Planter",
    price: "₹599",
    image: pot15,
  }}
  className="btn btn-outline-success w-100"
>
  Buy Now
</Link>  
                </div>
                
            </div>
        </div>
                                    <div className="col">
            <div className="card product-card h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={ pot16}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Ceramic Planter
                    </h6>

                    <h5 className="text-success fw-bold">
                     ₹799
                    </h5>

                    <p className="small text-muted">
                      
Premium ceramic pot with elegant finish.                    </p>

<Link
  to="/buynow"
  state={{
    name: "Ceramic Planter",
    price: "₹799",
    image: pot16,
  }}
  className="btn btn-outline-success w-100"
>
  Buy Now
</Link>  
                </div>
                
            </div>
        </div>
    </div>
    </div>

{/* <div>
    <h5>Pots & Planters That Turn Any Space Into a Living, Breathing Home</h5>
    <p>Plants bring life. But the right pot or planter is what truly completes the feeling.</p>
    <p>Across Indian homes — from small balconies to spacious terraces — one common struggle exists:</p>
    <p>plants look good, but the space still feels unfinished, messy, or mismatched.</p>
    <ul>
        <li>How your space looks</li>
        <li>How your plants grow</li>
        <li>And how easy your daily care becomes</li>
    </ul>
    <p>The right pots & planters don’t just hold plants — they elevate your entire home experience.</p>
</div> */}



<div className="container py-5">

    {/* About Section */}
    <div className="mb-5 fw-light lh-sm fs-6 text-start">
        <h2 className="fw-sm fs-5 text-start text-success mb-4">
            Pots & Planters That Turn Any Space Into a Living, Breathing Home
        </h2>

        <p>
           A beautiful plant deserves an equally beautiful planter. The right pot not only supports healthy plant growth but also enhances the overall appearance of your home or garden.
        </p>

        <p>
            Across Indian homes — from small balconies to spacious terraces — one common struggle exists:
        </p>

        <p>
            Available in various shapes, sizes, colors, and materials, modern planters blend functionality with style. Whether you prefer a contemporary look or a classic design, the perfect planter can elevate any indoor or outdoor space.
        </p>
       
    <p>More than just containers, pots and planters help create organized, elegant, and visually appealing green environments.</p>
    </div>
    
</div>
    
<Footer/>


        </>
    )
}
export default Pots