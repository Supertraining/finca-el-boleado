import React from "react";
import { useState, useEffect} from "react";
import { ItemDetail } from "./ItemDetail";
import {useParams} from 'react-router-dom'
import { doc, getDoc, getFirestore, snapshotEqual } from "firebase/firestore";
import Loading from "./Loading";

export const ItemDetailContainer = () => {
    

    const [apiItem, setApiItem] = useState([]);
    const {id} = useParams()
    const [loading, setLoading] = useState(true)

    
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = doc(db, 'items', id);
        getDoc(itemsCollection).then((snapshot) => {
            setApiItem({id: snapshot.id, ...snapshot.data()})
            setLoading(false)

        })
    }, [])

    return (
        <>
        
            { loading?
            <div className='border rounded d-flex flex-wrap justify-content-evenly my-5'>
            <Loading/>
            </div>
            : <ItemDetail item = {apiItem} /> }            
        </>
    )
}