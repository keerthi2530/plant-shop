import plant1 from '../../assets/plants/snakeplant.jpg'
import plant2 from '../../assets/plants/moneyplant.jpg'
import plant3 from '../../assets/plants/peacelilyplant.jpg'
import plant15 from '../../assets/plants/indoorplant.jpg'
import { Link } from "react-router-dom";
import Footer from '../../componants/footer/Footer'
import Header from '../../componants/header/Header'
import plant4 from '../../assets/plants/succulentPlant1.jpg'
import plant5 from '../../assets/plants/succulentPlant2.jpg'
import plant6 from '../../assets/plants/SucculentPlant3.jpg'
import plant7 from '../../assets/plants/flowerimg3.jpg'
import plant8 from '../../assets/plants/flowerimg1.avif'
import plant9 from '../../assets/plants/outdoorplantimg1.png'
import './Shop.css'
import plant10 from '../../assets/plants/montesoraplant.jpg'
import plant11 from '../../assets/plants/FiddleLeafFig.jpg'
import  plant12 from '../../assets/plants/BirdofParadise.jpg'
import plant13 from '../../assets/plants/ArecaPalm.jpg'
import plant14 from '../../assets/plants/RubberPlant.jpg'
import plant16 from '../../assets/plants/bambootree.webp'



function Plants(){
    return( 
        <>
    
        <Header/>
<div className="container py-5">
     <h5 className="text-center fw-normal text-success mb-4">
       INDOOR / OUTDOOR PLANTS
    </h5>

<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="/shop">Shop</a></li>
    <li className="breadcrumb-item active" aria-current="page">Plants</li>
  </ol>
</nav>

    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">

       
        <div className="col">
            <div className="card product-card h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={plant1}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
                        Snake Plant
                    </h6>

                    <h5 className="text-success fw-bold">
                       ₹499
                    </h5>

                    <p className="small text-muted">
                        Air-purifying indoor plant, low maintenance.
                    </p>

<Link
  to="/buynow"
  state={{
    name: "Snake Plant",
    price: "₹499",
    image: plant2,
  }}
  className="btn btn-outline-success w-100"
>
  Buy Now
</Link>              </div>
            </div>
        </div>
                <div className="col">
            <div className="card product-card h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={plant2}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
                      Money Plant
                    </h6>

                    <h5 className="text-success fw-bold">
                       ₹399
                    </h5>

                    <p className="small text-muted">
                        Lucky indoor plant that grows easily in water or soil.
                    </p>

<Link
  to="/buynow"
  state={{
    name: "Money plant",
    price: "₹399",
    image: plant2,
   
  }}
  className="btn btn-outline-success w-100"
>
  Buy Now
</Link>            </div>
            </div>
        </div>
                <div className="col">
            <div className="card product-card h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={plant3}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
                       Peace Lily
                    </h6>

                    <h5 className="text-success fw-bold">
                      ₹699
                    </h5>

                    <p className="small text-muted">
                       Elegant flowering plant that improves indoor air quality.
                    </p>

<Link
  to="/buynow"
  state={{
    name: "Peace lily",
    price: "₹699",
    image: plant3,
    
  }}
  className="btn btn-outline-success w-100"
>
  Buy Now
</Link>            </div>
            </div>
        </div>

                      <div className="col">
            <div className="card product-card h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={ plant4}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Aloe Vera                    </h6>

                    <h5 className="text-success fw-bold">
₹349                    </h5>

                    <p className="small text-muted">
                      Medicinal succulent known for its healing properties.
                    </p>

<Link
  to="/buynow"
  state={{
    name: "Aloe Vera",
    price: "₹350",
    image: plant4,
  }}
  className="btn btn-outline-success w-100"
>
  Buy Now
</Link>               </div>
            </div>
        </div>

                      <div className="col">
            <div className="card product-card h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={plant5}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Jade Plant
                    </h6>

                    <h5 className="text-success fw-bold">
₹449                    </h5>

                    <p className="small text-muted">
                      
Popular good-luck succulent for homes and offices.                    </p>

                  <Link
  to="/buynow"
  state={{
    name: "Jade plant",
    price: "₹449",
    image: plant5,
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
                    src={plant6}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Lavender Plant                    </h6>

                    <h5 className="text-success fw-bold">
₹599                    </h5>

                    <p className="small text-muted">
Fragrant flowering plant with calming aroma.                    </p>

                  <Link
  to="/buynow"
  state={{
    name: "Lavender Plant",
    price: "₹599",
    image: plant6,
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
                    src={plant7}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Orchid Plant                    </h6>

                    <h5 className="text-success fw-bold">
₹999                    </h5>

                    <p className="small text-muted">
Premium flowering plant with beautiful blooms.                    </p>

                  <Link
  to="/buynow"
  state={{
    name: "Orchid Plant",
    price: "₹999",
    image: plant7,
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
                    src={plant8}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Bougainvillea                    </h6>

                    <h5 className="text-success fw-bold">
₹799                    </h5>

                    <p className="small text-muted">
Vibrant outdoor flowering plant for gardens.                    </p>

                  <Link
  to="/buynow"
  state={{
    name: "Bougainvillea ",
    price: "₹₹799 ",
    image: plant8,
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
                    src={plant9}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Monstera Deliciosa                    </h6>

                    <h5 className="text-success fw-bold">
₹1,499                    </h5>

                    <p className="small text-muted">
Tropical plant with iconic split leaves.                    </p>

                  <Link
  to="/buynow"
  state={{
    name: "Monstera Deliciosa ",
    price: "₹₹1,499 ",
    image: plant9,
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
                    src={plant10}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
                      Rubber Plant

                    </h6>

                    <h5 className="text-success fw-bold">
                     ₹1,499
                    </h5>

                    <p className="small text-muted">
                      
Stylish indoor plant with glossy green foliage.                    </p>

                  <Link
  to="/buynow"
  state={{
    name: " Rubber Plant",
    price: "₹₹1,499",
    image: plant10,
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
                    src={plant11}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Areca Palm
                    </h6>

                    <h5 className="text-success fw-bold">
₹1,799                    </h5>

                    <p className="small text-muted">
                      
Natural air purifier perfect for living rooms.                    </p>

                  <Link
  to="/buynow"
  state={{
    name: "Areca Palm",
    price: "₹₹1,799  ",
    image: plant11,
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
                    src={plant12}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Bird of Paradise
                    </h6>

                    <h5 className="text-success fw-bold">
₹2,499                    </h5>

                    <p className="small text-muted">
                      
Exotic ornamental plant with striking leaves.                    </p>

                  <Link
  to="/buynow"
  state={{
    name: "Bird of Paradise",
    price: "₹₹2,499 ",
    image: plant12,
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
                    src={plant13}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Bamboo Palm
                    </h6>

                    <h5 className="text-success fw-bold">
₹1,199                    </h5>

                    <p className="small text-muted">
                      
Indoor palm ideal for bright spaces.                    </p>

                  <Link
  to="/buynow"
  state={{
    name: "Bamboo Palm",
    price: "₹₹1,199 ",
    image: plant13,
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
                    src={plant14}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Fiddle Leaf Fig
                    </h6>

                    <h5 className="text-success fw-bold">
₹2,299                    </h5>

                    <p className="small text-muted">
                      
Modern decorative plant with large glossy leaves.                    </p>

                  <Link
  to="/buynow"
  state={{
    name: "Fiddle Leaf Fig",
    price: "₹₹2,299",
    image: plant14,
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
                    src={plant15}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Anthurium
                    </h6>

                    <h5 className="text-success fw-bold">
₹899                    </h5>

                    <p className="small text-muted">
                      
Attractive flowering plant with colorful blooms.                    </p>

                  <Link
  to="/buynow"
  state={{
    name: "Anthurium",
    price: "₹899",
    image: plant15,
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
                    src={plant16}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Lucky Bamboo
                    </h6>

                    <h5 className="text-success fw-bold">
₹299                    </h5>

                    <p className="small text-muted">
                      
Symbol of prosperity and positive energy.                    </p>

                  <Link
  to="/buynow"
  state={{
    name: "Lucky Bamboo",
    price: "₹₹299  ",
    image: plant16,
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
        
<div className="container py-5">

    {/* About Section */}
    <div className="mb-5 fw-light lh-sm fs-6 text-start">
        <h2 className="fw-sm fs-5 text-start text-success mb-4">
            
Bring Nature Closer to Your Everyday Life
        </h2>

        <p>
           Plants do more than beautify a space—they create a healthier, fresher, and more relaxing environment. Whether placed in a living room, balcony, office, or garden, plants instantly add natural charm and positive energy.
        </p>

        <p>
           From air-purifying indoor plants to vibrant flowering varieties, every plant has its own unique beauty and benefits. A well-chosen plant can transform any corner into a refreshing green oasis while improving air quality and reducing stress.
        </p>

        <p>
            Available in various shapes, sizes, colors, and materials, modern planters blend functionality with style. Whether you prefer a contemporary look or a classic design, the perfect planter can elevate any indoor or outdoor space.
        </p>
       
    <p>Plants are not just decorations—they are living companions that bring happiness, wellness, and a deeper connection to nature.</p>
    </div>
    
</div>

<Footer/>


        </>
    )
}
export default Plants