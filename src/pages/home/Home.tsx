// import img from '../../assets/aboutimg.jpeg';
import img1 from "../../assets/plants/snakeplant.jpg";
import img2 from "../../assets/plants/moneyplant.jpg";
import img3 from "../../assets/plants/peacelilyplant.jpg";
import bamboo from "../../assets/plants/bambootree.webp";
// import img4 from '../../assets/about2img.jpeg'
// import img5 from '../../assets/plantlogo2.png'
import Header from "../../componants/header/Header";
import Footer from "../../componants/footer/Footer";
// import img from "../../assets/aboutplant.jpg";
// import img9 from "../../assets/plantlogo2.png";
// import succulent3 from "../../assets/SucculentPlant3.jpg";
import openshop from "../../assets/opentowork.jpg";
import "animate.css";
// import img4 from "../../assets/indoorplant.jpg";
// import img5 from "../../assets/outdoorplant.jpg";
// import img6 from "../../assets/outdoorimg3.webp";
// import img7 from "../../assets/fruitstree.jpg";
// import img10 from "../../assets/Bonsai Pots.webp";
// import img11 from "../../assets/Ceramic Pots.webp";
// import img12 from "../../assets/Fiber Pots & Planters.jpg";
// import img13 from "../../assets/Perennial Annual Flowers.jpg";
// import img14 from "../../assets/herbs.webp";
// import img8 from "../../assets/templetree.webp";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone, faAt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import MonsteraDeliciosa from '../../assets/plants/montesoraplant.jpg'
import FiddleLeafFig from '../../assets/plants/FiddleLeafFig.jpg'
import  BirdofParadise from '../../assets/plants/BirdofParadise.jpg'
import ArecaPalm from '../../assets/plants/ArecaPalm.jpg'
import RubberPlant from '../../assets/plants/RubberPlant.jpg'
import contentimg from '../../assets/Gemini_Generated_Image_xi2bf0xi2bf0xi2b.png'
import contentimg2 from '../../assets/contentimg2.webp'
import serimg1 from '../../assets/services/servicegrid1.webp'
import serimg2 from '../../assets/services/servicegrid2.webp'
import serimg3 from '../../assets/services/servicegrid3.webp'
import serimg4 from '../../assets/services/servicegrid4.webp'
import { Link } from "react-router-dom";
import pro1 from '../../assets/project/pro1.webp'
import pro2 from '../../assets/project/pro2.webp'
import pro3 from '../../assets/project/pro3.webp'
import pro4 from '../../assets/project/pro4.webp'
import pro5 from '../../assets/project/pro5.webp'
import pro6 from '../../assets/project/pro6.webp'
import pro7 from '../../assets/project/pro7.webp'
import pro8 from '../../assets/project/pro8.webp'
import pro9 from '../../assets/project/pro9.webp'


function Home() {
    return (
        <>
            <Header />

            <div className="container-fluid occasion-section hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Side */}
                        <div className="col-lg-6">
                            <span className="badge rounded-pill text-success bg-success bg-opacity-10 p-3">
                                🌿 India's Premium Plant Store
                            </span>

                            <h1 className="display-4 fw-bold mt-4">Bring Nature</h1>

                            <h1 className="display-4 fw-bold text-success fst-italic">Indoors</h1>

                            <p className=" lead fs-6 mt-4">
                                Discover hundreds of hand-picked plants, premium pots, and professional gardening
                                equipment delivered right to your door.
                            </p>
<Link to="./shop">
                            <button className="btn btn-success btn-sm rounded-pill me-3">Shop Now</button>
                            </Link>

                            <button className="btn btn-success btn-sm rounded-pill me-3"><a href="#pre-ind-plt" className=" text-white text-decoration-none">Featured picks</a></button>

                            <div className="d-flex gap-5 mt-5 display-10 justify-content-center">
                                <div>
                                    <h5 className="text-success">500+</h5>
                                    <p>Plant varieties</p>
                                </div>

                                <div>
                                    <h5  className="text-success">10k+</h5>
                                    <p>Happy customers</p>
                                </div>

                                <div>
                                    <h5  className="text-success">4.8★</h5>
                                    <p>Average rating</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="col-lg-6 position-relative ">
                            <img src={openshop} className=" pro-img img-fluid rounded-5 zoom-image" alt="" />

                            <div className="temp-card">
                                🌡️ 18-24°C
                                <p>Ideal indoor temp</p>
                            </div>

                            <div className="water-card">
                                💧 Weekly
                                <p>Easy watering</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}

            {/* section2 */}
{/* 
            <div className="container py-3 animate__animated animate__animate__zoomIn ">
                <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                    <h1 className=" display-0 fw-normal text-success">Popular Plants</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4 ">
                  
                    <div className="col">
                      <div className="card product-card border-0 shadow-sm h-100">
                        <div className=" m-2">
                            <span className="badge bg-light text-dark rounded-pill">Best Seller</span>
                        </div>

                        <img src={img1} className="card-img-top product-img" alt="Snake Plant" />

                        <div className="card-body">
                            <h6 className="card-title">Snack Plant Indoor Decorative Plant</h6>

                            <p>
                                <strong>4.7 ⭐</strong>
                                <span className="text-muted"> (7k)</span>
                            </p>

                            <p>
                                <span className="fw-bold text-success">₹500</span>
                                <span className="text-decoration-line-through text-muted ms-1">₹700</span>
                                <span className="text-success ms-1">(28% off)</span>
                            </p>

                            <p className="text-muted">Free delivery</p>

                            <button className="btn btn-outline-success w-50">Explore</button>
                        </div>
                    </div>
                    </div>

                    <div className="col">
                    <div className="card product-card border-0 shadow-sm h-100">
                        <div className=" m-2">
                            <span className="badge bg-light text-dark rounded-pill">Best Seller</span>
                        </div>

                        <img src={img2} className="card-img-top product-img" alt="Snake Plant" />

                        <div className="card-body">
                            <h6 className="card-title">money plant Indoor Decorative Plant</h6>

                            <p>
                                <strong>4.7 ⭐</strong>
                                <span className="text-muted"> (7k)</span>
                            </p>

                            <p>
                                <span className="fw-bold text-success">₹500</span>
                                <span className="text-decoration-line-through text-muted ms-1">₹700</span>
                                <span className="text-success ms-1">(28% off)</span>
                            </p>

                            <p className="text-muted">Free delivery</p>

                            <button className="btn btn-outline-success w-50">Explore</button>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card product-card border-0 shadow-sm h-100">
                        <div className=" m-2">
                            <span className="badge bg-light text-dark rounded-pill">Best Seller</span>
                        </div>

                        <img src={img3} className="card-img-top product-img" alt="Snake Plant" />

                        <div className="card-body">
                            <h6 className="card-title">peace lily plant Indoor Decorative Plant</h6>

                            <p>
                                <strong>4.7 ⭐</strong>
                                <span className="text-muted"> (7k)</span>
                            </p>

                            <p>
                                <span className="fw-bold text-success">₹500</span>
                                <span className="text-decoration-line-through text-muted ms-1">₹700</span>
                                <span className="text-success ms-1">(28% off)</span>
                            </p>

                            <p className="text-muted">Free delivery</p>

                            <button className="btn btn-outline-success w-50">Explore</button>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card product-card border-0 shadow-sm h-100">
                        <div className=" m-2">
                            <span className="badge bg-light text-dark rounded-pill">Best Seller</span>
                        </div>

                        <img src={bamboo} className="card-img-top product-img" alt="Snake Plant" />

                        <div className="card-body">
                            <h6 className="card-title">Bamboo Tree Indoor Decorative Plant</h6>

                            <p>
                                <strong>4.7 ⭐</strong>
                                <span className="text-muted"> (7k)</span>
                            </p>

                            <p>
                                <span className="fw-bold text-success">₹500</span>
                                <span className="text-decoration-line-through text-muted ms-1">₹700</span>
                                <span className="text-success ms-1">(28% off)</span>
                            </p>

                            <p className="text-muted">Free delivery</p>

                            <button className="btn btn-outline-success w-50">Explore</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div> */}


             <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                   <h2 className="text-center fw-normal text-success mb-4">
        Grow More Save More
    </h2>
    <p className="lead fs-6">
                    From elegant indoor plants to majestic trees, discover nature's finest selections for every space.
                    ✨
                </p>
                </div>
<div className="container py-3">
 <div className="row gx-0">

    <div className="col-md-3">
  <div className="img-banner position-relative overflow-hidden rounded-4">

    <img
      src={serimg1}
      className="img-fluid w-100 "
      alt=""
      style={{ height: "350px", objectFit: "cover" }}
    />

   <div className="position-absolute bottom-0 start-0 p-2 text-white fw-bold">
      <h3 className="fw-bold">Upto 80% Off</h3>
      <p>On Indoor Plants</p>
    </div>

  </div>
</div>

       <div className="col-md-3">
  <div className="img-banner position-relative overflow-hidden rounded-4">

    <img
      src={serimg2}
      className="img w-100"
      alt=""
      style={{ height: "350px", objectFit: "cover" }}
    />

    <div className="position-absolute bottom-0 start-0 p-2 text-white fw-bold">
      <h3 className="fw-bold">Upto 80% Off</h3>
      <p>On Indoor Plants</p>
    </div>

  </div>
</div>

         <div className="col-md-3">
  <div className="img-banner position-relative overflow-hidden rounded-4">

    <img
      src={serimg3}
      className="img w-100"
      alt=""
      style={{ height: "350px", objectFit: "cover" }}
    />

    <div className="position-absolute bottom-0 start-0 p-2 text-white fw-bold">
      <h3 className="fw-bold">Upto 80% Off</h3>
      <p>On Indoor Plants</p>
    </div>

  </div>
</div>

       <div className="col-md-3">
  <div className="img-banner position-relative overflow-hidden rounded-4">

    <img
      src={serimg4}
      className="img w-100"
      alt=""
      style={{ height: "350px", objectFit: "cover" }}
    />

    <div className="position-absolute bottom-0 start-0 p-2 text-white fw-bold">
      <h3 className="fw-bold">Upto 80% Off</h3>
      <p>On Indoor Plants</p>
    </div>

  </div>
</div>
  </div>
</div>


            
<div className="container py-5 mb-4 animate__animated animate__slideInRight">
    <h2 className="text-center fw-normal text-success mb-4">
        Shop By Categories
    </h2>
    <p className="lead fs-6">
                    From elegant indoor plants to majestic trees, discover nature's finest selections for every space.
                    ✨
                </p>

    <div className="row g-4 justify-content-center">

       

        <div className="col-md-2">
            <div className="category-card text-center">
                
                <div className="category-icon">🌿</div>
                <p>Plants</p>
            </div>
        </div>

        <div className="col-md-2">
            <div className="category-card text-center">
                <div className="category-icon">🛠️</div>
                <p>Garden Tools</p>
            </div>
        </div>

        <div className="col-md-2">
            <div className="category-card text-center">
                <div className="category-icon">🏺</div>
                <p>Pots & Planters</p>
            </div>
        </div>

        <div className="col-md-2">
            <div className="category-card text-center">
                <div className="category-icon">🪱</div>
                <p>Soil & Fertilizers</p>
            </div>
        </div>

    </div>
</div>

<div className="d-flex">
    <img className="con-img " src={contentimg}/>
    <img  className="con-img  " src={contentimg2}/>
</div>

{/* <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={contentimg} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={contentimg2} className="d-block w-100" alt="..."/>
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}


<div id="pre-ind-plt" className="container py-5">
     <h2 className="text-center fw-normal text-success mb-4">
        Premium Indoor Plants
    </h2>

    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-1">

       
        <div className="col">
            <div className="card pre-ind-plt h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={MonsteraDeliciosa}
                    className="card-img-top pre-ind-plt-img"
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
<Link to="/plants"><button className="btn btn-outline-success w-100">Explore</button></Link>
                    
                </div>
            </div>
        </div>
                <div className="col">
            <div className="card pre-ind-plt h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={FiddleLeafFig}
                    className="card-img-top pre-ind-plt-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
                        Fiddle Leaf Fig
                    </h6>

                    <h5 className="text-success fw-bold">
                       ₹2,499
                    </h5>

                    <p className="small text-muted">
                        Designer favorite statement plant.
                    </p>

                    <Link to="/plants"><button className="btn btn-outline-success w-100">Explore</button></Link>
                </div>
            </div>
        </div>
                <div className="col">
            <div className="card pre-ind-plt h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={ BirdofParadise}
                    className="card-img-top pre-ind-plt-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
                       Bird of Paradise
                    </h6>

                    <h5 className="text-success fw-bold">
                      ₹2,999
                    </h5>

                    <p className="small text-muted">
                       Premium resort-style greenery
                    </p>

<Link to="/plants"><button className="btn btn-outline-success w-100">Explore</button></Link>            </div>
            </div>
        </div>

                      <div className="col">
            <div className="card pre-ind-plt h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={ ArecaPalm}
                    className="card-img-top pre-ind-plt-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
                       Areca Palm
                    </h6>

                    <h5 className="text-success fw-bold">
                      ₹1,799
                    </h5>

                    <p className="small text-muted">
                       Elegant air-purifying palm plant
                    </p>

<Link to="/plants"><button className="btn btn-outline-success w-100">Explore</button></Link>             </div>
            </div>
        </div>

                      <div className="col">
            <div className="card pre-ind-plt h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={ RubberPlant}
                    className="card-img-top pre-ind-plt-img"
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
                      
Modern luxury decor plant
                    </p>

<Link to="/plants"><button className="btn btn-outline-success w-100">Explore</button></Link>              </div>
            </div>
        </div>

                      <div className="col">
            <div className="card pre-ind-plt h-100 border-0 shadow-sm">
                <div className="wishlist-btn">♡</div>

                <img
                    src={ img3}
                    className="card-img-top pre-ind-plt-img"
                    alt="Snake Plant"
                />

                <div className="card-body text-center">
                    <h6 className="fw-bold">
                      White Peace Lily

                    </h6>

                    <h5 className="text-success fw-bold">
                    ₹1,299
                    </h5>

                    <p className="small text-muted">
                      
Beautiful flowering indoor plant.
                    </p>

<Link to="/plants"><button className="btn btn-outline-success w-100">Explore</button></Link>               </div>
            </div>
        </div>


    </div>
</div>

<div className="container py-5">

    {/* About Section */}
    <div className="mb-5 fw-light lh-sm fs-6 text-start">
        <h2 className="fw-sm fs-5 text-start text-success mb-4">
            Floraverse
        </h2>

        <p>
            NatureWorld is a trusted online destination for plant lovers,
            offering a wide range of indoor plants, outdoor plants,
            succulents, herbs, gardening tools, and plant care essentials.
            Our goal is to make gardening simple, enjoyable, and accessible
            for everyone.
        </p>

        <p>
            Founded with a passion for nature and sustainable living,
            NatureWorld helps people bring greenery into their homes,
            offices, and outdoor spaces. We carefully select healthy
            plants and high-quality gardening products to ensure the
            best experience for our customers.
        </p>

        <p>
            In addition to plants and gardening supplies, we provide
            useful tips, guides, and resources to help beginners and
            experienced gardeners grow and care for their plants
            successfully.
        </p>
    </div>

    {/* Why Plants Matter */}
    {/* <div className="mb-5">
        <h2 className="fw-bold text-success mb-4">
            Why Plants Matter
        </h2>

        <ul className="lh-lg">
            <li>
                <strong>Aesthetic Appeal:</strong> Plants add natural beauty,
                freshness, and color to homes, offices, and gardens.
            </li>

            <li>
                <strong>Health Benefits:</strong> Many plants improve indoor
                air quality by filtering pollutants and releasing oxygen.
            </li>

            <li>
                <strong>Environmental Impact:</strong> Plants support
                biodiversity, absorb carbon dioxide, and contribute to a
                greener planet.
            </li>

            <li>
                <strong>Home Gardening:</strong> Growing herbs, fruits, and
                vegetables provides fresh and healthy produce.
            </li>

            <li>
                <strong>Learning and Growth:</strong> Gardening encourages
                creativity, responsibility, and a deeper connection with nature.
            </li>

            <li>
                <strong>Mental Wellness:</strong> Spending time with plants
                promotes relaxation and emotional well-being.
            </li>
        </ul>
    </div> */}

    {/* Customer Rating Summary */}
    {/* <div className="row align-items-center py-5 border-top border-bottom">

        <div className="col-md-3 text-center">
            <h1 className="text-warning fw-bold">4.8 ★</h1>
            <p className="text-muted">Based on 10,000 Reviews</p>
        </div>

        <div className="col-md-6">

            <div className="d-flex align-items-center mb-2">
                <span className="me-2">5★</span>
                <div className="progress flex-grow-1">
                    <div
                        className="progress-bar bg-success"
                        style={{ width: "80%" }}
                    ></div>
                </div>
                <span className="ms-2">80%</span>
            </div>

            <div className="d-flex align-items-center mb-2">
                <span className="me-2">4★</span>
                <div className="progress flex-grow-1">
                    <div
                        className="progress-bar bg-success"
                        style={{ width: "15%" }}
                    ></div>
                </div>
                <span className="ms-2">15%</span>
            </div>

            <div className="d-flex align-items-center mb-2">
                <span className="me-2">3★</span>
                <div className="progress flex-grow-1">
                    <div
                        className="progress-bar bg-warning"
                        style={{ width: "3%" }}
                    ></div>
                </div>
                <span className="ms-2">3%</span>
            </div>

            <div className="d-flex align-items-center mb-2">
                <span className="me-2">2★</span>
                <div className="progress flex-grow-1">
                    <div
                        className="progress-bar bg-danger"
                        style={{ width: "1%" }}
                    ></div>
                </div>
                <span className="ms-2">1%</span>
            </div>

            <div className="d-flex align-items-center">
                <span className="me-2">1★</span>
                <div className="progress flex-grow-1">
                    <div
                        className="progress-bar bg-danger"
                        style={{ width: "1%" }}
                    ></div>
                </div>
                <span className="ms-2">1%</span>
            </div>

        </div>

        <div className="col-md-3 text-center mt-3 mt-md-0">
            <button className="btn btn-success px-4 py-2">
                Write a Review
            </button>
        </div>

    </div> */}

    

</div>





            <Footer />
        </>
    );
}
export default Home;
