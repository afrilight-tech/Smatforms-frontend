import Line from '../../../../line/Line'
import style from './assets/css/GettingStarted.module.css'
import { Link } from 'react-router-dom'
function GettingStarted() {
    return (


        <div className={style.GettingStarted} data-aos="fade-up" data-aos-duration="1200">
        <div className={style.GettingStartedInner}>
                <h3 data-aos="fade-up" data-aos-duration="1200">Getting <span>Started</span></h3>
                <Line />
                <p data-aos="fade-up" data-aos-duration="1200">To get started, you'll need to have an account with us. If you haven't already created an account, you can do so by visiting the pricing page, select a plan and fill the form. Once we've created your account, we will give you access to the dashboard where you can access all of our product's features and functions based on the plan you subscribe to.</p>
                <Link to={"/pricing"} className={style.GettingStartedLink}><button data-aos="fade-up" data-aos-duration="1200">See Plans & Pricing</button></Link>
            </div>

        </div>

    )
}

export default GettingStarted 