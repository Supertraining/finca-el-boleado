import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import Form from './Form';

const Cart = () => {

  const { cart, totalPrice, clear, disableCart, sobreVenta } = useContext(CartContext);

  if (totalPrice() === 0) {
    return (
      <div className='text-center my-5'>
        <p className='fs-1 my-4'>El carrito esta vacío!</p>
        <Link to={'/'} className='text-decoration-none border rounded p-3 bg-dark text-white'>Ir a comprar</Link>
      </div>
    )
  }

  return (
    <>
      <div className='d-flex' >
        <div className={`w-50 ${disableCart}`}>
          {cart.map(product => <CartItem key={product.id} product={product} sobreVenta = {sobreVenta}/>)}
          <p className='fs-4'><b>Total:</b> $ {totalPrice()}</p>
          <button className='bg-dark text-white rounded' onClick={() => { clear() }}>Vaciar mi carrito</button>
        </div>
        <div className='w-50'>
          <Form cart={cart} totalPrice={totalPrice} clear={clear} sobreVenta = {sobreVenta} />
        </div>
      </div>
    </>
  )

}
export default Cart