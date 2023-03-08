import React from "react";
import style from './assets/css/Contact.module.css'
import ContactHero from "./components/hero/ContactHero";
import ContactForm from "./components/form/ContactForm";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";


function Contact() {


    // the default component returned when the page is requested on the server
    return (


        <>
            <Helmet>
                <title>Get In Touch</title>
                <meta name="description" content="Contact Us To Learn More About Smatforms Today." />
                <link rel="canonical" href="/contact" />
            </Helmet>



            <div className={style.contact} id="contact">




                <ContactForm />

            </div>

        </>
    )
}

export default Contact