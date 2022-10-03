import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from "react";


export const CartContext = createContext();


const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [])
  const [disableCart, setDisableCart] = useState('')
  const [sobreVenta, setsobreVenta] = useState(false)

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(cart.map((product) => {
        return product.id === item.id ? { ...product,stock: product.stock = item.stock , quantity: product.quantity + quantity } : product
      }))
    } else {
      setCart([...cart, { ...item, quantity }])
    }
  };

  const isInCart = (id) => cart.some(e => (e.id === id));

  const removeItem = (id) => setCart(cart.filter(e => e.id !== id));

  const clear = () => setCart([]);

  const totalPrice = () => cart.reduce((a, b) => a + b.precio * b.quantity, 0);

  const totalProducts = () => cart.reduce((a, b) => a + b.quantity, 0);

 

    useEffect(() => {
    if (cart.length >= 0) {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart]);

  useEffect(() => {
      cart.forEach((e) => {
          if (e.quantity > e.stock) {
              setsobreVenta(true)
          }
          else{setsobreVenta(false)}
      })
  }, [cart])

  return (

    <CartContext.Provider value={{ addItem, isInCart, clear, removeItem, totalPrice, totalProducts, setDisableCart, disableCart, cart, sobreVenta }}>
      {children}
    </CartContext.Provider>

  )
}

export default CartProvider
