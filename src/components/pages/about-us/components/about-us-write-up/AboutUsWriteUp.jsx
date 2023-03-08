import Line from '../../../../line/Line'
import style from './assets/css/AboutUsWriteUp.module.css'

function AboutUsWriteUp() {
    return (
        <div className={style.AboutUsWriteUp} data-aos="fade-up" data-aos-duration="1200">

            <div className={style.AboutUsWriteUpBox}>
                <div className={style.AboutUsWriteUpIntro}>
                    <h3>Who Are <span> We?</span></h3>
                </div>
                <Line/>

                <p data-aos="fade-up" data-aos-duration="1200">SmatForms Mobile and web Application Platform is a product of AfriLight Technologies Ltd. We are an innovative software development company that is passionate about helping our customers achieve more efficient business operations. We provide leading-edge software solutions which automate key business processes and business rules, via web and smart mobile devices.</p>
                <p data-aos="fade-up" data-aos-duration="1200">Our solutions are used in a diverse range of industries, including utility companies, Fast Moving Consumer Goods (FMCG), logistics, and the military. We believe that our software can help to improve efficiency and provide a better user experience for our customers.</p>
                <p data-aos="fade-up" data-aos-duration="1200">We are proud of the success of our solutions and the difference they make to our customers. We are committed to providing our customers with the best possible technology solutions, and we are always looking for ways to improve our services.</p>
         </div>
        </div>
    )
}

export default AboutUsWriteUp 