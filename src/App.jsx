import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import Application from './components/Application/Application';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import jwtDecode from 'jwt-decode';
import data from './components/Data/Data';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const { pathname } = useLocation();
  let { productitem } = data;

  let [loginuser, setloginuser] = useState(null);
  let [payment, setpayment] = useState();
  let navigate = useNavigate();

  function setuserdata() {
    let token = localStorage.getItem('token');
    let decode = jwtDecode(token);
    setloginuser(decode);
  }

  function logout() {
    localStorage.removeItem('token');
    setloginuser(null);
    navigate('/login');
  }

  function setpackages(product) {
    loginuser ? navigate('/payment') : navigate('/login');
    let result = product.id;
    setpayment(productitem.find((product) => result == product.id));
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setuserdata();
    }
  }, []);

  return (
    <>
      <Navbar loginuser={loginuser} logout={logout} showHomeLink={['/login', '/signup', '/dashboard'].includes(pathname)} />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login setuserdata={setuserdata} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {['/login', '/signup', '/dashboard'].includes(pathname) ? (  <Footer showHomeLink={['/login', '/signup', '/dashboard'].includes(pathname)} />
      ) :(
        <>
          <Services />
          <Features />
          <Pricing loginuser={loginuser} productitem={productitem} setpackages={setpackages} />
          <Application />
          <Contact />
          <Footer showHomeLink={['/login', '/signup', '/dashboard'].includes(pathname)} />
        </>
      )}
    </>
  );
}
