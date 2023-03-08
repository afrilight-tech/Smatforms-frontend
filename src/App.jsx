import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/pages/home/Home';
import GetTheApp from './components/get-the-app/GetTheApp';
import Contact from './components/pages/contact/Contact';
import AboutUs from './components/pages/about-us/AboutUs';
import MobileInvoicing from './components/pages/mobile-invoicing/MobileInvoicing';
import Pricing from './components/pages/pricing/Pricing';
import PremiumContact from './components/pages/pricing/components/premium/components/contact/PremiumContact';
import StandardContact from './components/pages/pricing/components/standard/components/contact/StandardContact';
import Help from './components/pages/help/Help';
import NotFound from './components/404/404';


function App() {

  const { pathname } = useLocation();


  // scroll to the top of a new page
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);








  return (
    <div className="App">

      {/* header */}
      <Header />

      <Routes>

        {/* home */}
        <Route path='/' element={<Home />} />


        {/* pricing */}

        <Route path='/pricing' element={<Pricing />} />
        <Route path='/pricing/premium-contact' element={<PremiumContact />} />
        <Route path='/pricing/standard-contact' element={<StandardContact />} />

        {/*  */}


        {/* about-us */}
        <Route path='/about-us' element={<AboutUs />} />

        {/* faqs */}
        <Route path='/help' element={<Help />} />

        {/* contact */}
        <Route path='/contact' element={<Contact />} />

        {/* mobile-invoicing */}
        <Route path='/mobile-invoicing' element={<MobileInvoicing />} />


          {/* 404 */}
          <Route path='*' element={<NotFound/>} />

      </Routes>



      {/* Get The app */}

      <GetTheApp />


      {/* footer */}

      <Footer />


    </div>
  )
}

export default App
