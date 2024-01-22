import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
export default function Payment({payment}) {
        let navigate=useNavigate();
        function backtopage(){
                navigate('/Pricing');
        }
        let[disabled, setdisabled]=useState(true);

  return (
    <div className='payment vh-100 position-relative'>
     <div className="container-fluid">
        <button title='Back To Pricing Page' onClick={backtopage} ><i className="fa-solid fa-circle-arrow-left"></i></button>
             <div className="order-info position-absolute top-50 start-50 translate-middle px-2">
             <h5 className='text-center text-capitalize text-muted mb-5 mt-5 h4'>Order overview </h5>
             <div className="product-info d-flex justify-content-around ">
                 <h6 className='mb-5 text-muted font-monospace'>{payment.name} </h6>
                 <span className='mb-5 text-muted '>|</span>
                 <h6 className='mb-5 text-muted font-monospace'> {payment.price} $</h6>
             </div>
            <div className="tax d-flex justify-content-around">
                    <h6 className='mb-5 text-muted font-monospace'>Tax</h6>
                    <span className='mb-5 text-muted'>|</span>
                    <h6 className='mb-5 text-muted font-monospace'>5 $</h6>
            </div>
            <div className="total d-flex justify-content-around">
                    <h6 className='mb-5 text-muted font-monospace'>Total</h6>
                    <span className='mb-5 text-muted'>|</span>
                    <h6 className='mb-2 text-muted font-monospace'>{`${payment.price + 5}`} $</h6>
            </div>
            <div className="terms-conditions text-center d-flex justify-content-center">
            <input onChange={()=> setdisabled (disabled => !disabled)} className="form-check-input me-3 mb-3" type="checkbox" value={disabled} aria-label="Checkbox for following text input"/>
            <h5 className='font-monospace fs-6 mt-1'>I agree to terms and conditions</h5>
            </div>
            {disabled?<div className="click text-center mt-2">
               <button className='btn w-50 py-1 text-white' type="button" disabled>Checkout</button>
            </div>:<div className="click text-center mt-2">
               <button className='btn w-50 py-1 text-white' type="button">Checkout</button>
            </div>}
             </div>
     </div>
    </div>
  )
}
