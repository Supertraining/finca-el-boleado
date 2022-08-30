import React from 'react'
import logo from '../img/Logo_Boleado2.jpg'
import CartWidget from './CartWidget'


export const NavBar = () => {
    return (
    <>
        <div className='w-auto d-flex align-items-center'>
            <img src={logo} alt="logo" className='h-75' />
        </div>
        <ul className='list-unstyled w-auto d-flex'>
            <li className='p-4'><a href='###' className='link-light text-decoration-none p-2'>Quienes somos</a></li>
            <li className='p-4'><a href='###' className='link-light text-decoration-none p-2'>Nuestra historia</a></li>
            <CartWidget />
        </ul>
        
    </>
    )
}

