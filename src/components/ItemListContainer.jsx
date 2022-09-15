import React from 'react';
import { useEffect } from 'react';
import { useState} from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from './ItemList';

import cardSyrah from '../img/cardSyrah.jpg';
import cardBonarda from '../img/cardBonarda.jpg';
import cardVermouth from '../img/cardVermouth.jpg';
import cardViognier from '../img/cardViognier.jpg';
import dillClassic from '../img/dillClassic.jpg';
import dillPomelo from '../img/dillPomelo.jpg';
import dillPepino from '../img/dillPepino.jpg';


export const ItemListContainer = () => {



    const productos = [{
        id : 1,
        title : 'Syrah',
        descripcion : 'Ligero en boca y refrescante', 
        precio : 1200,
        picture: cardSyrah, 
        tipo: 'vino'
    },
    {
        id : 2,
        title : 'Bonarda',
        descripcion : 'Persistente en boca, alto en taninos', 
        precio : 1500,
        picture: cardBonarda,
        tipo: 'vino'
    }, 
    {
        id : 3,
        title : 'Vermouth',
        descripcion : 'Especiado, con remanencia a hiervas serranas', 
        precio : 1100,
        picture: cardVermouth,
        tipo: 'aperitivo'
    }, 
    {
        id : 4,
        title : 'Viognier',
        descripcion : 'Citrico, refrescante y levemente ácido', 
        precio : 1300,
        picture: cardViognier,
        tipo: 'vino'
    }, 
    {
        id : 5,
        title : 'Dill Tonic Clásico',
        descripcion : 'Especiado, profundo, refrescante', 
        precio : 1100,
        picture: dillClassic,
        tipo: 'aperitivo'

    },
    {
        id : 6,
        title : 'Dill Tonic Pomelo',
        descripcion : 'Citrico, refrescante y especiado', 
        precio : 1500,
        picture: dillPomelo,
        tipo: 'aperitivo'

    }, 
    {
        id : 7,
        title : 'Dill Tonic Pepino',
        descripcion : 'Suave, liviando, muy refrescante', 
        precio : 1500,
        picture: dillPepino,
        tipo: 'aperitivo'

    } 

    ]

    const [promesaProd, setPromesaProd] = useState([]);
    const {id} = useParams();
   
    useEffect ( ()  =>{
    const pedirProductos =  new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
 
    pedirProductos.then (res => {
        if (id) {
            setPromesaProd(res.filter(el => el.tipo === id))
        } else {
            pedirProductos.then ( res =>
                setPromesaProd(res)
            )}
    })  
    .catch(err => console.log('Error' + err)) 
     
    }, [id]);

    return (
        <div className='border rounded d-flex flex-wrap justify-content-evenly my-5'>
            <ItemList estado = {promesaProd}/>
        </div>
    )
}
