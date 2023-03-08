import style from './assets/css/AboutUsHero.module.css'

function AboutUsHero() {


    // default component rendered in the About Us hero section
    return (
        <div className={style.hero}>

            <div className={style.hero_inner}>


                        <div className={style.Background}>

                        </div>

                        <div className={style.heroText}>
                            <div className={style.heroTextInner} data-aos="fade-right" data-aos-duration="1200">
                                <h3>About <span>us</span> </h3>
                           </div>
                        </div>


            </div>

        </div>
    )
}

export default AboutUsHero
