import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/Pricing.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Standard from "./components/standard/Standard";
import Premium from "./components/premium/Premium";
import OptionalAddons from "./components/optional-addons/OptionalAddons";
import Line from "../../line/Line";
import { Helmet } from "react-helmet-async";

function Pricing() {

    useEffect(() => {
        AOS.init();

    }, []);




    return (
        <>
            <Helmet>
                <title>Pricing & Plans</title>
                <meta name="description" content="Check Out Our Affordable Pricing and Plans" />
                <link rel="canonical" href="/pricing" />
            </Helmet>

            <div className={style.pricing}>
                <div className={style.pricingIntro}>
                    <h3>Pick the <span>option</span> that works <span>best</span> for you and lets <span>commence</span>!</h3>
                    <Line />
                    <p>Empower Your Business With Offline-Capable Apps.</p>
                </div>
                <div className={style.pricingPlans}>
                    <div className={style.pricingBox}>
                        <Standard />
                    </div>

                    <div className={style.pricingBox}>
                        <Premium />
                    </div>

                </div>

                <OptionalAddons />

            </div>
        </>
    )

}


export default Pricing