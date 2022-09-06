import React, { useState } from 'react'


function ItemCounter(props) {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock ] = useState(props.stock)
    const [itemAdd, setItemAdd] = useState (0)

    const addItem = ()=> {
        if (counter < itemStock) {
            setCounter(counter + 1)
        }
    }
    const removeItem = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }
    const agregarProductos = () =>{
        if (counter <= itemStock) {
            setItemStock(itemStock - counter)
            setItemAdd(itemAdd + counter)
        }
    }
    const cancelar = () => {
        setItemStock(props.stock)
        setItemAdd(0)
    }

  return (
    <div className='border p-3'>
        <div className ='d-flex align-items-center m-3 border justify-content-between'>
            <button className='text-primary border-0 bg-transparent px-3  shadow' onClick={addItem}>+</button>
                <div className='px-3'>{counter}</div>
            <button className='text-primary border-0 bg-transparent px-3  shadow' onClick={removeItem}>-</button>
        </div>
        <div className='d-flex align-items-center m-3 border'>
            <button onClick={agregarProductos}>Agregar al Carrito</button>
            <div className='d-flex justify-content-center w-25'><div>{itemAdd}</div></div>
        </div>
        <div className='d-flex justify-content-center'><div>Stock: {itemStock}</div></div>
        <button onClick={cancelar}>Cancelar</button>
    </div>
  )
}

export default ItemCounter

