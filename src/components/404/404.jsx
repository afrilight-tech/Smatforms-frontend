import style from './assets/css/404.module.css'
import NotFoundImage from './assets/images/not-found.png'
import Line from '../line/Line'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
function NotFound() {


    return (
        <>
            <Helmet>
                <title>Not Found</title>
                <meta name="description" content="The page you requested cannot be found on this server" />
                <link rel="canonical" href="*" />
            </Helmet>
            <div className={style.NotFound}>
                <div className={style.NotFoundBox}>
                    <img src={NotFoundImage} alt="Not Found" />
                    <h3>Not Fo<span>und!</span></h3>
                    <p>The page you requested cannot be found on this server.</p>
                    <Link to={'/'} className={style.NotFoundLink}><button>See Home Page</button></Link>
                </div>
            </div>
        </>
    )
}
export default NotFound

