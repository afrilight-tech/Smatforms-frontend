import Line from '../../../../line/Line'
import style from './assets/css/OptionalAddons.module.css'
import { Link } from 'react-router-dom'
function OptionalAddons() {
    return (
        <div className={style.OptionalAddons} data-aos="fade-up" data-aos-duration="1200">

            <div className={style.OptionalAddonsBox}>
                <div className={style.OptionalAddonsIntro}>
                    <h3>Optional Add<span>-Ons</span></h3>
                </div>
                <Line />

                <div className={style.addons}>
                    <div className={style.addon}>
                        <h4>Enterprise Toolkit</h4>
                        <p data-aos="fade-up" data-aos-duration="1200">Unlocks the ability to set up multiple, separate environments as part of your company
                            account. Also included is our Repository functionality which allows you to copy and
                            synchronise apps, Docs and Data Sources between your environments.</p>
                    </div>

                    <div className={style.addon}>
                        <h4>SmatForms Sync</h4>
                        <p data-aos="fade-up" data-aos-duration="1200">Best described as “integration in a box”, Sync automatically synchronises data between the
                            SmatForms platform and a local SQL database running on your own systems.</p>
                    </div>


                    <div className={style.addon}>

                        <h4>App as a Service</h4>
                        <p data-aos="fade-up" data-aos-duration="1200">This is our white label offering, providing native apps carrying branding, images and colour
                            schemes of your choice from end to end, and published into the respective app stores under
                            your name.</p>
                    </div>

                    <div className={style.addon}>
                        <h4>Website as a Service</h4>
                        <p data-aos="fade-up" data-aos-duration="1200">Rebrand our cloud platform with your company’s identity, effectively offering all the
                            features of the SmatForms platform under your name to your contractors and/or clients,
                            with no SmatForms mentions anywhere.</p>
                    </div>


                    <div className={style.addon}>
                        <h4>SmatForms Server</h4>
                        <p data-aos="fade-up" data-aos-duration="1200">Host our entire platform yourself with our SmatForms Server product. This gives you full
                            control over all data, backups and network security and lets you choose the pace of
                            upgrades to suit your processes and standards.</p>
                    </div>

                </div>


            </div>

            <div className={style.suitablePlan}>
                <h3 data-aos="fade-up" data-aos-duration="1200">Still Can't <span>Find</span>  A Suitable <span>Plan?</span></h3>
                <Line />
                <p data-aos="fade-up" data-aos-duration="1200">Let our practitioners help you out with choosing the best plan for your needs.</p>
                <Link to={"/contact"} className={style.suitablePlanLink}><button data-aos="fade-up" data-aos-duration="1200">Get In Touch</button></Link>
            </div>

        </div>
    )
}

export default OptionalAddons 