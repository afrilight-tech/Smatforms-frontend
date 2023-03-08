import style from './assets/css/ContactForm.module.css'
import React from "react";
import { FaStar } from "react-icons/fa";
import axios from 'axios'
import FormSent from "../formsent/FormSent";
import Spinner from "..//spinner/Spinner";
import { useState, useMemo } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Line from '../../../../line/Line';


function ContactForm() {

    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]');
    const [formSent, setFormSent] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [value, setValue] = useState('')
    const [isVerified, setIsVerified] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        job: '',
        reason: '',
        company: '',

    });


    // Initailizing the library used for the animations on scroll
    useEffect(() => {
        AOS.init();
    }, []);


    // this function handles the onchage event of the all form inputs except from country and captcha
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };




    // this function handles the captcha challenge verification
    const onCaptchaChange = (value) => {
        setIsVerified(value);
    };



    // this function handles the submission of the form
    const handleSubmit = (e) => {
        e.preventDefault();

        // once the form is submitting the window scrolls to the top to make the loading and succes state visible
        window.scrollTo({ top: 40, behavior: "smooth" });


        //if the captcha is not verified this error would be rendered
        if (!isVerified) {
            setErrorMessage("Please, verify that you are human!");
            return;
        }

        // once all required fields are filled  the sending state is set to true and a new component is rendered
        setIsSending(true);



        // the form data is posted to the backend responsible for sending the form to the admin's mail and the user's mail
        const contactFormData = new FormData
        contactFormData.append('name', formData.name)
        contactFormData.append('email', formData.email)
        contactFormData.append('phone', formData.phone)
        contactFormData.append('message', formData.message)
        contactFormData.append('company', formData.company)
        contactFormData.append('reason', formData.reason)
        contactFormData.append('job', formData.job)

        try {
            axios.post('https://smatforms-backend.onrender.com/contactmail', contactFormData).then((res) => {
                console.log(res.message);
                setIsSending(false);
                setFormSent(true);
            })
        } catch (error) {
            console.log(error)
            setIsSending(false);
        }
    }



    // while the form is sending, a new component is displayed
    if (isSending) {
        return <Spinner />
    }


    // once the form is sent, a another component is displayed
    if (formSent) {
        return <FormSent name={formData.name} />
    }


    // the default component returned when the page is requested on the server
    return (


        <div className={style.contactForm} id="contactForm">

            <div className={style.contactFormInner}>


                <div className={style.contactOptions} data-aos="fade-right" data-aos-duration="1200">

                    <div className={style.contactOptionsIntro}>
                        <h3>Need Some <span>Assistance?</span></h3>
                        <Line />
                        <p>Kindly fill the form to  report a problem or ask a question, you can also visit us at our office, or contact us directly using the details below</p>
                    </div>

                    <div className={style.contactDetails}>
                        <p> <FaLocationArrow className={style.contactDetailsIcon} /> 37, Adeniyi Jones Avenue, Ikeja Lagos.</p>
                        <a href="mailto:demo@smatforms.ng"> <p><FaEnvelope className={style.contactDetailsIcon} />demo@smatforms.ng.</p></a>
                        <p><FaPhone className={style.contactDetailsIcon} /> <a href="tel:+234-8084128802">+234-8084128802 </a></p>
                    </div>

                </div>




                {/* Form warapper */}
                <div className={style.form_wrapper} data-aos="fade-left" data-aos-duration="1200">
                    <form method="POST" onSubmit={handleSubmit}>


                        {/* csrf_token */}
                        <input type="hidden" name="csrfmiddlewaretoken" value="{{ csrf_token }}" />


                        <div className={style.formGrid}>
                            {/* Full name */}
                            <div className={style.name}>
                                <div className={style.form_item}>
                                    <label htmlFor="name"><label>Full Name</label> <span>*</span></label>
                                    <input name='name' value={formData.name} type="text" placeholder="John Doe" onChange={handleChange} required id='name' />

                                    <p className={style.error}>This field is required</p>
                                </div>
                            </div>


                            {/* Email */}
                            <div className={style.email}>
                                <div className={style.form_item}>
                                    <label htmlFor="email"><label>Email</label> <span>*</span></label>
                                    <input name='email' type="email" placeholder="yourname@email.com" required onChange={handleChange} id='email' />

                                    <p className={style.error}>This field is required</p>
                                </div>
                            </div>
                        </div>


                        <div className={style.formGrid}>
                            {/* Phone */}
                            <div className={style.phone}>
                                <div className={style.form_item}>
                                    <label htmlFor="phone"><label>Phone</label> <span></span></label>
                                    <input name="phone" type="tel" placeholder="+234..." id='phone' onChange={handleChange} />
                                </div>
                            </div>



                            {/* Comapany */}
                            <div className={style.company}>
                                <div className={style.form_item}>
                                    <label htmlFor="company"><label>Company</label> <span></span></label>
                                    <input name="company" type="text" placeholder="Your Company" id='company' onChange={handleChange} />
                                </div>
                            </div>


                        </div>

                      
                            {/* Job */}
                            <div className={style.job}>
                                <div className={style.form_item}>
                                    <label htmlFor="company"><label>Job Title</label> <span></span></label>
                                    <input name="job" type="text" placeholder="Job Title" id='job' onChange={handleChange} />
                                </div>
                            </div>

                      


                        <div className={style.formGrid}>
                            {/* Reason */}
                            <div className={style.reason}>
                                <div className={style.form_item}>
                                    <label htmlFor="reason"><label>Reason For Contacting</label> <span>*</span></label>
                                    <textarea id="reason" name="reason" required onChange={handleChange} placeholder="E.g: Ask a question, Report a problem" />
                                    <p className={style.error}>This field is required</p>
                                </div>
                            </div>


                            {/* Message */}
                            <div className={style.message}>
                                <div className={style.form_item}>
                                    <label htmlFor="message"><label>Message</label> <span>*</span></label>
                                    <textarea id="message" name="message" required onChange={handleChange} placeholder="A detailed description of the request or issue" />
                                    <p className={style.error}>This field is required</p>
                                </div>
                            </div>
                        </div>

                        {/* Recaptcha */}
                        <div className={style.form_item}>
                            <ReCAPTCHA className={style.reCaptcha} sitekey="6Lcii2wkAAAAAPTEXfS5QB4QGTge_S2hLXwOA9bR" onChange={onCaptchaChange} />
                            {errorMessage && <p className={style.captchaError}>{errorMessage}</p>}
                        </div>

                        {/* Submit */}
                        <div className={style.form_item}>
                            <div className={style.submit}>
                                <button type="submit">
                                Get In Touch
                                </button>
                            </div>
                        </div>

                    </form>


                </div>
                {/* Form warapper */}

            </div>
        </div>
    )
}

export default ContactForm