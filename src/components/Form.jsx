import { useState } from 'react'
import { addDoc, collection, getFirestore, getDoc, doc, updateDoc } from 'firebase/firestore'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import Loading from './Loading'

const Form = ({ cart, totalPrice, clear }) => {

    const { setDisableCart } = useContext(CartContext)

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [emailConf, setEmailConf] = useState('')
    const [telefono, setTelefono] = useState('')
    const [orderId, setOrderId] = useState('')

    const sendOrder = (e) => {
        e.preventDefault();

        const order = {
            buyer: { name: nombre, apellido: apellido, email: email, phone: telefono, date: new Date() },
            items: cart.map((el) => ({
                id: el.id, title: el.title, price: el.precio, quantity: el.quantity
            })),
            total: totalPrice()
        };

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));

        cart.map(e => {
            const updateStock = doc(db, 'items', e.id)
            getDoc(updateStock).then((snapshot) => {
                updateDoc(updateStock, { stock: snapshot.data().stock - e.quantity })
            })
            return '';
        })
    }


    return (
        <>
            <form className='m-5 border shadow p-3 ' >
                <div className="mb-3">
                    <label htmlFor='nombre' className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" onInput={(e) => setNombre(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor='apellido' className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="apellido" onInput={(e) => setApellido(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor='telefono' className="form-label">Teléfono</label>
                    <input type="tel" className="form-control" id="telefono" onInput={(e) => isNaN(e.target.value) ? setTelefono(null) : setTelefono(e.target.value)} />
                    <span><b>{telefono === null ? 'Ingrese un numero por favor' : ''}</b></span>
                </div>
                <div className="mb-3">
                    <label htmlFor='email' className="form-label">E-Mail</label>
                    <input type="email" className="form-control" id="email" onInput={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor='email' className="form-label">Confirme su e-mail por favor</label>
                    <input type="email" className="form-control" id="email" onInput={(e) => setEmailConf(e.target.value)} />
                    <span>{email === emailConf ? '' : 'su mail no coincide'}</span>
                </div>
                {nombre && apellido && (email === emailConf) && telefono ?
                    <button type="submit" className="btn btn-primary" onClick={(e) => { sendOrder(e); setDisableCart('disabled') }} disabled={orderId}>Realizar compra!</button>
                    : ''}
                <div className={orderId ? 'border rounded w-100 my-2 p-2 text-center' : ''} > {orderId ? <><p>Tu ID de orden es: <b>{orderId}.</b></p><p>Gracias por tu compra!</p></> : ''}</div>
                <div>{orderId ? <button className="btn btn-primary" onClick={() => { clear(); setDisableCart('') }}>Finalizar</button> : ''}</div>
            </form>
        </>
    )
}

export default Form