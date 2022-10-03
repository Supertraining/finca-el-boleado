import React from 'react';
import ItemCounter from './ItemCounter';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';


const ItemDetail = ({ item }) => {
    const { addItem, cart } = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }
    

    return (
        <>
            <div className="border rounded p-3 m-2 d-flex justify-content-around align-items-center">
                <div className='w-25 rounded'>
                    <img src={item.picture} alt={item.titulo} className='rounded img-fluid shadow' />
                </div>
                <div className='border rounded p-3 my-2 h-100 shadow'>
                    <h5>{item.title}</h5>
                    <p>{item.tipo}</p>
                    <p><b>Características:</b>  {item.descripcion}</p>
                    <p><b>Valor:</b> ${item.precio}</p>
                </div>
            </div>
            <div className='border p-3 rounded'>
                <ItemCounter stock={item.stock} initial={1} onAdd={onAdd} item={item} cart = {cart} />
                <div className='d-flex justify-content-around'>
                    <Link className='text-decoration-none border rounded p-1 my-1 text-center bg-dark text-white' to='/cart'>Terminar compra</Link>
                    <Link className='text-decoration-none border rounded p-1 my-1 text-center bg-dark text-white' to='/'>Seguir comprando</Link>
                </div>
            </div>
        </>)
}

export default ItemDetail