import React from 'react'
import logo from '../img/Logo_Boleado2.jpg'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <>
            <header className='row bg-dark d-flex justify-content-around'>
                <div className='w-auto d-flex align-items-center'>
                    <Link to='/'>
                        <img src={logo} alt='logo' className='h-75 my-1' />
                    </Link>
                </div>
                <ul className='nav d-flex w-50'>
                    <div className='text-white p-4 text-center'>Categorías
                        <li className='p-3 mt-2'><NavLink to='category/vino' className='link-light text-decoration-none p-3 rounded'>Vinos</NavLink></li>
                        <li className='p-3'><NavLink to='category/aperitivo' className='link-light text-decoration-none p-3 rounded'>Aperitivos</NavLink></li>
                    </div>
                </ul>
                <CartWidget />
            </header>
        </>
    )
}

export default NavBar
