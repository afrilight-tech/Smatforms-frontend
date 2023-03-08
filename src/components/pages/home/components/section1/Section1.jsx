import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/Section1.module.css'
import Section1 from './assets/images/section1.png'
import Line from "../../../../line/Line";

// Default component rendered in the Section1 section
function SectionOne() {

    return (

     
        <div className={style.Section1} id="section1">

            <div className={style.Section1Inner}>


                <div className={style.Section1Box} id={style.text} data-aos="fade-right" data-aos-duration="1200">
                    <h3>A Task Management <span>System </span> That Makes <span>Sense</span>.</h3>
                    <Line />
                    <p><span>•</span> SmatForms lets you assign tasks to relevant users and teams while setting specific deadlines. Managing tasks out in the field doesn’t need to be time-consuming. </p>
                    <p><span>•</span> Automate task flows – complete with push notifications, view task maps, set minimum requirements for completion and much more.</p>
                    <p><span>•</span> You can also set up recurring tasks and view current active tasks along with their status. Linking tasks to certain apps or forms is also straight forward and goes a long way to keeping your workforce focused, organized and productive.
                    </p>
                </div>



                <div className={style.Section1Box} id={style.image} data-aos="fade-left" data-aos-duration="1200">
                    <img src={Section1} alt="" />
                </div>



            </div>

        </div>

    )

}


export default SectionOne