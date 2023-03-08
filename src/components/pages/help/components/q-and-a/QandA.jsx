import style from './assets/css/QandA.module.css'
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Line from '../../../../line/Line';
import { QandAData } from './data/QandAData';
function QandA() {


    // the default component dispalyed on the Question and Answer component
    return (
        // QandA
        <div className={style.QandA}>


            <div className={style.QandAIntro}>
                <h3>Frequently Asked<span> Questions</span></h3>
                <Line />
            </div>




            <div className={style.QandAInner}>
                {
                    QandAData.map((data, index) => (
                        <div className={style.QandABox}>
                            <h4 key={index}>{data.question}</h4>
                            <p  data-aos="fade-up" data-aos-duration="1200" key={index}>{data.answer}</p>
                        </div>
                    ))
                }


            </div>



            <div className={style.NotHelp}>
                <h3 data-aos="fade-up" data-aos-duration="1200">Not The Help <span>You</span> Are Looking <span>For?</span></h3>
                <Line />
                <p data-aos="fade-up" data-aos-duration="1200">Kindly reach out to us today and we will answer all your disturbing questions.</p>
                <Link to={"/contact"} className={style.NotHelpLink}><button data-aos="fade-up" data-aos-duration="1200">Get In Touch</button></Link>
            </div>
        </div>

    )
}

export default QandA 