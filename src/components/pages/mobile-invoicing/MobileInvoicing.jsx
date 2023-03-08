import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/MobileInvoicing.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionOne from "./components/section1/Section1";
import MobileInvoicingHero from "./components/hero/MobileInvoicingHero";
import Importance from "./components/why-partner-with-us/Importance";
import SectionThree from "./components/section3/Section3";
import { Helmet } from "react-helmet-async";


function MobileInvoicing() {

    useEffect(() => {
        AOS.init();
    }, []);

    

return(

    <>
    <Helmet>
        <title>Mobile Invoicing</title>
        <meta name="description" content="Handheld Invoicing System With Printing Functionality." />
        <link rel="canonical" href="/mobile-invoicing" />
    </Helmet>


    <div className={style.mobileInvoicing}>
    


     <SectionOne/>

     <Importance/>

     <SectionThree/>
    </div>


</>
)

}


export default MobileInvoicing