import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/Home.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from "./components/hero/Hero";
import SectionOne from "./components/section1/Section1";
import SectionTwo from "./components/section2/Section2";
import SectionThree from "./components/section3/Section3";
import SectionFour from "./components/section4/Section4";
import SectionFive from "./components/section5/Section5";
import SectionSix from "./components/section6/Section6";
import SectionSeven from "./components/section7/Section7";
import SectionEight from "./components/section8/Section8";
import SectionNine from "./components/section9/Section9";
import SectionTen from "./components/section10/Section10";
import LeadToMobileInvoicing from "../../lead-to-mobile-invoicing/LeadToMobileInvoicing";
import { Helmet } from "react-helmet-async";

function Home() {

    useEffect(() => {
        AOS.init();
    }, []);

    

return(

    
    <>
    <Helmet>
        <title>For Maintenance, Workflows, Field Service and So Much More</title>
        <meta name="description" content="Create Worker Facing Apps On SmatForms, For Maintenance, Workflows, Field Service and So Much More" />
        <link rel="canonical" href="/" />
    </Helmet>

    <div className={style.home}>
    
     <Hero/>

     <SectionOne/>

     <SectionTwo/>

     <SectionThree/>

     <SectionFour/>

     <SectionFive/>

     <LeadToMobileInvoicing/>

     <SectionSix/>

     <SectionSeven/>

     <SectionEight/>

     <SectionNine/>

     <SectionTen/>
    </div>

    </>

)

}


export default Home