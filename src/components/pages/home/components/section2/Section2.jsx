import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/Section2.module.css'
import Section2 from './assets/images/section2.png'
import Line from "../../../../line/Line";

// Default component rendered in the Section2 section
function SectionTwo() {

    return (

        <div className={style.Section2}>

            <div className={style.Section2Inner}>


                <div className={style.Section2Box} id={style.image} data-aos="fade-right" data-aos-duration="1200">
                    <img src={Section2} alt="" />
                </div>


                <div className={style.Section2Box} id={style.text} data-aos="fade-left" data-aos-duration="1200">
                    <h3>Build Your Own <span>Apps</span> & <span>Forms</span>.</h3>
                    <Line/>
                    <p>With our intuitive Drag-n-Drop interface, you’ll be able to create worker-facing forms to make the lives of your field, site, and office teams easier. </p>
                    <p>You can even grab apps from our examples catalogue – featuring over 100 apps – to edit to your unique needs. You’ll even be able to utilize our powerful task management system and automate large parts of your workflows.</p>
                    <p>There are many powerful fields at your disposal, including:</p>
                    <p> <span>•</span> Text & choice fields <br />
                        <span>•</span> Time & date fields <br />
                        <span>•</span> Signature capture fields <br />
                        <span>•</span> Photo & video fields <br />
                        <span>•</span> NFC & even custom formula fields
                    </p>
                </div>


            </div>

        </div>

    )

}


export default SectionTwo