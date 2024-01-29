import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Services from '../Services/Services'
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Features from '../Features/Features';
import Pricing from '../Pricing/Pricing';
import Application from '../Application/Application';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Dashboard from '../Dashboard/Dashboard'
import Payment from '../Payment/Payment';
import jwtDecode from 'jwt-decode';
import data from '../Data/Data';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/RiseLoader";
import Card from '../Card/Card';



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
      <Navbar loginuser={loginuser} logout={logout} />
      <Header/>
      <Services/>
      <Features/>
      <Pricing loginuser={loginuser} productitem={productitem} setpackages={setpackages}/>
      <Application/>
      <Contact/>
      <Routes>
        <Route path='Login' element={<Login setuserdata={setuserdata}/>}></Route>
        <Route path='Dashboard' element={<Card/>}></Route>
        <Route path='Signup' element={<Signup/>}></Route>
        <Route path='Payment' element={<Payment productitem={productitem} payment={payment} setpackages={setpackages}/>}></Route>

      </Routes>
      <Footer/>
      </>
  )
    

}
