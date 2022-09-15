import React from 'react';
import { useState } from 'react';
import { createContext } from "react";


export const CartContext = createContext(); 



const CartProvider = ({children}) => {
  
  const [cart, setCart] = useState([]);

  const addItem = (item, quantityToAdd)=> {
    setCart([...cart, {...item, quantityToAdd} ])
  }

const isInCar = (id) => cart.find(e=> (e.id === id) ? true: false);
  

const removeItem = (id) => cart.filter(e => e.id !==id);


const clear = () => setCart([]);


  return (
    <CartContext.Provider value={{cart, addItem}}>
      {children}
    </CartContext.Provider>
    
  )
}

export default CartProvider
