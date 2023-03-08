import style from './assets/css/MobileInvoicingHero.module.css'

function MobileInvoicingHero() {


    // default component rendered in the About Us hero section
    return (
        <div className={style.hero}>

            <div className={style.hero_inner}>


                        <div className={style.Background}>

                        </div>

                        <div className={style.heroText}>
                            <div className={style.heroTextInner} data-aos="fade-right" data-aos-duration="1200">
                                <h3>Mobile <span>Invoicing</span> </h3>
                           </div>
                        </div>


            </div>

        </div>
    )
}

export default MobileInvoicingHero
