import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import Loading from './Loading';


const ItemListContainer = () => {

    const { id } = useParams();
    const [productos, setProductos] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');
        if (id) {
            const q = query(
                collection(db, 'items'),
                where('categoryId', '==', id))
            getDocs(q).then((snapshot) => {
                setProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                setLoading(false)
            })
        }
        else {
            getDocs(itemsCollection).then((snapshot) => {
                setProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                setLoading(false)
            })
        }
    }, [id]);

    return (
        <div className='border rounded d-flex flex-wrap justify-content-center my-5'>
            {loading ? <Loading /> : <ItemList productos={productos} />}
        </div>
    )
}

export default ItemListContainer