import React, {useState}from 'react'
import { Link } from 'react-router-dom'
import {getAuth , signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Login({setuserdata}) {
    let[user, setuser]=useState({
        user_email:'',
        user_password:''
       });

       let[errormsg, seterrormsg]=useState('');
       const auth = getAuth(app);
       let navigate=useNavigate();

    function gotohome(){
        navigate('/Header');
    }

    function signin(){
        signInWithEmailAndPassword(auth, user.user_email, user.user_password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          localStorage.setItem("token", user.accessToken);
          gotohome();
          setuserdata();
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          //const errorMessage = error.message;
          seterrormsg(errorCode);
        });
    }

    function submitFormData(e){
         e.preventDefault();
    }

     function getinputvalue(e){
         let myUser={...user};//deep copy
         myUser[e.target.name]=e.target.value;
         setuser(myUser);
     } 


  return (
    <div className='login py-5'>
        <div className="container">
        <div className="reg-form mt-5 w-50 m-auto">
        {errormsg?<div className='alert alert-secondary'>{errormsg}</div>:''}

            <h2 className='text-capitalize mb-4 text-center text-muted'>Login</h2>
            <form onSubmit={submitFormData}>
            <div className="mb-3">
                 <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Email</label>
                 <input type="email" onChange={getinputvalue} className="form-control"  name='user_email'/>
            </div>
            <div className="mb-3">
                 <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Password</label>
                 <input type="password" onChange={getinputvalue} className="form-control" name='user_password'/>
            </div>
            <div className="click d-flex justify-content-end">
               <button onClick={signin} className='btn mt-4 w-100 text-white'>Login</button>
            </div>
            <div className="signup mt-5">
            <h5 className='text-muted text-center'>Don't have an account?<Link to='/Signup' className='text-decoration-none ms-2 fs-5'>Sign Up</Link></h5>
            </div>
            </form>   
      </div>
    </div>   
    </div>
  )
}
