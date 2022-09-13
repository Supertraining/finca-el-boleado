import React, { useState } from 'react'


function ItemCounter({ initial, stock, onAdd }) {

    const [counter, setCounter] = useState(initial);

    const addItem = () => {
        setCounter(counter + 1)
    }
    const removeItem = () => {
        setCounter(counter - 1)
    }


    return (
        <div className='border p-3'>
            <div className='d-flex align-items-center m-3 border justify-content-between'>
                <button disabled={counter >= stock} className='text-primary border-0 bg-transparent px-3  shadow' onClick={addItem}>+</button>
                <div className='px-3'>{counter}</div>
                <button disabled={counter <= 1} className='text-primary border-0 bg-transparent px-3  shadow' onClick={removeItem}>-</button>
            </div>
            <div className='d-flex justify-content-center'><div>Stock: {stock}</div></div>
            <div className='d-flex align-items-center m-3 border'>
                <button disabled={stock <= 0} onClick={() => onAdd(counter)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCounter

