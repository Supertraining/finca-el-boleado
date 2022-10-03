import React, { useState } from 'react'
import { useEffect } from 'react';


function ItemCounter({ initial, stock, onAdd, item }) {

    const [counter, setCounter] = useState(initial);
    const [stockActual, setStockActual] = useState(sessionStorage.getItem(`${item.id}`) === null ? stock : sessionStorage.getItem(`${item.id}`))



    const addItem = () => {
        setCounter(counter + 1)
    }

    const removeItem = () => {
        setCounter(counter - 1)
    }

    const handleStock = () => {
        if (counter <= stockActual) {
            setStockActual(stockActual - counter);
        }
    }

    useEffect(() => {
        sessionStorage.setItem(`${item.id}`, stockActual)
    }, [stockActual, item.id])

    return (
        <div >
            <div className='d-flex align-items-center m-3 border justify-content-between'>
                <button disabled={counter <= 1} className='text-white border-0 bg-dark fs-3 px-3 shadow w-25 rounded' onClick={removeItem}>-</button>
                <div className='px-3'><p className='m-0'>{counter}</p></div>
                <button disabled={counter >= stockActual} className='text-white border-0 bg-dark fs-3 px-3 shadow w-25 rounded' onClick={addItem}>+</button>
            </div>
            <div className='d-flex justify-content-center'><div><p className='border rounded p-2'>Stock: {stockActual}</p></div></div>
            <div className='d-flex align-items-center m-3 border'>
                <button className='w-100 bg-dark text-white addToCart' disabled={stockActual <= 0 || counter > stockActual} onClick={() => { onAdd(counter); handleStock() }}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCounter

