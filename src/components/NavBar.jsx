import logo from '../assets/img/Logo_Boleado2.jpg'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {


    return (
        <>
            <header>

                <nav className="p-2 navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to={'/'}>
                        <img src={logo} alt='logo' className='h-75 my-1' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup">

                        <div className="navbar-nav align-items-center">

                            <div className='p-3'>
                                <NavLink to='category/vino' className='text-white text-decoration-none p-3 rounded'>Vinos</NavLink>
                            </div>

                            <div className='p-3'>
                                <NavLink to='category/aperitivo' className='text-white text-decoration-none p-3 rounded'>Aperitivos</NavLink>
                            </div>

                            <CartWidget />

                        </div>
                    </div>
                </nav>

            </header>
        </>
    )
}

export default NavBar
