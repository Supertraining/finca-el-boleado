import React from 'react';
import { useState} from 'react'
import { ItemList } from './ItemList';


function ItemListContainer () {

    const productos = [{
        id : 1,
        title : 'Syrah',
        descripcion : 'Ligero en boca y refrescante', 
        precio : 1200,
        picture: 'https://picsum.photos/200/200', 
    },
    {
        id : 2,
        title : 'Bonarda',
        descripcion : 'Persistente en boca, alto en taninos', 
        precio : 1500,
        picture: 'https://picsum.photos/201/200',
    }, 
    {
        id : 3,
        title : 'Vermouth',
        descripcion : 'Especiado, con remanencia a hiervas serranas', 
        precio : 1100,
        picture: 'https://picsum.photos/202/200',
    }, 
    {
        id : 4,
        title : 'Viognier',
        descripcion : 'Citrico, refrescante y levemente ácido', 
        precio : 1300,
        picture: 'https://picsum.photos/203/200',
    } 

    ]

    const [promesaProd, setPromesaProd] = useState([])

    const pedirProductos =  new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
    
     pedirProductos.then (res => {
        setPromesaProd(res)
     }).catch(err => {
        console.log('Error ' + err)
     })
        
    
    return (
        <div className='border rounded d-flex my-5'>
            <ItemList estado = {promesaProd}/>
        </div>
    )
}

export default ItemListContainer