import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/Section1.module.css'
import Section1 from './assets/images/section1.png'
import Line from "../../../../line/Line";

// Default component rendered in the Section1 section
function SectionOne() {

    return (

     
        <div className={style.Section1}>

            <div className={style.Section1Inner}>


                <div className={style.Section1Box} id={style.text} data-aos="fade-right" data-aos-duration="1200">
                    <h3>Handheld Invoicing <span>System</span> With Printing <span>Functionality</span>.</h3>
                    <Line />
                    <p>Customize mobile invoice templates your reps can print anywhere while on the go. Enable our digital signature capture to record and store online signatures for each invoice.  </p>
                    <p>Our field sales app emphasizes flexibility and mobility for distribution companies in search of software that scales to their system (however small or big). Available on iOS and Android, and easily controlled through an admin site on browser. </p>
                    <p>Smatforms is the perfect solution to simplify and streamline your sales process. With Smatforms, you no longer have to worry about calling field sales reps to check in or dealing with a crunch of invoices at the end of the day. It integrates natively with iOS and Android devices so you can track and manage your field sales reps from one easy-to-use dashboard.</p>
                    <p>Furthermore, Smatforms makes it easy to sync estimates, invoices, orders, and inventory throughout the day, and allows you to take payments in the field for cash flow even before the sales cycle is complete! With Smatforms, sales is easier than ever!</p>
                </div>



                <div className={style.Section1Box} id={style.image} data-aos="fade-left" data-aos-duration="1200">
                    <img src={Section1} alt="" />
                </div>



            </div>

        </div>

    )

}


export default SectionOne