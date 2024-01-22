import React, {useState} from 'react'
import styles from './Contact.module.css';


export default function Contact() {
  let[userMessage, setUserMessage]=useState({
    user_name:'',
    user_email:'',
    subject:'',
    message:''
  });

  function getusermessage(e){
    let myMessage={...userMessage};
    myMessage[e.target.name]=e.target.value;
    setUserMessage(myMessage);

  }
  function submitFormData(e){
    e.preventDefault();
}

function usercontact(){
    localStorage.setItem("contactlist",JSON.stringify(userMessage));
    alert('Sent Successfully');
}

let cleardata=()=>{
  Array.from(document.getElementsByClassName("usermessage")).forEach(
      input => (input.value = ""));
  }
  return (
    <div className='contact py-5 text-center mt-2'>
        <h4 className='h5 mt-5'>Contact Us</h4>
      <h2 className='s-h2'>Get In Touch!</h2>
      <p className='s-p m-auto mb-5 mt-3 text-muted lh-lg'>A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies.</p>
      <div className="container text-center">
        <div className="row">
            <div className="col-md-5 mb-4">
                <div className="contact-item text-start">
                    <h4 className={`${styles.cheading} mb-3`}>Need Support !</h4>
                    <p className='text-muted mb-5'>Contact us for a quote , help to join the them.</p>

                    <form onSubmit={submitFormData}>
            <div className="mb-3">
                 <input onChange={getusermessage} type='text' placeholder='Your name' name='user_name' className='usermessage font-monospace p-1 rounded rounded-2 border-light border-opacity-25 mb-3 w-100'/>
            </div>
            <div className="mb-3">
            <input onChange={getusermessage} type='text' placeholder='Your email' name='user_email' className='usermessage font-monospace p-1 rounded rounded-2 border-light border-opacity-25 w-100'/>
            </div>
            <div className="mb-3">
            <input onChange={getusermessage} type='text' placeholder='Your subject...' name='subject' className='usermessage font-monospace px-2 py-1 mt-4 w-100 rounded rounded-2 border-light border-opacity-25'/>
            </div>
            <div className="mb-3">
            <textarea onChange={getusermessage} placeholder='Your message...' name='message' className='usermessage w-100 mt-3 font-monospace rounded rounded-2 p-1 border-light border-opacity-25'></textarea>
            </div>
            <button onClick={()=>{usercontact(); cleardata();}} className='btn text-white w-100 mt-4'>Send Message</button>
            </form>   
                </div>  
            </div>
            <div className="col-md-7  m-auto position-relative">
                <div className={`${styles.background}`}>
                </div>
                <div className="google-map">
                <iframe width="500" height="470" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                </div>
            </div>
        </div>

        <div className="row mt-5">
            <div className="col-md-4 mb-3">
                <div className="contact-items d-flex justify-content-center align-items-center">
                  <i className={`fa-solid fa-location-dot fs-1 me-3 ${styles.icolor}`}></i>
                  <div className="items-member text-start">
                    <h4 className={`${styles.cheading}`}>Location</h4>
                    <p className='text-muted'>
                        2276 Lynn Ogden Lane <br/>
                        VIC 3004, Australia
                    </p>
                  </div>
                </div>
            </div>
            <div className="col-md-4 mb-3">
                <div className="contact-items d-flex justify-content-center align-items-center">
                  <i className={`fa-solid fa-envelope fs-1 me-3 ${styles.icolor}`}></i>
                  <div className="items-member text-start">
                    <h4 className={`${styles.cheading}`}>Email</h4>
                    <p className='text-muted'>
                        info@example.com <br/>
                        sale@example.com
                    </p>
                  </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="contact-items d-flex justify-content-center align-items-center">
                  <i className={`fa-solid fa-phone fs-1 me-3 ${styles.icolor}`}></i>
                  <div className="items-member text-start">
                    <h4 className={`${styles.cheading}`}>Phone</h4>
                    <p className='text-muted'>
                        1800-121-3637 <br/>
                        +91 555 234-8765
                    </p>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
