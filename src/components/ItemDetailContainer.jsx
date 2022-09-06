import React from "react";
import { useState, useEffect} from "react";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {

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
        picture: 'https://picsum.photos/201/201',
    }, 
    {
        id : 3,
        title : 'Vermouth',
        descripcion : 'Especiado, con remanencia a hiervas serranas', 
        precio : 1100,
        picture: 'https://picsum.photos/202/202',
    }, 
    {
        id : 4,
        title : 'Viognier',
        descripcion : 'Citrico, refrescante y levemente ácido', 
        precio : 1300,
        picture: 'https://picsum.photos/203/203',
    } 

    ]

    const [apiItem, setApiItem] = useState([]);

    useEffect(() => {
        const pedirProductos =  new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
    
        pedirProductos.then (res => 
        res.find(el => el.id === 3)
        )
        .then(data => setApiItem(data))
        .catch(err => {
        console.log('Error ' + err)
        })  
    
    }, [])
    
    return (
        <div>
        <ItemDetail item = {apiItem}/>
        </div>
    )
}