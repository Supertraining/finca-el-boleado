import React from 'react';
import ItemCounter from './ItemCounter';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

export const ItemDetail = ({item})=> {

    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) =>{
            addItem(item, quantity) 
    }
    
return (
        <>
            <div className="border rounded p-3 m-2 d-flex flex-column w-25"> 
                <img src={item.picture} alt={item.titulo} />
                <div className='border rounded p-3 my-2 h-100'> 
                    <h5>{item.title}</h5> 
                    <p><b>Características:</b>  {item.descripcion}</p>
                    <p><b>Valor:</b> ${item.precio}</p>
                </div> 
                <ItemCounter stock = {item.stock} initial = {1} onAdd={onAdd} />
                <Link className='text-decoration-none border rounded p-1 my-1 text-center bg-dark' to='/cart'>Terminar compra</Link> 
            </div>
    </>)
            }