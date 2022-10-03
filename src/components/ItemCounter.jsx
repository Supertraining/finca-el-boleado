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
        <div >
            <div className='d-flex align-items-center m-3 border justify-content-between'>
                <button disabled={counter <= 1} className='text-white border-0 bg-dark fs-3 px-3 shadow w-25 rounded' onClick={removeItem}>-</button>
                <div className='px-3'><p className='m-0'>{counter}</p></div>
                <button disabled={counter >= stock} className='text-white border-0 bg-dark fs-3 px-3 shadow w-25 rounded' onClick={addItem}>+</button>
            </div>
            <div className='d-flex justify-content-center'><div><p className='border rounded p-2'>Stock: {stock}</p></div></div>
            <div className='d-flex align-items-center m-3 border'>
                <button className='w-100 bg-dark text-white addToCart' disabled={(stock <= 0 || counter > stock) } onClick={() => onAdd(counter)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCounter

