import Footer from "../../componants/footer/Footer"
import Header from "../../componants/header/Header"
import './Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone,faEnvelope,faLocationDot,faClock } from "@fortawesome/free-solid-svg-icons"
// import contactimg from '../../assets/about2img.jpeg'
import { useRef } from "react";
import emailjs from "@emailjs/browser";



function Contact(){
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!form.current) return;

  emailjs
    .sendForm(
      "service_na67v3q",
      "template_tqwvosp",
      form.current,
      "yjKKz91CXvPLJFpad"
    )
    .then(() => {
      alert("Message sent successfully!");
      form.current?.reset();
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to send message.");
    });
};
    return(
        <>
        <Header/>

      
<div className="container contact-section">

  <div className="row">
  <div className="card col-md-5 text-start m-auto my-5">

    <h4 className="text-success fw-bold">Send us a message</h4>
    <p className="text-muted">
        Fill out the form below and we'll get back to you as soon as possible.
    </p>

   <form ref={form} onSubmit={sendEmail}>

        <div className="form-floating mb-3">
            <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
            />
            <label htmlFor="name">Name</label>
        </div>

        <div className="form-floating mb-3">
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="name@example.com"
            />
            <label htmlFor="email">Email Address</label>
        </div>

        <div className="form-floating mb-3">
            <input
                type="tel"
                className="form-control"
                id="mobile"
                name="phone"
                placeholder="Enter your mobile number"
            />
            <label htmlFor="mobile">Mobile Number</label>
        </div>

        <div className="form-floating mb-3">
            <textarea
                className="form-control"
                id="address"
                name="address"
                placeholder="Enter your address"
                style={{ height: "100px" }}
            ></textarea>
            <label htmlFor="address">Address</label>
        </div>

        <div className="form-floating mb-3">
            <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="Enter your message"
                style={{ height: "120px" }}
            ></textarea>
            <label htmlFor="message">Message</label>
        </div>

        <button
            className="btn btn-success btn-sm px-3 py-1 rounded-pill"
            type="submit"
        >
            Send Message
        </button>

    </form>

</div>
  <div className="contact-container col-md-5 text-start m-auto ">
  <h2 className="contact-heading">Get In Touch</h2>
  
  <div className="contact-list">
    
    {/* Address */}
    <div className="contact-item">
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faLocationDot} />
      </div>
      <div className="contact-content">
        <span className="contact-label">Address</span>
        <p className="contact-value">123 Green Street, Whitefield,<br />Bangalore, Karnataka 560066, India</p>
      </div>
    </div>

    {/* Phone */}
    <div className="contact-item">
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faPhone} />
      </div>
      <div className="contact-content">
        <span className="contact-label">Phone</span>
        <a href="tel:+919876543210" className="contact-value">+91 98765 43210</a>
      </div>
    </div>

    {/* Email */}
    <div className="contact-item">
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <div className="contact-content">
        <span className="contact-label">Email</span>
        <a href="mailto:info@greenyplants.com" className="contact-value">info@greenyplants.com</a>
      </div>
    </div>

    {/* Working Hours */}
    <div className="contact-item">
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faClock} />
      </div>
      <div className="contact-content">
        <span className="contact-label">Working Hours</span>
        <p className="contact-value mb-1">Monday – Saturday: 9:00 AM – 7:00 PM</p>
        <p className="contact-value">Sunday: 10:00 AM – 5:00 PM</p>
      </div>
    </div>

    {/* WhatsApp */}
    <div className="contact-item">
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faPhone} />
      </div>
      <div className="contact-content">
        <span className="contact-label">WhatsApp</span>
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="contact-value">+91 98765 43210</a>
      </div>
    </div>

  </div>
</div>



        </div>
        </div>


<div className="mt-5 ">
<h3 className=" fw-normal">F.A.Q.</h3>
<p className="fw-light">Some of your usual queries </p>
<div className="accordion w-50 text-center mx-auto" id="accordionExample">
  <div className="accordion-item fs-14">
    <h2 className="accordion-header ">
      <button className="accordion-button  " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne ">
        Do you Cover areas outside chennai
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Yes! we can undertake landscaping projects anywhere in Tamil Nadu.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        What is the minimum area project you undertake?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        No project is too small are large for us, we undertake all size projects.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Do you provide all that is required to finish the project?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Yes we can provide everything you require to complete your vision for your garden. If there is anything that is not within our scope we will inform you in advance.
      </div>
    </div>
  </div>
</div>
</div>

<div className="container py-5 text-start">

  {/* Business Enquiries */}
  <h2 className="fw-normal fs-4 mb-5">Business Enquiries</h2>

  <div className="row g-5 mb-5">

    <div className="col-md-6">
      <div className="d-flex align-items-start">
        <i className="bi bi-truck fs-1 text-success me-4"></i>

        <div>
          <h5 className="fw-normal fs-6">Bulk/Corporate Orders</h5>
          <p className="mb-1">Email: sales@natureworld.com</p>
          <p className="mb-0">Mobile: +91 98765 43210</p>
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="d-flex align-items-start">
        <i className="bi bi-people fs-1 text-success me-4"></i>

        <div>
          <h5 className="fw-normal fs-6">Franchise</h5>
          <p className="mb-1">Email: franchise@natureworld.com</p>
          <p className="mb-0">Mobile: +91 98765 12345</p>
        </div>
      </div>
    </div>

  </div>

  {/* Customer Support */}
  <h2 className="fw-normal fs-4 mb-5">Need Help with your Order?</h2>

  <div className="row g-5">

    <div className="col-md-6">
      <div className="d-flex align-items-start">
        <i className="bi bi-chat-dots fs-1 text-success me-4"></i>

        <div>
          <h5 className="fw-normal fs-6">Contact Our Customer Support</h5>
          <p className="mb-1">Email: support@natureworld.com</p>
          <p className="mb-1">WhatsApp: +91 98765 11111</p>
          <p className="mb-0">Mobile: +91 98765 22222</p>
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="d-flex align-items-start">
        <i className="bi bi-cart fs-1 text-success me-4"></i>

        <div>
          <h5 className="fw-normal fs-6">More Information</h5>

          <a href="#" className="d-block text-dark mb-2">
            Shipping Information
          </a>

          <a href="#" className="d-block text-dark mb-2">
            Return Information
          </a>

          <a href="#" className="d-block text-dark">
            FAQ
          </a>
        </div>
      </div>
    </div>

  </div>

</div>

<Footer/>


        </>
    )
}
export default Contact