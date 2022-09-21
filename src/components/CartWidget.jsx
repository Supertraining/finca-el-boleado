import React from 'react'
import cart from '../img/cart-33-32.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'


function CartWidget () {

  const {totalProducts} = useContext(CartContext)

  return (
    <div className='Div__cart'>
        <Link to='/cart'><img src={cart} alt="" className='cart link-light' /></Link>
        <span className={totalProducts()&&'bg-white rounded-5 p-2'}>{totalProducts() || ''}</span>
    </div>
  )
}

export default CartWidget