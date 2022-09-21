import React from "react";
import { useState, useEffect} from "react";
import { ItemDetail } from "./ItemDetail";
import {useParams} from 'react-router-dom'

import cardSyrah from '../img/cardSyrah.jpg';
import cardBonarda from '../img/cardBonarda.jpg';
import cardVermouth from '../img/cardVermouth.jpg';
import cardViognier from '../img/cardViognier.jpg';
import dillClassic from '../img/dillClassic.jpg';
import dilPomelo from '../img/dillPomelo.jpg';
import dilPepino from '../img/dillPepino.jpg';

export const ItemDetailContainer = () => {
    
    const productos = [{
        id : 1,
        title : 'Syrah',
        descripcion : 'Ligero en boca y refrescante', 
        precio : 1200,
        picture: cardSyrah, 
        stock: 10 
    },
    {
        id : 2,
        title : 'Bonarda',
        descripcion : 'Persistente en boca, alto en taninos', 
        precio : 1500,
        picture: cardBonarda,
        stock: 5
    }, 
    {
        id : 3,
        title : 'Vermouth',
        descripcion : 'Especiado, con remanencia a hiervas serranas', 
        precio : 1100,
        picture: cardVermouth,
        stock: 7
    }, 
    {
        id : 4,
        title : 'Viognier',
        descripcion : 'Citrico, refrescante y levemente ácido', 
        precio : 1300,
        picture: cardViognier,
        stock: 12
    },
    {
        id : 5,
        title : 'Dill Tonic Clásico',
        descripcion : 'Especiado, profundo, refrescante', 
        precio : 1100,
        picture: dillClassic,
        stock: 25
    },
    {
        id : 6,
        title : 'Dill Tonic Pomelo',
        descripcion : 'Citrico, refrescante y especiado', 
        precio : 1500,
        picture: dilPomelo,
        stock: 3
    }, 
    {
        id : 7,
        title : 'Dill Tonic Pepino',
        descripcion : 'Suave, liviando, muy refrescante', 
        precio : 1500,
        picture: dilPepino,
        stock: 2
    } 
    ]

    const [apiItem, setApiItem] = useState([]);
    const {id} = useParams()
    
    useEffect(() => {
        const pedirProductos =  new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
    
        pedirProductos.then (res => 
        res.find(el => el.id === parseInt(id))
        )
        .then(data => setApiItem(data))
        .catch(err => {
        console.log('Error ' + err)
        })  
    
    }, [id])

        
    
    return (
        <div>
            <ItemDetail item = {apiItem} /> 
        </div>
    )
}