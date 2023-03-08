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

                <h3></h3>
                <Line/>


            </div>


            <div className={style.ImportanceInner}>


                {/* data mapped from the  ImportanceData.js */}
                {

                    ImportanceData.map((value) => (
                        <div className={style.ImportanceBox} id={style.text} data-aos="fade-up" data-aos-duration="1200">
                            <div className={style.ImportanceBoxIntro}>
                                <BsFillCheckCircleFill className={style.ImportanceBoxIcon} data-aos="fade-up" data-aos-duration="1200" />
                                <h3>{value.data} </h3>
                            </div>
                        </div>


                    ))
                }


            </div>

        </div>
    )
}

export default Importance
