import style from './assets/css/Importance.module.css'
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ImportanceData } from './data/ImportanceData';
import { Link } from 'react-router-dom';
import Line from "../../../../line/Line";
function Importance() {




    // default component rendered in the Why Partner With Us  section
    return (

        <div className={style.Importance}>

            <div className={style.ImportanceIntro}>

                <h3>Advantages Of <span>Our</span> Mobile Invoice <span>App</span></h3>
                <Line/>


            </div>


            <div className={style.ImportanceInner}>


                {/* data mapped from the  ImportanceData.js */}
                {

                    ImportanceData.map((value) => (
                        <div className={style.ImportanceBox} id={style.text} data-aos="fade-up" data-aos-duration="1200">
                            <div className={style.ImportanceBoxIntro}>
                                <img src={value.image} alt="" />
                                <h3>{value.title} </h3>
                                <p>{value.details}</p>
                            </div>
                        </div>


                    ))
                }


            </div>

        </div>
    )
}

export default Importance
