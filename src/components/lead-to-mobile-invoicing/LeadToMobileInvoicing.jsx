import Line from '../line/Line'
import style from './assets/css/LeadToMobileInvoicing.module.css'
import { Link } from 'react-router-dom'
function LeadToMobileInvoicing() {
    return (
        <div className={style.LeadToMobileInvoicing} data-aos="fade-up" data-aos-duration="1200">

            <div className={style.LeadToMobileInvoicingBox}>
                <h3 data-aos="fade-up" data-aos-duration="1200">Handheld Invoicing <span>System</span> With Printing <span>Functionality</span>.</h3>
                <Line />
                <p data-aos="fade-up" data-aos-duration="1200">Customize mobile invoice templates your reps can print anywhere while on the go. Enable our digital signature capture to record and store online signatures for each invoice.</p>
                <Link to={"/mobile-invoicing"} className={style.LeadToMobileInvoicingLink}><button data-aos="fade-up" data-aos-duration="1200">Learn More</button></Link>
            </div>

        </div>
    )
}

export default LeadToMobileInvoicing 