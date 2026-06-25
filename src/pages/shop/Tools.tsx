import tool1 from '../../assets/tools/tool1.webp'
import tool2 from '../../assets/tools/tool2.webp'
import tool3 from '../../assets/tools/tool3.webp'
import tool4 from '../../assets/tools/tool4.webp'
import tool5 from '../../assets/tools/tool5.webp'
import tool6 from '../../assets/tools/tool6.webp'
import tool7 from '../../assets/tools/tool7.webp'
import tool8 from '../../assets/tools/tool8.webp'
import tool9 from '../../assets/tools/tool9.webp'
import tool10 from '../../assets/tools/tool10.webp'
import tool11 from '../../assets/tools/tool11.webp'
import tool12 from '../../assets/tools/tool12.webp'
import tool13 from '../../assets/tools/tool13.webp'
import tool14 from '../../assets/tools/tool14.webp'
import tool15 from '../../assets/tools/tool15.webp'
import tool16 from '../../assets/tools/tool16.webp'
import Header from '../../componants/header/Header'
import Footer from '../../componants/footer/Footer'
import { Link } from "react-router-dom";


function Tools(){
    return(
        <>
        <Header/>
<div className="container py-5">
     <h5 className="text-center fw-normal text-success mb-4">
       GARDENING TOOLS
    </h5>

<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="/shop">Shop</a></li>
    <li className="breadcrumb-item active" aria-current="page">Tools</li>
  </ol>
</nav>


  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
     <div className="col">
            <div className="card product-card h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={tool1}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Garden Trowel                    </h6>

                    <h5 className="text-success fw-bold">
                       ₹249
                    </h5>

                    <p className="small text-muted">
Essential tool for planting and digging.                    </p>
<Link
  to="/buynow"
  state={{
    name: "Garden Trowel",
    price: "₹249",
    image: tool1,
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
                    src={tool2}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Hand Cultivator                    </h6>

                    <h5 className="text-success fw-bold">
₹299                    </h5>

                    <p className="small text-muted">
Loosens soil and removes weeds easily.                    </p>
<Link
  to="/buynow"
  state={{
    name: "Hand Cultivator",
    price: "₹299",
    image: tool2,
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
                    src={tool3}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Pruning Shears                    </h6>

                    <h5 className="text-success fw-bold">
                       ₹599
                    </h5>

                    <p className="small text-muted">
Sharp cutter for trimming branches and stems.                    </p>
<Link
  to="/buynow"
  state={{
    name: "Pruning Shears",
    price: "₹599",
    image: tool3,
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
                    src={tool4}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Weeding Tool                    </h6>

                    <h5 className="text-success fw-bold">
                       ₹399
                    </h5>

                    <p className="small text-muted">
Removes weeds efficiently without damaging roots.                    </p>
<Link
  to="/buynow"
  state={{
    name: "Weeding Tool",
    price: "₹399",
    image: tool4,
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
                    src={tool5}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Garden Tool Kit                    </h6>

                    <h5 className="text-success fw-bold">
                       ₹1,299
                    </h5>

                    <p className="small text-muted">
Complete set of essential gardening tools.                    </p>
<Link
  to="/buynow"
  state={{
    name: "Garden Tool Kit",
    price: "₹1,299",
    image: tool5,
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
                    src={tool6}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
                        Monstera Deliciosa
                    </h6>

                    <h5 className="text-success fw-bold">
                       ₹1,999
                    </h5>

                    <p className="small text-muted">
                        Luxury tropical indoor plant.
                    </p>
<Link
  to="/buynow"
  state={{
    name: "Snake Plant",
    price: "₹499",
    image: tool6,
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
                    src={tool7}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Plant Support Stakes                    </h6>

                    <h5 className="text-success fw-bold">
                       ₹199
                    </h5>

                    <p className="small text-muted">
Provides support for climbing plants.                    </p>
<Link
  to="/buynow"
  state={{
    name: "Plant Support Stakes",
    price: "₹199",
    image: tool7,
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
                    src={tool8}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Garden Trowel                    </h6>

                    <h5 className="text-success fw-bold">
₹249                    </h5>

                    <p className="small text-muted">
Essential tool for planting and digging.                    </p>
<Link
  to="/buynow"
  state={{
    name: "Garden Trowel",
    price: "₹249",
    image: tool8,
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
                    src={tool9}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Pruning Shears                    </h6>

                    <h5 className="text-success fw-bold">
                       ₹599
                    </h5>

                    <p className="small text-muted">
                Sharp cutter for trimming branches and stems.
                    </p>
<Link
  to="/buynow"
  state={{
    name: "Snake Plant",
    price: "₹599",
    image: tool9,
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
                    src={tool10}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Spray Pump                    </h6>

                    <h5 className="text-success fw-bold">
                      ₹699
                    </h5>

                    <p className="small text-muted">
Ideal for fertilizers and pest control sprays.                    </p>
<Link
  to="/buynow"
  state={{
    name: "Spray Pump",
    price: "₹699",
    image: tool10,
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
                    src={tool11}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Weeding Tool                    </h6>

                    <h5 className="text-success fw-bold">
₹349                    </h5>

                    <p className="small text-muted">
                       Removes weeds efficiently without damaging roots.
                    </p>
<Link
  to="/buynow"
  state={{
    name: "Weeding Tool",
    price: "₹349",
    image: tool11,
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
                    src={tool12}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
Garden Tool Kit                    </h6>

                    <h5 className="text-success fw-bold">
₹1,299                    </h5>

                    <p className="small text-muted">
Complete set of essential gardening tools.                    </p>
<Link
  to="/buynow"
  state={{
    name: "Garden Tool Kit",
    price: "₹1,299",
    image: tool12,
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
                    src={tool13}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
                        Monstera Deliciosa
                    </h6>

                    <h5 className="text-success fw-bold">
                       ₹1,999
                    </h5>

                    <p className="small text-muted">
                        Luxury tropical indoor plant.
                    </p>
<Link
  to="/buynow"
  state={{
    name: "Snake Plant",
    price: "₹499",
    image: tool13,
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
                    src={tool14}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
                        Monstera Deliciosa
                    </h6>

                    <h5 className="text-success fw-bold">
                       ₹1,999
                    </h5>

                    <p className="small text-muted">
                        Luxury tropical indoor plant.
                    </p>
<Link
  to="/buynow"
  state={{
    name: "Snake Plant",
    price: "₹499",
    image: tool14,
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
                    src={tool15}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
                        Monstera Deliciosa
                    </h6>

                    <h5 className="text-success fw-bold">
                       ₹1,999
                    </h5>

                    <p className="small text-muted">
                        Luxury tropical indoor plant.
                    </p>
<Link
  to="/buynow"
  state={{
    name: "Snake Plant",
    price: "₹499",
    image: tool15,
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
                    src={tool16}
                    className="card-img-top product-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
                        Monstera Deliciosa
                    </h6>

                    <h5 className="text-success fw-bold">
                       ₹1,999
                    </h5>

                    <p className="small text-muted">
                        Luxury tropical indoor plant.
                    </p>
<Link
  to="/buynow"
  state={{
    name: "Snake Plant",
    price: "₹499",
    image: tool16,
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
            Make Gardening Easier with the Right Tools
        </h2>

        <p>
           Gardening becomes more enjoyable and efficient when you have the proper tools. From planting and pruning to watering and maintenance, quality garden tools help simplify every gardening task.
        </p>

        <p>
            Whether you're caring for a small collection of indoor plants or managing a large garden, reliable tools improve precision, save time, and reduce effort. Durable and easy-to-use equipment allows gardeners of all experience levels to maintain healthy, thriving plants.
        </p>

        <p>
            Available in various shapes, sizes, colors, and materials, modern planters blend functionality with style. Whether you prefer a contemporary look or a classic design, the perfect planter can elevate any indoor or outdoor space.
        </p>
       
    <p>The right tools turn gardening from a chore into a rewarding experience.</p>
    </div>
    
</div>






<Footer/>


        </>
    )
}
export default Tools