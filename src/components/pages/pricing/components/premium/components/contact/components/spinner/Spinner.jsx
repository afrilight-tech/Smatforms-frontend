import style from './assets/css/Spinner.module.css'
import { FaLaptopCode, FaStar, FaPrayingHands } from "react-icons/fa";


function Spinner() {
    return (
        <>

            <div className={style.spinnerWrapper}>
                <div className={style.spinner} data-aos="fade-down" data-aos-duration="1200">
                    <div className={style.bounce1}></div>
                    <div className={style.bounce2}></div>
                    <div className={style.bounce3}></div>
                    <p>Sending...</p>
                </div>
            </div>
        </>)
}

export default Spinner 