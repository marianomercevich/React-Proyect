import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar({loginuser,logout}) {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
  <div className="container">
    <Link className="navbar-brand" to="Header"><img src='#' alt='' className='brand' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
     <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white text-uppercase me-4" aria-current="page" to="Header">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white text-uppercase me-4" to="Services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white text-uppercase me-4" to="Features" >Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white text-uppercase me-4" to="Pricing">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white text-uppercase me-4" to="Application">Application</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white text-uppercase me-4" to="Contact">Contact</Link>
        </li>
      </ul>
      {loginuser?<a className="nav-link text-white me-2" onClick={logout}><button className='btn text-capitalize px-4 text-white'>logout</button></a>:
      <div className="click ms-auto">
      <Link to='Login'><button className='btn text-capitalize px-4 text-white'>login</button></Link> 
      </div>
      }
      
    </div>
  </div>
</nav>
    
  )
}
