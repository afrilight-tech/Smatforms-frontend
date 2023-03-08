import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/Hero.module.css'
import hero from './assets/images/hero1.png'

// Default component rendered in the hero section
function Hero()
 {
    const handleScroll = (event) => {
        event.preventDefault()
        let sectionOneElement = document.getElementById("section1")
        sectionOneElement.scrollIntoView({ behavior: "smooth" })
    }


    return (

        <div className={style.hero}>


            <div className={style.heroInner}>

                <div className={style.heroBox} id={style.text} data-aos="fade-right" data-aos-duration="1200">
                    <h3>Create Worker <span>Facing</span> Apps On <br /> <span>SmatForms.</span></h3>
                    <p>For Maintenance, Workflows, Field Service and So Much More.</p>
                    <Link onClick={handleScroll} className={style.heroLink}><button>Get Started</button></Link>
                </div>


                <div className={style.heroBox} id={style.image} data-aos="fade-left" data-aos-duration="1200">
                    <img src={hero} alt="hero" />
                </div>

            </div>

        </div>

    )

}


export default Hero