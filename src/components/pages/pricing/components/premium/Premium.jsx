import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/Premium.module.css'
import { AiOutlineInfoCircle } from "react-icons/ai";
import Line from "../../../../line/Line";
function Premium() {



    return (

        <div className={style.premium}>

            <div className={style.premiumInner}>

                <h3 data-aos="fade-up" data-aos-duration="1200" className={style.premiumTitle}>Prem<span>ium</span>.</h3>
                <Line />

                <h3 className={style.premiumPrice}> <span>&#8358;</span>20,000</h3>
                <p data-aos="fade-up" data-aos-duration="1200">Per User Per Month</p>
                <h4 data-aos="fade-up" data-aos-duration="1200">Enterprise features that mean business</h4>

                <div data-aos="fade-up" data-aos-duration="1200" className={style.premiumBox}>
                    <p>All Screen Types </p>

                    <div class={style.tooltip}><AiOutlineInfoCircle className={style.premiumInfoIcon} />
                        <span class={style.tooltiptext}> Go Beyond Forms! Rapidly create line of business apps with menus, enquiries, data capture and mapping, all without writing code</span>
                    </div>
                </div>


                <div data-aos="fade-up" data-aos-duration="1200" className={style.premiumBox}>
                    <p>All Connectors </p>

                    <div class={style.tooltip}><AiOutlineInfoCircle className={style.premiumInfoIcon} />
                        <span class={style.tooltiptext}> Each
                            Standard user can submit a maximum of
                            1,500 Form entries per month.</span>
                    </div>

                </div>



                <div data-aos="fade-up" data-aos-duration="1200" className={style.premiumBox}>
                    <p>Unlimited Storage   </p>

                    <div class={style.tooltip}><AiOutlineInfoCircle className={style.premiumInfoIcon} />
                        <span class={style.tooltiptext}> No worries
                            about data or file storage limits – we got you
                            covered with secure data provision</span>
                    </div>

                </div>



                <div data-aos="fade-up" data-aos-duration="1200" className={style.premiumBox}>
                    <p>iOS, Android & Windows   </p>
                    <div class={style.tooltip}><AiOutlineInfoCircle className={style.premiumInfoIcon} />
                        <span class={style.tooltiptext}> Rapidly create
                            business apps that run natively on Android and
                            Apple mobile devices, as well as Windows 7, 8 and
                            10 desktop PCs</span>
                    </div>

                </div>



                <div data-aos="fade-up" data-aos-duration="1200" className={style.premiumBox}>
                    <p>Unlimited Form Submissions    </p>

                    <div class={style.tooltip}><AiOutlineInfoCircle className={style.premiumInfoIcon} />
                        <span class={style.tooltiptext}> Premium users
                            can capture as many Form entries as desired – great
                            for heavy usage scenarios.</span>
                    </div>


                </div>


                <div data-aos="fade-up" data-aos-duration="1200" className={style.premiumBox}>
                    <p>Tasking / Job Dispatch</p>

                    <div class={style.tooltip}><AiOutlineInfoCircle className={style.premiumInfoIcon} />
                        <span class={style.tooltiptext}> Dispatch jobs to
                            workers in the field and office using our built-in
                            Tasking functionality. Boost productivity and take
                            your business mobile!</span>
                    </div>

                </div>



                <div data-aos="fade-up" data-aos-duration="1200" className={style.premiumBox}>
                    <p>Document Management </p>
                    <div class={style.tooltip}><AiOutlineInfoCircle className={style.premiumInfoIcon} />
                        <span className={style.tooltiptext}> Use our light-
                            weight Docs functionality to ensure everyone has
                            access to the latest compliance, procedures,
                            manuals and specifications.</span>
                    </div>

                </div>


                <Link to={"/pricing/premium-contact"} className={style.premiumLink}><button data-aos="fade-up" data-aos-duration="1200">Start Your Free Trial</button></Link>

            </div>

        </div>

    )

}


export default Premium