import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';

  
export default function Navbar({ loginuser, logout, showHomeLink  }) {
  const navigate = useNavigate();


  return (

    <nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <ScrollLink
                to="home"
                smooth={true}
                duration={250}
                className="nav-link active text-white text-uppercase me-4"
              >
                Home
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="services"
                smooth={true}
                duration={250}
                className="nav-link text-white text-uppercase me-4"
              >
                Services
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="features"
                smooth={true}
                duration={250}
                className="nav-link text-white text-uppercase me-4"
              >
                Features
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="pricing"
                smooth={true}
                duration={250}
                className="nav-link text-white text-uppercase me-4"
              >
                Pricing
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="application"
                smooth={true}
                duration={250}
                className="nav-link text-white text-uppercase me-4"
              >
                Application
              </ScrollLink>
            </li>            
            
            <li className="nav-item">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={250}
                className="nav-link text-white text-uppercase me-4"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
          {loginuser ? (
          <button className='btn text-capitalize px-4 text-white' onClick={logout}>
            Logout
          </button>
        ) : (
          <div className="click ms-auto">
            <Link to="/login">
              <button className='btn text-capitalize px-4 text-white'>login</button>
            </Link>
          </div>
        )}
        </div>
      </div>
    </nav>
  );
}