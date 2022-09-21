import React from 'react';
import { useState } from 'react';
import { createContext } from "react";


export const CartContext = createContext(); 



const CartProvider = ({children}) => {
  
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity)=> {
    if (isInCart(item.id)){
      setCart(cart.map((product)=> {
        return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
      }))
    } else {
          setCart([...cart, {...item, quantity} ])
    }
  };
  const isInCart = (id) => cart.some(e=> (e.id === id));
  

  const removeItem = (id) => setCart(cart.filter(e => e.id !==id)); 


  const clear = () => setCart([]);

  const totalPrice = () => cart.reduce((a,b) => a + b.precio * b.quantity, 0);

  const totalProducts = () => cart.reduce((a,b) => a + b.quantity, 0);


  return (

    <CartContext.Provider value={{addItem, isInCart, clear, removeItem, totalPrice, totalProducts, cart}}>
      {children}
    </CartContext.Provider>
    
  )
}

export default CartProvider
