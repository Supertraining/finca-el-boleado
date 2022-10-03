import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const CartItem = ({ product }) => {

  const { removeItem } = useContext(CartContext);

  return (
    <div className="border rounded p-3 m-2 d-flex justify-content-between">
      <div className='m-2 text-center'>
        <img style={{ width: '100px', height: '100px' }} src={product.picture} alt={product.titulo} />
        <p>{product.title}</p>
      </div>
      <div className='m-2'>
        <p><b>Cantidad:</b>  {product.quantity}</p>
        <p><b>Valor:</b> ${product.precio}</p>
        <p><b>Sub-Total:</b> ${product.precio * product.quantity}</p>
      </div>
      <button className='bg-dark text-white rounded' onClick={() => { removeItem(product.id); sessionStorage.removeItem(product.id) }}>Eliminar</button>
    </div>
  )
}

export default CartItem