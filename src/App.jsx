import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Services from './components/Services/Services';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import Application from './components/Application/Application';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Payment from './components/Payment/Payment';
import jwtDecode from 'jwt-decode';
import data from './components/Data/Data';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import News from './components/News/News';
import ClipLoader from "react-spinners/RiseLoader";



export default function App() {

  let {productitem}= data;

  let[loginuser, setloginuser]=useState(null);
  let[payment, setpayment]=useState();
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#46a5bd");
  let navigate=useNavigate();

    function setuserdata(){
        let token=localStorage.getItem("token");
        let decode=jwtDecode(token);
        setloginuser(decode);
      }
      function logout(){
        localStorage.removeItem("token");
        setloginuser(null);
        navigate('/Login');
      }

      function setpackages(product){
        {loginuser?
        navigate('/Payment'):navigate('/Login')};
        let result=product.id; 
        setpayment(productitem.find((product)=> result == product.id));
      }
      
      useEffect(()=>{
        if(localStorage.getItem("token")){
          setuserdata();
        }
        setLoading(true);
        setTimeout(()=>
        {setLoading(false);}
        ,2000)
  },[])

  return (
    <>

    {loading?  
    
    <div className="sweet-loading d-flex justify-content-center align-items-center vh-100">
    <ClipLoader color={color} loading={loading} size={30} />
    </div>
    :
    <>
    <Navbar loginuser={loginuser} logout={logout} />
      <Routes>
        <Route path='/' element={<Header/>}></Route>
        <Route path='Header' element={<Header/>}></Route>
        <Route path='Services' element={<Services/>}></Route>
        <Route path='Features' element={<Features/>}></Route>
        <Route path='Pricing' element={<Pricing loginuser={loginuser} productitem={productitem} setpackages={setpackages}/>}></Route>
        <Route path='Application' element={<Application/>}></Route>
        <Route path='News' element={<News/>}></Route>
        <Route path='Contact' element={<Contact/>}></Route>
        <Route path='Login' element={<Login setuserdata={setuserdata}/>}></Route>
        <Route path='Signup' element={<Signup/>}></Route>
        <Route path='Payment' element={<Payment productitem={productitem} payment={payment} setpackages={setpackages}/>}></Route>
        <Route path='*' element={<Header/>}></Route>
      </Routes>
      <Footer/>
      </>
  }
      
    
    </>
  )
}
