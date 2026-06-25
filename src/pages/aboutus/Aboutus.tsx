// import img from '../../assets/aboutimg.jpeg';
import Footer from '../../componants/footer/Footer';
import Header from '../../componants/header/Header';
// import img1 from '../../assets/aboutimg2.webp';
import offer1 from '../../assets/offer/offerimg1.webp'
import offer2 from '../../assets/offer/offerimg2.jpg'
import offer3 from '../../assets/offer/offerimg3.webp'
import img2 from '../../assets/aboutplant.jpg'
import img3 from '../../assets/serviceimg2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faTag,faHandHoldingDroplet, faSeedling } from '@fortawesome/free-solid-svg-icons';
import './About.css'
import reviewimg1 from '../../assets/publicreview/reviewimg1.avif'
import reviewimg2 from '../../assets/publicreview/reviewimg2.avif'
import reviewimg3 from '../../assets/publicreview/reviewimg3.avif'
import reviewimg4 from '../../assets/publicreview/reviewimg4.avif'
import reviewimg5 from '../../assets/publicreview/reviewimg5.avif'
import reviewimg6 from '../../assets/publicreview/reviewimg6.avif'
import reviewimg7 from '../../assets/publicreview/reviewimg7.avif'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import aboutimg from '../../assets/gift/gift6.webp'

function Aboutus() {
    return (
        <>
            <Header />


            {/* session2 */}
            {/* <div>
                <h1 className="display-5 mt-4  fw-normal text-success lh-1 mb-3">About Us</h1>
            </div> */}

            <div id="carouselExampleAutoplaying" className="carousel slide "data-bs-interval="5000" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={offer1} className="img-fluid d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={offer2} className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={offer3} className="d-block w-100" alt="..."/>
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
</div>


 <div className=" container py-4 mb-2 fw-normal lh-sm  fs-5 text-start m-auto">
        <h2 className="lead fw-sm fs-4 text-start text-success mb-4">
            How It All Started
        </h2>

        <p className='lead fw-sm fs-6'>
            At FloraVerse, our journey began with a simple love for plants and nature. We wanted to make it easier for people to bring greenery into their homes, workplaces, and everyday lives. What started as a small passion project soon grew into a trusted plant destination, offering healthy plants, stylish planters, fertilizers, and gardening essentials. Today, we continue to inspire greener living by helping our customers create beautiful, vibrant, and sustainable spaces.As more people discovered the joy of gardening, our commitment to quality and customer satisfaction helped us grow. Today, we proudly serve plant lovers across the country, inspiring greener lifestyles and helping create beautiful, vibrant, and sustainable spaces for generations to come.
        </p>

    </div>


    
            <div className="container-fluid hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Side */}
                        <div className="col-lg-4 text-start">
                            <span className="badge rounded-pill text-success bg-success bg-opacity-25 p-3">
                                 Delivered with Love to 1000+ Customers
                            </span>

                            <p className="lead fw-sm fs-6 mt-4">
                              
Over the years, we have proudly delivered plants, planters, and gardening essentials to more than 1000 happy customers. Every order is carefully packed and handled with care to ensure healthy, fresh plants reach their new homes. From first-time plant parents to experienced gardeners, our customers trust us for quality products, reliable service, and a shared passion for bringing nature closer to everyday life.
                            </p>
                        </div>

                        {/* Right Side */}
                       <div className="col-lg-4 position-relative text-center">

  <img
    src={aboutimg}
    className="img-fluid rounded-circle about-img"
    alt=""
  />

</div>
 <div className="col-lg-4 text-start">
                            <span className="badge rounded-pill text-success bg-success bg-opacity-25 p-3">
  Growing Happiness Across 1000+ Homes
</span>

                          <p className="lead fw-sm fs-6 mt-4">
We believe every plant brings life, peace, and positivity into a home. Over time, we have helped more than 1000+ customers create their own green spaces with our carefully selected plants and gardening essentials. Each order is prepared with extra care to ensure plants arrive fresh, healthy, and ready to thrive. Whether you're starting your first indoor garden or expanding your green collection.
</p>
                        </div>
                    </div>
                </div>
            </div>

             {/* session4 */}



            {/* session3*/}



           
            {/* session5 */}
            {/* <div className="container-fluid bg-success p-2 text-dark bg-opacity-10 px-4 py-5">
                <div className='lead row py-5 g-3  '>
                    <div className='col'>
                        <FontAwesomeIcon icon={faSeedling} size="2xl" style={{ color: "rgb(1, 141, 59)", }} />
                        <h3 className='text-success'>2,500+</h3>
                        <p>Happy Customer</p>
                    </div>
                    <div className='col'>
                        <FontAwesomeIcon icon={faSpa} size="2xl" style={{ color: "rgb(1, 141, 59)", }} />
                        <h3 className='text-success'>1000+</h3>
                        <p>Plants Delivery</p>
                    </div>
                    <div className='col'>
                        <FontAwesomeIcon icon={faTree} size="2xl" style={{ color: "rgb(1, 141, 59)", }} />
                        <h3 className='text-success'>50+</h3>
                        <p>Plants Variety</p>
                    </div>
                    <div className='col'>
                        <FontAwesomeIcon icon={faShield} size="2xl" style={{ color: "rgb(1, 141, 59)", }} />
                        <h3 className='text-success'>100%</h3>
                        <p>Quality Assurance</p>
                    </div>
                </div>
            </div>
 */}

<div className="row row-cols-1 row-cols-md-2 g-2 m-auto">

  <div className="col">
    <div className="card m-auto">
      <img src={img3} className="card-img-center" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Mission</h5>
        <p className="card-text"> Our Mission is to provide top-quality plants, excellent customer service, and helpful plant care quidance to help your own green space.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card m-auto">
      <img src={img2} className="card-img-center" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">vission</h5>
        <p className="card-text">Greeny Plant Shop was started with a simple idea- to make the world a greener and happier place.  We are passionate about plants and dedicated to providing healthy, beautiful plants for your home, office, and garden.</p>
      </div>
    </div>
  </div>
</div>





<div className='review-card2'>
   <h4 className="text-center text-success fw-semibold mb-1 my-5 py-5">
Our Customers Feedback  </h4>



<Swiper
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
    <div className="review-card">
      <img src={reviewimg1} alt="" className="review-img" />

      <div className="rating">⭐⭐⭐⭐</div>

      <h6 className="fw-bold mt-2">Priya Sharma – Chennai</h6>

      <small className="text-muted">
        "The plants arrived healthy and beautifully packed. My living room feels so much fresher now!"
— Priya Sharma, Chennai
      </small>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="review-card">
      <img src={reviewimg2} alt="" className="review-img" />

      <div className="rating">⭐⭐⭐⭐⭐</div>

      <h6 className="fw-bold mt-2">Arjun Mehta – Bengaluru</h6>

      <small className="text-muted">
       "Excellent quality and timely delivery. Every plant exceeded my expectations."
— Arjun Mehta, Bengaluru
      </small>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="review-card">
      <img src={reviewimg3} alt="" className="review-img" />



      <div className="rating">⭐⭐⭐⭐</div>

      <h6 className="fw-bold mt-2">Sneha Reddy – Hyderabad</h6>

      <small className="text-muted">
      "The planters are stylish and the customer service was outstanding."
— Sneha Reddy, Hyderabad
      </small>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="review-card">
      <img src={reviewimg4} alt="" className="review-img" />


      <div className="rating">⭐⭐⭐⭐</div>

      <h6 className="fw-bold mt-2">Rahul Verma – Mumbai</h6>

      <small className="text-muted">
       "A wonderful shopping experience. My balcony garden looks amazing now!"
— Rahul Verma, Mumbai
      </small>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="review-card">
      <img src={reviewimg5} alt="" className="review-img" />

      <div className="rating">⭐⭐⭐⭐⭐</div>

      <h6 className="fw-bold mt-2">Kavya Nair – Kochi</h6>

      <small className="text-muted">
       "Healthy plants, secure packaging, and fast delivery. Highly recommended!"
— Kavya Nair, Kochi 💚
      </small>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="review-card">
      <img src={reviewimg6} alt="" className="review-img" />

      <div className="rating">⭐⭐⭐</div>

      <h6 className="fw-bold mt-2">Ananya Iyer - Bengaluru</h6>

      <small className="text-muted">
        "The plants arrived healthy and beautifully packed. My living room feels so much fresher now!"
— Ananya Iyer, Chennai
      </small>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="review-card">
      <img src={reviewimg7} alt="" className="review-img" />

      <div className="rating">⭐⭐⭐⭐⭐</div>

      <h6 className="fw-bold mt-2">Vikram Patel - Hyderabad</h6>

      <small className="text-muted">
       "Excellent quality and timely delivery. Highly recommended for plant lovers."
— Vikram Patel, Bengaluru 
      </small>
    </div>
  </SwiperSlide>
 
</Swiper>
</div>

            <div className="container col-xxl-8 px-4 py-1">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
               

<div className="container py-5 my-2 animate__animated animate__zoomIn">
    <h2 className="text-center fw-normal text-success mb-4 m-auto">
        Why Choose Us ?
    </h2>
    <p className="lead fs-6">
                    Our mission is to make plants accessible to everyone.
                    ✨
                </p>

    <div className="row g-1 m-auto">

    

        <div className="col-md-2 m-auto">
            <div className="category-card text-center">
                <div className="category-icon">
<FontAwesomeIcon icon={faTruck} size='xs' style={{color: "rgb(6, 6, 6)",}} /> </div>
                <p>Fast Delivery</p>
            </div>
        </div>

        <div className="col-md-2 m-auto" >
            <div className="category-card text-center">
                <div className="category-icon"><FontAwesomeIcon icon={faTag} size="xs" style={{color: "rgb(6, 6, 6)",}} /></div>
                <p>Affortable Price</p>
            </div>
        </div>

        <div className="col-md-2 m-auto">
            <div className="category-card text-center">
                <div className="category-icon">
<FontAwesomeIcon icon={faHandHoldingDroplet} size="xs" style={{color: "rgb(6, 6, 6)",}} /></div>
                <p>Easy plant Care</p>
            </div>
        </div>

            <div className="col-md-2 m-auto">
            <div className="category-card text-center">
                <div className="category-icon"><FontAwesomeIcon icon={faSeedling} size="xs" style={{color: "rgb(6, 6, 6)",}} /></div>
                <p>Fresh Plants</p>
            </div>
        </div>

       </div>
            </div>

    </div>
</div>
            <Footer />
        </>
    )
}
export default Aboutus;

