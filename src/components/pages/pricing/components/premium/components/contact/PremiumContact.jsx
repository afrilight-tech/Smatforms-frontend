import React from "react";
import style from './assets/css/Contact.module.css'
import ContactHero from "./components/hero/ContactHero";
import ContactForm from "./components/form/ContactForm";
import { useEffect } from "react";



function PremiumContact() {


    // the default component returned when the page is requested on the server
    return (


        <div className={style.contact} id="premiumContact">




        <ContactForm/>

        </div>
    )
}

export default PremiumContact