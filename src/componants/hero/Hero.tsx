import img from '../../assets/aboutimg.jpeg';
import img1 from '../../assets/snakeplant.jpg'
import img2 from '../../assets/moneyplant.jpg'
import img3 from '../../assets/peacelilyplant.jpg'
import img4 from '../../assets/about2img.jpeg'
import img5 from '../../assets/plantlogo2.png'
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Hero() {
  return (
    <>
    {/* section1 */}
     
    <div className="card text-dark">
     
      <img src={img} className="img-fluid m-0" alt="..."/>
              <div className=" py-10 col-lg-6 card-img-overlay ">
            <h1 className="display-5 fw-bold text-success lh-1 mb-3">Bring Nature</h1>
            <h1 className="display-5 fw-bold text-success lh-1 mb-3">Into Your Home.</h1>
            <p className="lead">
                Beautifull indoor and outdoor 
            </p>
            <p className="lead">
                 plants to make your space greener.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <button type="button" className=" btn btn-success btn-sm px-2 me-md-2">Shop Now</button>
                <button type="button" className="btn btn-outline-success btn-sm px-2">Learn More</button>
            </div>
        </div>
</div>

{/* section2 */}

<div className="container py-3"> 
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className=" display-4 fw-normal text-success">Popular Plants</h1>
        </div>
       <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      <img src={img1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Snake Plant</h5>
        <p className="card-text text-success">$500</p>
        <button type="button" className="btn btn-outline-success btn-sm px-2">Buy Now</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={img2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Money Plant</h5>
        <p className="card-text text-success">$400</p>
        <button type="button" className="btn btn-outline-success btn-sm px-2">Buy Now</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={img3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Peact Lily</h5>
        <p className="card-text text-success">$800</p>
        <button type="button" className="btn btn-outline-success btn-sm px-2">Buy Now</button>
      </div>
    </div>
  </div>
</div>
</div>


 {/* section3 */}

 <div className="card text-dark">
     
      <img src={img4} className="img-fluid m-0" alt="..."/>
              <div className=" col-lg-6 card-img-overlay ">
            
            <h1 className=" display-5 fw-bold text-success lh-1 mb-3">About Us</h1>
            
           
            <p className="lead text-body-emphasis">
                Green Orchid Nursery – Mahindra City established since 1990 on a sprawling campus of many acres right on the Chennai – Trichy GST road opposite to Mahindra City has been serving both the hobbyist and professionals for 30 years or more and has gained an excellent reputation for rare plants and trees among the garden enthusiast. 

Green Orchid City Garden Center – Chennai City was established 2020 in the southern part of the city to cater to the needs of city dwellers, with more emphasis on indoor, balcony and terrace garden
            </p>
           
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                
                <button type="button" className="btn btn-outline-success text-body-emphasis btn-sm px-2">Read More</button>
            </div>
           
        </div>
</div>

{/* session4 */}

<div className="container  px-4 py-5" id="featured-3">
    <h2 className=" text-success pb-2 border-bottom">Why Choose Us</h2>
    <div className=" row g-3 py-5 row-cols-1 row-cols-lg-4">
        <div className=" feature col">
            <div
                className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
            >
                {/* <svg className="bi" width="1em" height="1em" aria-hidden="true"><use xlink:href="#collection"></use></svg> */}
            </div>
            <h3 className="fs-2 text-body-emphasis">Fresh Plant</h3>
            <p>
                Our plants are carefully selected and nurtured to ensure freshness, vibrant growth, and long-lasting beauty for your home or garden.
            </p>
          
        </div>
        <div className="feature col">
            <div
                className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
            >
               
            </div>
            <h3 className="fs-2 text-body-emphasis">Fast Delivery</h3>
            <p>
                Enjoy quick and reliable delivery services that bring healthy plants straight to your doorstep, safely and on time.
            </p>
           
        </div>
        <div className="feature col">
            <div
                className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
            >
               
            </div>
            <h3 className="fs-2 text-body-emphasis">Affortable Price</h3>
            <p>
                We offer high-quality plants at budget-friendly prices, making it easy for everyone to create a beautiful green space.
            </p>
           
        </div>
        <div className="feature col">
            <div
                className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
            >
             
            </div>
            <h3 className="fs-2 text-body-emphasis">Easy Plant Care</h3>
            <p>
                Our plants are beginner-friendly and come with simple care instructions, helping you keep them healthy with minimal effort.
            </p>
            
        </div>
        
    </div>
</div>



    </>
  )
}
export default Hero;