import React from "react";
import style from './assets/css/Contact.module.css'
import ContactHero from "./components/hero/ContactHero";
import ContactForm from "./components/form/ContactForm";
import { useEffect } from "react";



function StandardContact() {

    useEffect(() => {

        document.title = "Standard Plan"
    })

    // the default component returned when the page is requested on the server
    return (


        <div className={style.contact} id="standardContact">




        <ContactForm/>

        </div>
    )
}

export default StandardContact