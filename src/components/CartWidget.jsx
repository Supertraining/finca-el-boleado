import React from 'react'
import cart from '../img/cart-33-32.png'

function CartWidget () {
  return (
    <div className='Div__cart'>
        <a href="###"><img src={cart} alt="" className='cart link-light' /></a>
    </div>
  )
}

export default CartWidget