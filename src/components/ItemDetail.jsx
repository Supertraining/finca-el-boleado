import React from 'react';
import ItemCounter from './ItemCounter';

export const ItemDetail = ({item})=> {
    
    
return (
        <>
            <div className="border rounded p-3 m-2 d-flex flex-column w-25"> 
                <img src={item.picture} alt={item.titulo} />
                <div className='border rounded p-3 my-2 h-100'> 
                    <h5>{item.title}</h5> 
                    <p><b>Características:</b>  {item.descripcion}</p>
                    <p><b>Valor:</b> ${item.precio}</p>
                </div> 
                <ItemCounter stock = '10'/>
            </div>

    </>)

            }