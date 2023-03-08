import style from './assets/css/FormSent.module.css'
import { FaRegHandshake } from "react-icons/fa";


function FormSent({name}) {
    return (
        <div className={style.formSent} data-aos="fade-down" data-aos-duration="1200">
            <div className={style.formSentBox}>
                <FaRegHandshake className={style.formSentIcon} />
                <p>Thank you {name}, your reply have been sent!. Check the email you provided, we just sent you a confirmation.</p>
            </div>
        </div>
    )
}

export default FormSent 