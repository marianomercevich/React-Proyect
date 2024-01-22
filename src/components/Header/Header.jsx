import React from 'react';

export default function Header() {
  return (
    <div>
        <div className="home">
      <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex align-items-center">
          <div className="home-content mt-4">
             <i className="fa-solid fa-mobile-screen-button fs-1 mb-2"></i>
             <h1 className='mb-2 home-header'>Perfect app landing page for your app.</h1>
             <p className='text-muted fw-light lh-lg'>Explore Kotona's online payment services and make a difference in your customers' service experiences.Increase productivity with a simple to-do app.</p>
             <button className='btn px-4 py-2 text-white'>Read More</button>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center text-center">
          <div className="home-content">
            <img src='./images/homebg1.jpg' alt='' className='home-img'/>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}
