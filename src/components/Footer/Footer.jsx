import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={`footer text-center ${styles.footer}`}>
         <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="footer-items text-start">
                        <img src='./images/arrow-bg.png' alt='' className='footer-arrow w-100'/>
                        <img src='#' alt='' className='footer-img'/>
                        <p className='text-white-50 mt-3'>A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies.</p>
                        <div className="social-media">
                            <i className={`fa-brands fa-facebook fs-4 ${styles.socialicon} me-3`}></i>
                            <i className={`fa-brands fa-twitter fs-4 ${styles.socialicon} me-3`}></i>
                            <i className={`fa-brands fa-google-play fs-4 ${styles.socialicon} me-3`}></i>
                            <i className={`fa-brands fa-linkedin fs-4 ${styles.socialicon} me-3`}></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 ms-3">
                    <div className="footer-items text-start d-flex flex-column">
                          <h3 className='text-white mb-3 h4'>Product</h3>
                          <Link to="Features" className='text-decoration-none text-white-50 mb-3'>Features</Link>
                          <Link to="Pricing" className='text-decoration-none text-white-50 mb-3'>Pricing</Link>
                          <Link to="Application" className='text-decoration-none text-white-50 mb-3'>Get App</Link>
                          <Link to="Contact" className='text-decoration-none text-white-50 mb-3'>Contact</Link>
                    </div>
                </div>
                <div className="col-md-3 ms-3">
                    <div className="footer-items text-start d-flex flex-column">
                          <h3 className='text-white mb-3 h4'>Polices</h3>
                          <Link to="#" className='text-decoration-none text-white-50 mb-3'>Security & Provciy</Link>
                          <Link to="#" className='text-decoration-none text-white-50 mb-3'>Marketplace</Link>
                          <Link to="#" className='text-decoration-none text-white-50 mb-3'>Term & Condition</Link>
                          <Link to="#" className='text-decoration-none text-white-50 mb-3'>Collection</Link>
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}
