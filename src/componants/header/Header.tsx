import img from '../../assets/floraverse.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
import { NavLink } from 'react-router-dom';
import './Header.css'
import SearchBar from "../search/searchBar";


function Header() {

  return (
    <>
      <div className="container-fluid lead">
       <header className="d-flex align-items-center justify-content-between py-2 border-bottom">
          {/* <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <svg className="bi me-2" width="40" height="32" aria-hidden="true"><use xlink:href="#bootstrap"></use></svg>
            <span className="fs-4">Simple header</span>
        </a> */}
          <img src={img} width={90} height={90} />
          <div>
            <ul className="nav nav-pills my-3 py-2 ">
            <SearchBar />

              <li className="nav-item">
<NavLink
  to="/"
  className={({ isActive }) =>
    isActive
      ? "nav-link-custom active-link"
      : "nav-link-custom"
  }
>
  Discover
</NavLink>
              </li>

              <li className="nav-item">
               <NavLink to="/aboutus" className={({ isActive }) => isActive ? "active-link nav-link-custom" : "nav-link-custom"}>
  Our story
</NavLink>
              </li>

             <li className="nav-item dropdown-hover">
<NavLink to="/shop" className={({ isActive }) => isActive ? "active-link nav-link-custom" : "nav-link-custom"}>
  Shop
</NavLink>

</li>

              <li className="nav-item">
              <NavLink to="/services" className={({ isActive }) => isActive ? "active-link nav-link-custom" : "nav-link-custom"}>
  Services
</NavLink>

              </li>

              <li className="nav-item">
               <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link nav-link-custom" : "nav-link-custom"}>
  Connect
</NavLink>
              </li>
            </ul>
          </div>
          <div className='d-flex flex-wrap justify-content-right py-4  border-bottom'>
            {/* <Link className="text-dark text-decoration-none fw-normal fs-6 mx-3" to="/card">
             <FontAwesomeIcon icon={faCartShopping} size='lg' style={{color: "rgb(6, 6, 6)",}} />
             </Link> */}
             </div>
          

        </header>
      </div>

    </>
  )
}
export default Header;


