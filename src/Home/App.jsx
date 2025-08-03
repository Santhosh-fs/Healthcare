import About from '../About/about'
import Service from "../Service/service" 
import Choose from "../Choose/choose" 
import Appoint from "../Appoint/Appoint"
import Docsec from "../Top/Topdoc"
import Footer from "../Footer/Foo"

import { HashLink as Link } from 'react-router-hash-link'

import '../Home/App.css'

function App() {


  return (
    <>
      <div className="home-cont" id="Home">
        <nav className="navbar navbar-expand-lg navbar-dark pt-3" id="nav">
          <div className="container">
            <a className="navbar-brand fw-bold fs-3" id="logo" href="#">
              Health <span className="text-success">Care.</span>
            </a>
            <button
              className="navbar-toggler bg-outline-Dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item mx-2 h5"><Link to="#Home" className="nav-link active">Home</Link></li>
                <li className='nav-item mx-2 h5'><Link to="#About" className="nav-link text-light">About Us</Link></li>
                <li className="nav-item mx-2 h5"><Link to="#Doc" className="nav-link text-light">Doctor's</Link></li>
                <li className="nav-item mx-2 h5"><Link to="#Choose" className="nav-link text-light">Facility</Link></li>
              </ul>
               <Link to="Admin"  className="btn btn-danger ms-3 me-5">For Admin</Link>
              <Link to="Doctorlogin"  className="btn btn-success ms-3">For Doctors</Link>
            </div>
          </div>
        </nav>

        <div className="container text-light py-5">
          <div className="row align-items-center justify-content-center text-center text-md-start">
            <div className="col-12 col-md-8 col-lg-6 mt-5">
              <h1 className="display-5 fw-bold ">Healing with Heart, Powered by Hope.</h1>
              <p className="lead mt-3">
                With gentle hands and advanced technology, we heal both body and soul.
                Every step of your journey is with care, hope, and unwavering support.
              </p>
              <p className="text-danger fs-5 text-center">HeartSpire...</p>
              <Link to="#Service" className="btn btn-success mt-3">SEE SERVICES</Link>
            </div>
          </div>
        </div>
      </div>
     <Service />
      <About />
      <Choose />
      <Appoint /> 
      <Docsec />
      <Footer /> 
    </>
  );
}

export default App;
