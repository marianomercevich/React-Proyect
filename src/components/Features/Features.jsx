import React, {useState} from 'react';
import styles from './Features.module.css';


export default function Features() {
    let [topfeatures,settopfeatures]=useState(true);
    let [smartfeatures,setsmartfeatures]=useState();

    function gettopfeatures(e){
         let resultst=e.target.innerText;
         settopfeatures(resultst); 
         setsmartfeatures(false);
    }
    function getsmartfeatures(e){
        let resultss=e.target.innerText;
        setsmartfeatures(resultss); 
        settopfeatures(false); 
   }
  return (
    <div className='features text-center py-5'>
        <h4 className='h5 mt-5 lh-lg'>AppTech Features</h4>
      <h2 className='s-h2'>Features for our app</h2>
      <p className='s-p m-auto mb-5 mt-3 text-muted lh-lg'>A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies.</p>
      <button className='text-capitalize btn me-4 text-white px-4 mb-5' onClick={gettopfeatures}>top features</button>
      <button className='text-capitalize btn text-white mb-5' onClick={getsmartfeatures}>smart features</button>
      {topfeatures?  <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <div className="f-member text-end mb-5 mt-5">
                   <i className={`fa-solid fa-message text-white ${styles.icon}`}></i>
                   <h3 className={`mb-3 mt-2 h4 ${styles.heading}`}>Responsive Design</h3>
                   <p className='text-muted w-75 ms-auto mb-5'>In order to design a mobile app that is going to be module downloaded</p>
                </div>
                <div className="f-member text-end mb-5">
                   <i className={`fa-solid fa-arrows-rotate text-white ${styles.icon}`}></i>
                   <h3 className={`mb-3 mt-2 h4 ${styles.heading}`}>Cool Features</h3>
                   <p className='text-muted w-75 ms-auto mb-5'>In order to design a mobile app that is going to be module downloaded</p>
                </div>
                <div className="f-member text-end">
                   <i className={`fa-solid fa-pencil text-white ${styles.icon}`}></i>
                   <h3 className={`mb-3 mt-2 h4 ${styles.heading}`}>Lifetime Support</h3>
                   <p className='text-muted w-75 ms-auto'>In order to design a mobile app that is going to be module downloaded</p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="f-image">
                   <img src='./images/homebg1.jpg' alt='' className='w-100 me-auto'/>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="f-member text-start mb-5 mt-5">
                   <i className={`fa-solid fa-wand-magic-sparkles text-white ${styles.icon}`}></i>
                   <h3 className={`mb-3 mt-2 h4 ${styles.heading}`}>Stunning Design</h3>
                   <p className='text-muted w-75 me-auto'>In order to design a mobile app that is going to be module downloaded</p>
                </div>
                <div className="f-member text-start mb-5">
                   <i className={`fa-solid fa-box text-white ${styles.icon}`}></i>
                   <h3 className={`mb-3 mt-2 h4 ${styles.heading}`}>Best PSD Pack</h3>
                   <p className='text-muted w-75 me-auto'>In order to design a mobile app that is going to be module downloaded</p>
                </div>
                <div className="f-member text-start">
                   <i className={`fa-solid fa-flask text-white ${styles.icon}`}></i>
                   <h3 className={`mb-3 mt-2 h4 ${styles.heading}`}>Creative Idea</h3>
                   <p className='text-muted w-75 me-auto'>In order to design a mobile app that is going to be module downloaded</p>
                </div>
            </div>
        </div>
      </div>:''}
      {smartfeatures?<div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="s-member">
                    <img src='./images/phone2.png' alt='' className='w-100'/>
                </div>
            </div>
            <div className="col-lg-6 text-start">
                <div className="s-member">
                    <h3 className={`text-capitalize my-5 h2 ${styles.heading}`}>Smart Features</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <h5 className={`mb-3 ${styles.heading}`}><i className={`fa-solid fa-check ${styles.icons}`}></i> Fast Messaging</h5>
                            <p className='text-muted'>Glanced brothers nowhere he one allow based intentionally day safely.</p>
                        </div>
                        <div className="col-md-6 mb-5">
                            <h5 className={`mb-3 ${styles.heading}`}><i className={`fa-solid fa-check ${styles.icons}`}></i> Minimal Interface</h5>
                            <p className='text-muted'>Glanced brothers nowhere he one allow based intentionally day safely.</p>
                        </div>
                        <div className="col-md-6">
                            <h5 className={`mb-3 ${styles.heading}`}><i className={`fa-solid fa-check ${styles.icons}`}></i> User Freindly</h5>
                            <p className='text-muted'>Glanced brothers nowhere he one allow based intentionally day safely.</p>
                        </div>
                        <div className="col-md-6">
                            <h5 className={`mb-3 ${styles.heading}`}><i className={`fa-solid fa-check ${styles.icons}`}></i> Notification</h5>
                            <p className='text-muted'>Glanced brothers nowhere he one allow based intentionally day safely.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      :''}
      
    </div>

  )
}
