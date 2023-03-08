import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/Section3.module.css'
import Section3 from './assets/images/section3.png'
import Line from "../../../../line/Line";

// Default component rendered in the Section3 section
function SectionThree() {

    return (
        <div className={style.Section3}>

            <div className={style.Section3Inner}>



                <div className={style.Section3Box} id={style.text} data-aos="fade-right" data-aos-duration="1200">
                    <h3>Automa<span>tion</span>.</h3>
                   <Line/>
                    <p>Automating and digitizing the critical, paper intensive, first mile of business processes enables Anchor Insurance to cut down on time spent in processing paper forms, the unfortunate chances of duplication of records and in efficient data management system outside of the current system of records in place.  </p>
                    <p>With Mobile/electronic forms, capturing data becomes simpler and more accurate. Data from electronic forms can is immediately available to designated users, routed for action, and set to trigger certain processes automatically.</p>

                </div>


                <div className={style.Section3Box} id={style.image} data-aos="fade-left" data-aos-duration="1200">
                    <img src={Section3} alt="" />
                </div>

            </div>

        </div>

    )

}


export default SectionThree