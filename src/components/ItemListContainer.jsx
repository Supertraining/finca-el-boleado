import React from 'react';

function ItemListContainer (props) {
    
    return (
        <>
            <h1 className='text-center shadow my-3'>Bienvenido a tienda {props.name}</h1>
            {props.children}
        </>
    )
}

export default ItemListContainer