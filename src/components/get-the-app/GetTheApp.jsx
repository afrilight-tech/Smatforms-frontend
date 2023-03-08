import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/GetTheApp.module.css'
import { IoLogoGooglePlaystore, IoLogoAppleAppstore } from "react-icons/io5";

// Default component rendered in the Get The App section
function GetTheApp() {

    return (

        <div className={style.GetTheApp}>


            <div className={style.GetTheAppInner}>

                <div className={style.GetTheAppBox} id={style.text} data-aos="fade-right" data-aos-duration="1200">
                    <h3>Get The Mobile App <span>Today!</span></h3>
                    <div className={style.GetTheAppButtons}>
                    <Link to={'https://play.google.com/store/apps/details?id=ng.smatforms'} target={"_blank"} className={style.GetTheAppLink}><button>Play Store <IoLogoGooglePlaystore className={style.GetTheAppIcon}/> </button></Link>
                    <Link to={'https://apps.apple.com/app/id1356566395'} target={'_blank'} className={style.GetTheAppLink}><button>App Store <IoLogoAppleAppstore className={style.GetTheAppIcon}/></button></Link>
                    </div>
                 
                </div>


            </div>

        </div>

    )

}


export default GetTheApp