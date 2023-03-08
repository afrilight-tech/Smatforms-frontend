import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/Standard.module.css'
import { AiOutlineInfoCircle } from "react-icons/ai";
import Line from "../../../../line/Line";
function Standard() {



    return (


        <div className={style.standard}>

            <div className={style.standardInner}>

                <h3 data-aos="fade-up" data-aos-duration="1200" className={style.standardTitle}>Stand<span>ard</span>.</h3>
                <Line />
                <h3 data-aos="fade-up" data-aos-duration="1200" className={style.standardPrice}> <span>&#8358;</span>10,000</h3>
                <p data-aos="fade-up" data-aos-duration="1200">Per User Per Month</p>
                <h4 data-aos="fade-up" data-aos-duration="1200">Create and Run data-driven apps</h4>

                <div data-aos="fade-up" data-aos-duration="1200" className={style.standardBox}>
                    <p>All Screen Types </p>

                    <div class={style.tooltip}><AiOutlineInfoCircle className={style.standardInfoIcon} />
                        <span class={style.tooltiptext}> Go Beyond Forms! Rapidly create line of business apps with menus, enquiries, data capture and mapping, all without writing code</span>
                    </div>
                </div>


                <div data-aos="fade-up" data-aos-duration="1200" className={style.standardBox}>
                    <p>Standard Connectors </p>

                    <div class={style.tooltip}><AiOutlineInfoCircle className={style.standardInfoIcon} />
                        <span class={style.tooltiptext}> Push and
                            pull data between popular cloud services
                            and other systems using our built-in
                            connectors.</span>
                    </div>

                </div>



                <div data-aos="fade-up" data-aos-duration="1200" className={style.standardBox}>
                    <p>Unlimited Storage </p>

                    <div class={style.tooltip}><AiOutlineInfoCircle className={style.standardInfoIcon} />
                        <span class={style.tooltiptext}> No worries
                            about data or file storage limits – we got you
                            covered with secure data provision</span>
                    </div>

                </div>



                <div data-aos="fade-up" data-aos-duration="1200" className={style.standardBox}>
                    <p>iOS, Android & Windows   </p>
                    <div class={style.tooltip}><AiOutlineInfoCircle className={style.standardInfoIcon} />
                        <span class={style.tooltiptext}> Rapidly
                            create business apps that run natively on
                            Android and Apple mobile devices, as well as
                            Windows desktop PCs.</span>
                    </div>

                </div>



                <div data-aos="fade-up" data-aos-duration="1200" className={style.standardBox}>
                    <p>1,500 Form Submission </p>

                    <div class={style.tooltip}><AiOutlineInfoCircle className={style.standardInfoIcon} />
                        <span class={style.tooltiptext}>Each
                            Standard user can submit a maximum of
                            1,500 Form entries per month.</span>
                    </div>


                </div>
 

                <Link to={"/pricing/standard-contact"} className={style.standardLink}><button data-aos="fade-up" data-aos-duration="1200">Start Your Free Trial</button></Link>

            </div>

        </div>)

}


export default Standard