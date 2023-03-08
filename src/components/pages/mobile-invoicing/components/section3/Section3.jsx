import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/Section3.module.css'
import Section3 from './assets/images/section3.jpg'
import Line from "../../../../line/Line";

// Default component rendered in the Section3 section
function SectionThree() {

    return (
        <div className={style.Section3}>

            <div className={style.Section3Inner}>



                <div className={style.Section3Box} id={style.text} data-aos="fade-right" data-aos-duration="1200">
                    <h3>Level Up <span>Your</span> Team's <span>Professionalism</span>.</h3>
                    <Line />
                    <p>Choose invoicing software that will make reps as prepared and professional as possible when handling sale, while offering the flexibility for different approaches to the scenarios that come up. </p>
                    <p>SmatForms Platform makes it easy to give your field sales team access to your accounting software like Sage, Xero Quickbooks etc, on the go. Now you can manage your field sales reps in real-time, and get orders, inventory and payments live throughout the day. Granular access ensures everyone sees exactly what they need – and nothing more. Reduce tedious back-office reconciliation work while empowering your outside sales reps with live data.</p>
                    <p>We would be happy to schedule a demo and answer any questions you may have. Please feel free to contact us to discuss further how our solution can benefit your business. We look forward to the opportunity to work with you.</p>
                    <Link to={'/pricing'} className={style.Section3Link}><button data-aos="fade-up" data-aos-duration="1200">Get Started</button></Link>
               
                </div>


                <div className={style.Section3Box} id={style.image} data-aos="fade-left" data-aos-duration="1200">
                    <img src={Section3} alt="" />
                </div>

            </div>

        </div>

    )

}


export default SectionThree