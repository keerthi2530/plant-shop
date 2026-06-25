
import { Link } from "react-router-dom";
import Footer from '../../componants/footer/Footer'
import Header from '../../componants/header/Header'
import ferti1 from '../../assets/stand/ferti1.jpg'
import ferti2 from '../../assets/stand/ferti1.webp'
import ferti3 from '../../assets/stand/ferti3.jpg'
import ferti4 from '../../assets/stand/ferti4.jpg'
import ferti5 from '../../assets/stand/ferti5.webp'
import ferti6 from '../../assets/stand/ferti16.webp'
import ferti7 from '../../assets/stand/ferti7.webp'
import ferti8 from '../../assets/stand/ferti8.jpg'
import ferti9 from '../../assets/stand/ferti9.webp'
import ferti10 from '../../assets/stand/ferti10.webp'
import ferti11 from '../../assets/stand/ferti11.webp'
import ferti12 from '../../assets/stand/ferti12.webp'
import ferti13 from '../../assets/stand/ferti13.webp'
import ferti14 from '../../assets/stand/ferti14.webp'
import ferti15 from '../../assets/stand/ferti15.webp'
import ferti16 from '../../assets/stand/ferti16.webp'


function Fertilizer(){
    return(
        <>
        <Header/>
        <div className="container py-5">
     <h5 className="text-center fw-normal text-success mb-4">
       FERTILIZER
    </h5>

<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="/shop">Shop</a></li>
    <li className="breadcrumb-item active" aria-current="page">Fertilizer</li>
  </ol>
</nav>


  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
     <div className="col">
            <div className="card product-card h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={ferti1}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Organic Vermicompost                    </h6>

                    <h5 className="text-success fw-bold">
₹249                    </h5>

                    <p className="small text-muted">
                        Luxury tropical indoor plant.
                    </p>
<Link
  to="/buynow"
  state={{
    name: "Organic Vermicompost",
    price: "₹249",
    image: ferti1,
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
                    src={ferti2}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Neem Cake Powder                    </h6>

                    <h5 className="text-success fw-bold">
                       ₹199
                    </h5>

                    <p className="small text-muted">
Natural fertilizer and pest repellent.                    </p>
<Link
  to="/buynow"
  state={{
    name: "Neem Cake Powder",
    price: "₹199",
    image: ferti2,
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
                    src={ferti3}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
                        Seaweed Fertilizer
                    </h6>

                    <h5 className="text-success fw-bold">
                       ₹349
                    </h5>

                    <p className="small text-muted">
                       Enhances root development and flowering.
                    </p>
<Link
  to="/buynow"
  state={{
    name: "Seaweed Fertilizer",
    price: "₹349",
    image: ferti3,
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
                    src={ferti4}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Bone Meal                    </h6>

                    <h5 className="text-success fw-bold">
                       ₹299
                    </h5>

                    <p className="small text-muted">
Organic fertilizer rich in phosphorus.                    </p>
<Link
  to="/buynow"
  state={{
    name: "Bone Meal",
    price: "₹299",
    image: ferti4,
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
                    src={ferti5}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Coco Peat Mix                    </h6>

                    <h5 className="text-success fw-bold">
₹199                    </h5>

                    <p className="small text-muted">
Improves soil aeration and moisture retention.                    </p>
<Link
  to="/buynow"
  state={{
    name: "Coco Peat Mix",
    price: "₹199",
    image: ferti5,
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
                    src={ferti6}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
NPK Fertilizer                    </h6>

                    <h5 className="text-success fw-bold">
₹399                    </h5>

                    <p className="small text-muted">
Balanced nutrition for all types of plants.                    </p>
<Link
  to="/buynow"
  state={{
    name: "NPK Fertilizer",
    price: "₹399",
    image: ferti6,
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
                    src={ferti7}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Plant Growth Booster                    </h6>

                    <h5 className="text-success fw-bold">
                       ₹299
                    </h5>

                    <p className="small text-muted">
Promotes faster and healthier growth.                    </p>
<Link
  to="/buynow"
  state={{
    name: "Plant Growth Booster",
    price: "₹299",
    image: ferti7,
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
                    src={ferti8}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Flowering Fertilizer                    </h6>

                    <h5 className="text-success fw-bold">
                      ₹349
                    </h5>

                    <p className="small text-muted">
Encourages abundant blooms and flowering.                    </p>
<Link
  to="/buynow"
  state={{
    name: "Flowering Fertilizer",
    price: "₹349",
    image: ferti8,
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
                    src={ferti9}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Organic Potting Mix                    </h6>

                    <h5 className="text-success fw-bold">
                      ₹249
                    </h5>

                    <p className="small text-muted">
Ready-to-use soil mix for potted plants.                    </p>
<Link
  to="/buynow"
  state={{
    name: "Organic Potting Mix",
    price: "₹249",
    image: ferti9,
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
                    src={ferti10}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Liquid Plant Food                    </h6>

                    <h5 className="text-success fw-bold">
₹299                    </h5>

                    <p className="small text-muted">
Easy-to-apply nutrient solution for plants.                    </p>
<Link
  to="/buynow"
  state={{
    name: "Liquid Plant Food",
    price: "₹299",
    image: ferti10,
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
                    src={ferti11}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Organic Vermicompost                    </h6>

                    <h5 className="text-success fw-bold">
                       ₹249
                    </h5>

                    <p className="small text-muted">
Nutrient-rich compost for healthy plant growth.                    </p>
<Link
  to="/buynow"
  state={{
    name: "Organic Vermicompost",
    price: "₹249",
    image: ferti11,
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
                    src={ferti12}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Seaweed Fertilizer                    </h6>

                    <h5 className="text-success fw-bold">
                       ₹349
                    </h5>

                    <p className="small text-muted">
Enhances root development and flowering.                    </p>
<Link
  to="/buynow"
  state={{
    name: "Seaweed Fertilizer",
    price: "₹349",
    image: ferti12,
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
                    src={ferti13}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Bone Meal                    </h6>

                    <h5 className="text-success fw-bold">
                       ₹499
                    </h5>

                    <p className="small text-muted">
Organic fertilizer rich in phosphorus.                    </p>
<Link
  to="/buynow"
  state={{
    name: "Bone Meal",
    price: "₹499",
    image: ferti13,
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
                    src={ferti14}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Coco Peat Mix                    </h6>

                    <h5 className="text-success fw-bold">
                       ₹199
                    </h5>

                    <p className="small text-muted">
Improves soil aeration and moisture retention.                    </p>
<Link
  to="/buynow"
  state={{
    name: "Coco Peat Mix",
    price: "₹199",
    image: ferti14,
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
                    src={ferti15}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
                       NPK Fertilizer
                    </h6>

                    <h5 className="text-success fw-bold">
                       ₹399
                    </h5>

                    <p className="small text-muted">
                        Luxury tropical indoor plant.
                    </p>
<Link
  to="/buynow"
  state={{
    name: "NPK Fertilizer",
    price: "₹399",
    image: ferti15,
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
                    src={ferti16}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
                       Plant Growth Booster
                    </h6>

                    <h5 className="text-success fw-bold">
                       ₹299
                    </h5>

                    <p className="small text-muted">
                        Luxury tropical indoor plant.
                    </p>
<Link
  to="/buynow"
  state={{
    name: "Plant Growth Booster",
    price: "₹299",
    image: ferti16,
  }}
  className="btn btn-outline-success w-100"
>
  Buy Now
</Link>              </div>
            </div>
        </div>

</div>
  </div>


  <div className="container py-5">

    {/* About Section */}
    <div className="mb-5 fw-light lh-sm fs-6 text-start">
        <h2 className="fw-sm fs-5 text-start text-success mb-4">
            Essential Nutrition for Healthy Plant Growth
        </h2>

        <p>
          
Just like people need balanced nutrition, plants require essential nutrients to grow strong, healthy, and vibrant. Fertilizers replenish the nutrients lost from the soil and support continuous growth throughout the year.
        </p>

        <p>
            
Regular fertilization encourages greener leaves, stronger roots, brighter flowers, and higher yields in fruit and vegetable plants. Choosing the right fertilizer helps plants thrive naturally while maintaining long-term soil health.
        </p>

        <p>
            Available in various shapes, sizes, colors, and materials, modern planters blend functionality with style. Whether you prefer a contemporary look or a classic design, the perfect planter can elevate any indoor or outdoor space.
        </p>
       
    <p>Healthy soil leads to healthy plants, and healthy plants create beautiful gardens.</p>
    </div>
    
</div>




<Footer/>


        </>
    )
}
export default Fertilizer