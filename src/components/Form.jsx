import { useState } from 'react'
import { addDoc, collection, getFirestore, getDoc, doc, updateDoc } from 'firebase/firestore'

const Form = ({cart, totalPrice, clear}) => {
        
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [orderId, setOrderId] = useState('')

    const sendOrder = (e) => {
        e.preventDefault();

        const order =   {buyer: { name: nombre, email:email, phone:telefono }, 
                        items: cart.map((el)=> ({
                            id:el.id, title:el.title, price:el.precio, quantity:el.quantity 
                        })), 
                        total: totalPrice()};
        
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order).then(({id}) => setOrderId(id));

        cart.map(e=> {
            const updateStock = doc(db, 'items', e.id)
            getDoc(updateStock).then((snapshot) => {
            updateDoc(updateStock, {stock: snapshot.data().stock - e.quantity})
            })
            return '';
        })
    }

    
  return (
    <>
    <form className='col-4 m-5 border shadow p-3' >
        <div className="mb-3">
            <label htmlFor='nombre' className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" onInput={(e) => setNombre(e.target.value)} />
        </div>
        <div className="mb-3">
            <label htmlFor='email' className="form-label">E-Mail</label>
            <input type="text" className="form-control" id="email" onInput={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
            <label htmlFor='telefono' className="form-label">Teléfono</label>
            <input type="text" className="form-control" id="telefono" onInput={(e) => setTelefono(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={(e) => sendOrder(e)} disabled={orderId} >Hacer mi pedido!</button>
        <div className={orderId?'border rounded w-100 my-2 p-2 text-center':''} > {orderId ? <><p>Tu ID de orden es: <b>{orderId}.</b></p><p>Gracias por tu compra!</p></>  : '' }</div>
        <div>{orderId? <button className="btn btn-primary" onClick={()=> clear()}>Finalizar</button> : ''}</div>
    </form>
        
    </>
  )
}

export default Form