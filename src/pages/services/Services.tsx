import img1 from '../../assets/serviceimg1.png'
import img2 from '../../assets/serviceimg2.jpg'
import img3 from '../../assets/serviceimg3.jpg'
import Footer from '../../componants/footer/Footer'
import Header from '../../componants/header/Header'
import organicvilla from '../../assets/services/organicvilla.webp'
import gardening from '../../assets/services/gardeningservice.jpg'
import terrace from '../../assets/services/terracegardening.webp'
import indoorgarden from '../../assets/services/indoorgardening.webp'
import hydraponics from '../../assets/services/hytroponicsservice.jpg'
import herbal from '../../assets/herbs.webp'
import verticalgarden from '../../assets/services/verticalgardening.webp'
import greenhouse from '../../assets/services/greenhouse.webp'
import landscaping from '../../assets/services/labtesting.jpg'
import organicfarming from '../../assets/services/organicfarming.jpg'
import qualitycheck from '../../assets/services/qualitychecking.jpg'
import labtest from '../../assets/services/labtesting.jpg'
import './Service.css'
import pro1 from '../../assets/project/pro1.webp'
import pro2 from '../../assets/project/pro2.webp'
import pro3 from '../../assets/project/pro3.webp'
import pro4 from '../../assets/project/pro4.webp'
import pro5 from '../../assets/project/pro5.webp'
import pro6 from '../../assets/project/pro6.webp'
import pro7 from '../../assets/project/pro7.webp'
import pro8 from '../../assets/project/pro8.webp'
import pro9 from '../../assets/project/pro9.webp'

import { Link } from 'react-router-dom'

function Services() {
  return (
    <>
      <Header />
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h4 className=" fw-normal text-success">Our Expert Green Services</h4>
        <p>An awesome services page finds just the right balance between making it easy to reach and showing the our company Services and details .</p>
      </div>

           <div className="container py-4">
  <div className="row g-3">

    <div className="col-md-4">
      <div className="gallery">
        <img src={organicvilla} className="img-fluid rounded" alt="" />
         <div className="desc">
      <div>
        <h5>Organic Villa Service</h5>
        <p>
          Sustainable gardening solutions designed to create
          healthy and eco-friendly green spaces.
        </p>
      </div>
    </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="gallery">
        <img src={terrace} className="img-fluid rounded" alt="" />
        <div className="desc">
      <div>
        <h5>Terrace Garden Service</h5>
        <p>    
Enhance your interiors with beautiful indoor plants that improve air quality and aesthetics.
        </p>
      </div>
    </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="gallery">
        <img src={indoorgarden} className="img-fluid rounded" alt="" />
         <div className="desc">
      <div>
        <h5>Indoor Garden Service</h5>
        <p>    
Enhance your interiors with beautiful indoor plants that improve air quality and aesthetics.</p>
      </div>
    </div>
      </div>
    </div>

  </div>
</div>
      <div className="container py-4">
  <div className="row g-3">

    <div className="col-md-4">
      <div className="gallery">
        <img src={gardening} className="img-fluid rounded" alt="" />
                 <div className="desc">
      <div>
        <h5>Gardening Service</h5>
        <p>    
Professional gardening care to keep your plants healthy, vibrant, and thriving year-round.</p>      </div>
    </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="gallery">
        <img src={hydraponics} className="img-fluid rounded" alt="" />
                 <div className="desc">
      <div>
        <h5>Hydroponic Service</h5>
        <p>    
Grow plants efficiently without soil using advanced hydroponic systems and expert guidance.  </p>
      </div>
    </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="gallery">
        <img src={herbal} className="img-fluid rounded" alt="" />
                         <div className="desc">
      <div>
        <h5>Herbal Garden Service</h5>
        <p>    
Cultivate medicinal and culinary herbs with our specialized herbal gardening solutions.  </p>
      </div>
    </div>
      </div>
    </div>

  </div>
</div>

<div className="container py-4">
  <div className="row g-3">

    <div className="col-md-4">
      <div className="gallery">
        <img src={verticalgarden} className="img-fluid rounded" alt="" />
                        <div className="desc">
      <div>
        <h5>Vertical Gardening Service</h5>
        <p>    
Maximize small spaces with creative vertical gardens that bring nature to your walls.
  </p>
      </div>
    </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="gallery">
        <img src={greenhouse} className="img-fluid rounded" alt="" />
                               <div className="desc">
      <div>
        <h5>Greenhouse Service
</h5>
        <p>    
Protect and nurture your plants with modern greenhouse design, installation, and maintenance.  </p>
      </div>
    </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="gallery">
        <img src={landscaping} className="img-fluid rounded" alt="" />
                               <div className="desc">
      <div>
        <h5>Landscape Service</h5>
        <p>    
Create stunning outdoor environments with professional landscaping tailored to your space.  </p>
      </div>
    </div>
      </div>
    </div>

  </div>
</div>

<div className="container py-4">
  <div className="row g-3">

    <div className="col-md-4">
      <div className="gallery">
        <img src={organicfarming} className="img-fluid rounded" alt="" />
                               <div className="desc">
      <div>
        <h5>Organic Farming Service</h5>
        <p>    
Promote sustainable agriculture with eco-friendly organic farming methods and support.  </p>
      </div>
    </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="gallery">
        <img src={qualitycheck} className="img-fluid rounded" alt="" />
              <div className="desc">
      <div>
        <h5>Quality Check Service</h5>
        <p>    
Ensure plant health and product excellence through thorough quality inspection and monitoring.  </p>
      </div>
    </div>
          </div>
    </div>

    <div className="col-md-4">
      <div className="gallery">
        <img src={labtest} className="img-fluid rounded" alt="" />
       <div className="desc">
      <div>
        <h5>Lab Testing Service</h5>
        <p>    
Accurate soil, water, and plant testing services to support healthy and productive growth.
</p>
      </div>
    </div>
      </div>
    </div>

  </div>
  <div className="text-center mt-4">
    <a href="/contact" className="read-more-btn">
      Contact for <span>→</span>
    </a>
  </div>
</div>
  

      <div className="container col-xxl-8 px-4 py-2">

        <div className="row flex-lg-row-reverse align-items-center g-5 py-2">
          <div className="col-10 col-sm-8 col-lg-6 slide-up-img">
            <img
              src={img1}
              className="d-block mx-lg-auto rounded-5 img-fluid"
              alt="Bootstrap Themes"
              width="500"
              height="300"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 slide-up-text">
            <h1 className="display-6 fw-light text-success lh-1 mb-3">Landscaping</h1>
            <p className="lead fs-6">
              Beautiful landscaping of any open spaces creates not just green environment but also radiates positive energy. We provide complete solution from Design, Plant selection to installation and planting of plants and trees to your desire.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
              {/* <button type="button" className="btn btn-sm btn-success btn-md px-1 me-md-1">CONTACT</button> */}
       <Link to="/contact">
  <button
    type="button"
    className="btn btn-outline-success btn-sm px-1 rounded-50"
  >
    CONTACT
  </button>
</Link>
            </div>
          </div>
        </div>
      </div>



      <div className="container col-xxl-8 px-4 py-2">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-2">

          <div className="col-lg-6 slide-up-text">
            <h1 className="display-6 fw-light text-success lh-1 mb-3">Gardening service</h1>
            <p className="lead fs-6">
              You have a small or large garden and require gardening service to maintain them on regular basis or do some routine upkeep work, do not hesitate to contact us. We will be happy to assist you in which ever way possible.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
              {/* <button type="button" className="btn btn-sm btn-success btn-md px-2 me-md-1">CONTACT</button> */}
                     <Link to="/contact">
  <button
    type="button"
    className="btn btn-outline-success btn-sm px-1 rounded-50"
  >
    CONTACT
  </button>
</Link>
            </div>
          </div>
          <div className="col-10 col-sm-8 col-lg-6 slide-up-img">
            <img
              src={img2}
              className="d-block mx-lg-auto rounded-5 img-fluid"
              alt="Bootstrap Themes"
              width="500"
              height="300"
              loading="lazy"
            />
          </div>
        </div>
      </div>


      <div className="container col-xxl-8 px-4 py-3 slide-up-text">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-2">
          <div className="col-10 col-sm-8 col-lg-6 slide-up-img">
            <img
              src={img3}
              className="d-block mx-lg-auto rounded-5 img-fluid"
              alt="Bootstrap Themes"
              width="500"
              height="300"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-6 fw-light text-success lh-1 mb-3">farm land development</h1>
            <p className="lead fs-6">
              With ever growing interest in development of personal use farm lands by garden enthusiasts, we have wide range of trees, all kind of fruit trees and avenue trees to cater to development of your farm land.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
              {/* <button type="button" className="btn btn-sm btn-success btn-md px-2 me-md-1">CONTACT</button> */}
                    <Link to="/contact">
  <button
    type="button"
    className="btn btn-outline-success btn-sm px-1 rounded-50"
  >
    CONTACT
  </button>
</Link>
            </div>
          </div>
        </div>
      </div>


<div className="container py-5">
  <h2 className="text-center text-success fw-bold mb-4">
    Our Projects
  </h2>

  <div className="row g-3">

    {/* Row 1 */}
    <div className="col-md-5">
      <img src={pro1} className="project-img" alt="" />
    </div>

    <div className="col-md-2">
      <img src={pro2} className="project-img" alt="" />
    </div>

    <div className="col-md-5">
      <img src={pro3} className="project-img" alt="" />
    </div>

    {/* Row 2 */}
    <div className="col-md-4">
      <img src={pro4} className="project-img" alt="" />
    </div>

    <div className="col-md-4">
      <img src={pro5} className="project-img" alt="" />
    </div>

    <div className="col-md-4">
      <img src={pro6} className="project-img" alt="" />
    </div>

    {/* Row 3 */}
    <div className="col-md-5">
      <img src={pro7} className="project-img" alt="" />
    </div>

    <div className="col-md-2">
      <img src={pro8} className="project-img" alt="" />
    </div>

    <div className="col-md-5">
      <img src={pro9} className="project-img" alt="" />
    </div>

  </div>
   <div className="text-center mt-4">
    <a href="/services" className="read-more-btn">
      For More Details <span>→</span>
    </a>
  </div>
</div>

<div className="container py-5">
  <h4 className="text-center text-success fw-semibold mb-5">
    What our customers say
  </h4>

  <div className="row g-4">
    

    {/* Testimonial 1 */}
    <div className="col-md-4">
      <div className="testimonial-card h-100">
        <div className="quote">❝</div>

        <p>
          We are very happy with your services. The plants are keeping our
          office fresh and vibrant, and the newly added plants are also very
          healthy and lively. Your staff visits regularly as per schedule,
          maintaining everything in a proper manner.
        </p>

        <p>
          I would also like to mention that Mr. Rushikesh has shown great
          potential in fulfilling our requirements, and Mr. Parth always keeps
          in mind our specific needs to ensure complete satisfaction.
        </p>

        <h5 className="mt-4 mb-0 fw-bold">
          Bhagyeshri. Office Manager, GetVantage Tech Pvt. Ltd.
        </h5>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="col-md-4">
      <div className="testimonial-card h-100">
        <div className="quote">❝</div>

        <p>
          We've been associated with NatureWorld for the past three years and
          are extremely pleased with their exceptional plant management
          services. Their team ensures our workspace stays green, vibrant, and
          well-maintained year-round.
        </p>

        <p>
          The staff is professional, proactive, and always open to feedback,
          offering practical solutions tailored to our needs. We highly
          recommend them for their reliability and dedication.
        </p>

        <h5 className="mt-4 mb-0 fw-bold">
          Sanket Yenpure. Facility Manager – C&W
        </h5>
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="col-md-4">
      <div className="testimonial-card h-100">
        <div className="quote">❝</div>

        <p>
          We are happy to have your greens in our premises. It surely brings a
          lot of freshness to our space. We appreciate your services and prompt
          action to our requests from time to time.
        </p>

        <h5 className="mt-4 mb-0 fw-bold">
          Anita. Cravatex Ltd., Mumbai
        </h5>
      </div>
    </div>

  </div>
</div>



      <Footer />


    </>
  )
}
export default Services