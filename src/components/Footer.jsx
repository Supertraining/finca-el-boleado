import logo from '../assets/img/Logo_Boleado2.jpg'
import facebook from '../assets/img/icons/facebook.png'
import instagram from '../assets/img/icons/instagram.png'
import whatsapp from '../assets/img/icons/whatsapp.png'
import email from '../assets/img/icons/email.png'


const footer = () => {

    return (

        <footer className='row d-flex flex-wrap align-items-center justify-content-evenly bg-dark mt-5' id='piePag'>

            <div className='col-md-3 col-sm-5 col-9 d-flex flex-column align-items-center mt-sm-5 mt-5'>
                <a className='text-decoration-none'
                    href='./index.html'>
                    <div className='w-auto d-flex flex-column align-items-center'>
                        <img className='img-fluid'
                            src={logo}
                            alt='Logo' />
                        <p className='text-white text-center mt-2'>GUANACO BOLEADO. CÓRDOBA.</p>
                    </div>
                </a>
            </div>

            <div className='col-md-5 col-sm-5 col-10 d-flex flex-column align-items-center mt-sm-5'>
                <iframe title='mapa' className='img-fluid'
                    src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d90943.41851202038!2d-65.164012284533!3d-32.10460072002225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfcc41eabcbdab3a5!2sFinca%20El%20Boleado!5e0!3m2!1ses!2sar!4v1647917528304!5m2!1ses!2sar'
                    style={{ height: '170px' }}
                    allowFullScreen
                    loading='lazy'>
                </iframe>
                <p className='text-white text-center'>km 153, Ruta Provincial 14, Travesía, Córdoba</p>
            </div>
            
            <div className='col-md-1 col-sm-5 col-5 footer__NavBarSocial d-flex flex-md-column justify-content-center align-items-md-center mt-2'>
                <a href='https://www.facebook.com/fincaelboleado/'><img className='face'
                    src={facebook}
                    alt='facebook' /></a>
                <a href='https://www.instagram.com/fincaelboleado/?hl=es'><img className='insta'
                    src={instagram}
                    alt='instagram' /></a>
                <a href='https://wa.me/######'><img className='wapp'
                    src={whatsapp}
                    alt='whatsapp' /></a>
                <a href='mailto:fincaelboleado@gmail.com'><img className='mail'
                    src={email}
                    alt='email' /></a>
            </div>
        </footer>
    )
}

export default footer