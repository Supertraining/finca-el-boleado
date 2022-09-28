import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import Form from './Form';

const Cart = () => {

const {cart, totalPrice, clear} = useContext(CartContext);

  if(totalPrice() === 0) {
    return (
      <div className='text-center my-5'>
        <p className='fs-1 my-4'>El carrito esta vacio!</p>
        <Link to={'/'} className='text-decoration-none border rounded p-3 bg-primary text-white'>Ir a comprar</Link>
      </div>
    )
  }
  
  return(
    <>
    <div className=''>
    {cart.map(product => <CartItem key={product.id} product= {product}/>)}
      <p className='fs-1'><b>Total:</b>$ {totalPrice()}</p>
      <button onClick={clear}>Vaciar mi carrito</button>
    </div>
    <Form cart = {cart} totalPrice = {totalPrice} clear = {clear}/>
   </>
  )
  
}
export default Cart