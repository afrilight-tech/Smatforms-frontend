import style from './assets/css/ContactHero.module.css'

function ContactHero() {


    // default component rendered in the contact hero section
    return (
        <div className={style.hero}>

            <div className={style.hero_inner}>


                        <div className={style.Background}>

                        </div>

                        <div className={style.heroText}>
                            <div className={style.heroTextInner} data-aos="fade-right" data-aos-duration="1200">
                                <h3>Contact <span>us</span></h3>
                           </div>
                        </div>


            </div>

        </div>
    )
}

export default ContactHero
