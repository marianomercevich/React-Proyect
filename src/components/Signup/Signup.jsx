import React, {useState}from 'react'
import Joi from 'joi';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import app from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const auth = getAuth(app);

   let[user, setuser]=useState({
    first_name:'',
    last_name:'',
    mobile_number:'',
    user_email:'',
    user_password:''
   });

   let[errormsg, seterrormsg]=useState('');
   let[errorlist,seterrorlist]=useState([]);
   let navigate=useNavigate();

   function gotologin(){
    let path='/Login';
    navigate(path);
}

   function getinputvalue(e){
      let myUser={...user};//deep copy
      myUser[e.target.name]=e.target.value;
      setuser(myUser);
   }

   function formvalidation(){
    const schema = Joi.object({
        first_name:Joi.string().min(3).max(10).required(), 
        last_name:Joi.string().min(3).max(10).required(),
        mobile_number:Joi.string().pattern(new RegExp('^05[269][0-9]{0,7}$')).required(),
        user_email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        user_password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    });
       return schema.validate(user,{abortEarly:false});
   }

    function submitFormData(e){
        e.preventDefault();
        let validationResult=formvalidation();
        if(validationResult.error){
            seterrorlist(validationResult.error.details);
        }else{
          createUserWithEmailAndPassword(auth, user.user_email, user.user_password)
          .then((userCredential) => {
           let user = userCredential.user;
           gotologin();
          })
          .catch((error) => {
            const errorCode = error.code;
            //const errorMessage = error.message;
            seterrormsg(errorCode);
          });

        }
   }
  return (
    <div className='signup py-5'>
            <div className='login py-5'>
        <div className="container">
        <div className="reg-form mt-5 w-50 m-auto">

            {errorlist.map((error,index)=><div key={index} className='alert alert-secondary'>{error.message}</div>)}
            {errormsg?<div className='alert alert-secondary'>{errormsg}</div>:''}

            <h2 className='text-capitalize mb-4 text-center text-muted'>Signup</h2>

            <form onSubmit={submitFormData}>
            <div className="mb-3">
                 <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Fisrt Name</label>
                 <input type="text" onChange={getinputvalue} className="form-control"  name='first_name'/>
            </div>
            <div className="mb-3">
                 <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Last Name</label>
                 <input type="text" onChange={getinputvalue} className="form-control"  name='last_name'/>
            </div>
            <div className="mb-3">
                 <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Mobile Number</label>
                 <input type="text" onChange={getinputvalue} className="form-control"  name='mobile_number'/>
            </div>
            <div className="mb-3">
                 <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Email</label>
                 <input type="email" onChange={getinputvalue} className="form-control"  name='user_email'/>
            </div>
            <div className="mb-3">
                 <label htmlFor="exampleFormControlInput1" className="form-label text-muted">Password</label>
                 <input type="password" onChange={getinputvalue} className="form-control" name='user_password'/>
            </div>
            <div className="signup mt-2">
            <button className='btn mt-4 w-100 text-white'>Signup</button>
            </div>
            </form>   
      </div>
      
    </div>   
    </div>
    </div>
  )
}

