import React from 'react'
import logo from '../img/Logo_Boleado2.jpg'
import CartWidget from './CartWidget'
import {Link, NavLink} from 'react-router-dom'


export const NavBar = () => {
    return (
    <>
        <header className='row bg-dark d-flex justify-content-around'>
            <div className='w-auto d-flex align-items-center'>
                <Link  to='/'>
                    <img src={logo} alt="logo" className='h-75 my-1' />
                </Link>
            </div>
            <ul className='list-unstyled w-auto d-flex'>
                <li className='p-4'><NavLink  to='category/vino' className='link-light text-decoration-none p-2'>Vinos</NavLink></li>
                <li className='p-4'><NavLink  to='category/aperitivo' className='link-light text-decoration-none p-2'>Aperitivos</NavLink></li>
                <CartWidget />
            </ul>
        </header>
    </>
    )
}

