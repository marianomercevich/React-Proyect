import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import styles from './Application.module.css';
export default function Application() {


  return (
    <div className='application py-5 text-center'>
      <div className="container">
      <h4 className='h5 mt-5'>App Looks like!</h4>
      <h2 className='s-h2'>Our App Screenshots!</h2>
      <p className='s-p m-auto mb-5 mt-3 text-muted lh-lg' >A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies.</p>
    
    <div className="slider m-auto">
       <div className="phone-frame">
         <img src='./images/phone-fream.png' alt='' className='phone-frame img-fluid m-auto'/>
      </div>
    <OwlCarousel className='owl-theme' items='1' autoplay='true' autoplayTimeout='7000' loop='true'>
    <div>
        <img src='./images/s-1.jpg' alt='' className={`slides w-25 m-auto ${styles.round}`}/>
    </div>
    <div>
        <img src='./images/s-2.jpg' alt='' className={`slides w-25 m-auto ${styles.round}`}/>
    </div>
    <div className=''>
          <img src='./images/s-3.jpg' alt='' className={`slides w-25 m-auto ${styles.round}`}/>
    </div>
    <div>
        <img src='./images/s-4.jpg' alt='' className={`slides w-25 m-auto ${styles.round}`}/>
    </div>
   </OwlCarousel>
      </div> 
      </div>
      
    </div>
  )
}
