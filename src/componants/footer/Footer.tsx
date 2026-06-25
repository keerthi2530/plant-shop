import img5 from '../../assets/floraverse.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'
function Footer(){
    return(
        <>

       <div className="container mt-5 lead">
    <footer className=" row row-cols-1 row-cols-sm-2 row-cols-md-5 py-2 my-2 border-top">
        <div className="col mb-3">
             <img src={img5} width={100} height={100}/>
            <p className="text-body-secondary fw-normal fs-6">Bring Nature Closer To You</p>
             
        </div>
        <div className=" col mb-3"></div>
        <div className="text-start col mb-3">
            <h5 className='fw-normal fs-6'>Quick Link</h5>
            <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-success fw-normal fs-6">Home</a></li>
                <li className="nav-item mb-2"><a href="/aboutus" className="nav-link p-0 text-success fw-normal fs-6">About</a></li>
                <li className="nav-item mb-2"><a href="/shop" className="nav-link p-0 text-success fw-normal fs-6">Shop</a></li>
                <li className="nav-item mb-2"><a href="/services" className="nav-link p-0 text-success fw-normal fs-6">Service</a></li>
                <li className="nav-item mb-2"><a href="/contact" className="nav-link p-0 text-success fw-normal fs-6">Contact</a></li>
            </ul>
        </div>
        <div className=" text-start col mb-3">
            <h5 className='fw-normal fs-6'>Payment Method</h5>
            <ul className="nav flex-column fw-normal fs-6">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-success fw-normal fs-6 ">GPay</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-success fw-normal fs-6">Phonepe</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-success fw-normal fs-6">Paytm</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-success fw-normal fs-6">Depit Card</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-success fw-normal fs-6">Cash on Delivery</a></li>
            </ul>
        </div>
         <div className="text-start col mb-3">
            <h5 className='fw-normal fs-6'>Contact Us</h5>
            <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-success fw-normal fs-6"><FontAwesomeIcon icon={faPhone} style={{color: "rgb(1, 141, 59)",}} />+91 89798 87654</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-success fw-normal fs-6"><FontAwesomeIcon icon={faEnvelope} style={{color: "rgb(1, 141, 59)",}} />info@greenplant.com</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-success fw-normal fs-6"><FontAwesomeIcon icon={faLocationDot} style={{color: "rgb(1, 141, 59)",}} />123 Green street, Bangalore, India</a></li>
            </ul>
            
        </div>
        <div>
             <p className="text-body-secondary fw-normal fs-6">© 2025 Green Plant Shop Inc. All rights reserved.</p>
        </div>



    </footer>
</div>



        </>
    )
}
export default Footer;