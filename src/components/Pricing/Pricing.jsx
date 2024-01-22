import React from 'react';
import styles from './Pricing.module.css';

export default function Pricing({productitem,setpackages}) {

  return (
    <div className='pricing text-center py-5'>
        <div className="container">
         <h4 className='h5 mt-5 lh-lg'>What's Your Price!</h4>
         <h2 className='s-h2 fs-1'>Pricing plans!</h2>
         <p className='s-p m-auto mb-5 mt-3 text-muted lh-lg'>A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies.</p>
            <div className="row">
                {productitem.map((product)=>
                <div className="col-lg-4 mb-5" key={product.id}>
                <div className="price-item rounded rounded-3">
                    <div className="price-top2 text-start px-4 py-4">
                        <h3 className='text-capitalize text-white fs-6 basic mb-3'>{product.name}</h3>
                        <h5 className={`${styles.pheading}`}>$ <span className='h2 fs-1'>{product.price}</span>/month</h5>
                        <p className='text-muted font-monospace'>17 to 19 user</p>
                        <p className='text-muted font-monospace'>For most businesses that want to optimize web query.</p>
                    </div>
                    <div className="border border-3"></div>
                    <div className="price-down text-start px-4 py-3">
                        <h5 className={`${styles.pheading} my-4 h6 font-monospace`}><i className="fa-solid fa-circle-check text-success me-3 "></i>2 App and project</h5>
                        <h5 className={`${styles.pheading} my-4 h6 font-monospace`}><i className="fa-solid fa-circle-check text-success me-3"></i>2 400 Gb/s storange</h5>
                        <h5  className={`${styles.pheading} my-4 h6 font-monospace`}><i className="fa-solid fa-circle-check text-success me-3"></i> Free coustom domain</h5>
                        <h5 className={`${styles.pheading} my-4 h6 font-monospace`}><i className="fa-solid fa-circle-xmark text-danger me-3"></i> Chat Support</h5>
                        <h5  className={`${styles.pheading} my-4 h6 font-monospace`}><i className="fa-solid fa-circle-xmark text-danger me-3"></i> No transaction fees</h5>
                        <h5  className={`${styles.pheading} my-4 h6 font-monospace`}><i className="fa-solid fa-circle-xmark text-danger me-3"></i> Unlimited Storage</h5>
                        <button onClick={()=>setpackages(product)} className='px-4 btn-price2 text-capitalize py-1'><i className="fa-solid fa-check-double me-2"></i> buy now</button>
                    </div>
                </div>
            </div>
                )}
             
            </div>
        </div>
    </div>
  )
}
