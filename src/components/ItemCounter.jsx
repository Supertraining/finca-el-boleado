import React, { useState } from 'react'


function ItemCounter(props) {
    const [counter, SetCounter] = useState(1);

    const addItem = ()=> {
        if (counter < props.stock) {
            SetCounter(counter + 1)
        }
    }
    const removeItem = () => {
        if (counter > 1) {
            SetCounter(counter - 1)
        }
    }

  return (
    <div className='d-flex justify-content-around border w-25'>
        
        <button className='text-primary border-0 bg-transparent px-3  shadow' onClick={addItem}>+</button>
        <div className='px-3'>{counter}</div>
        <button className='text-primary border-0 bg-transparent px-3  shadow' onClick={removeItem}>-</button>

    </div>
  )
}

export default ItemCounter

