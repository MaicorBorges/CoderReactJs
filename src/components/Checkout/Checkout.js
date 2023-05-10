import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext.js';
import { Timestamp } from 'firebase/firestore';


import {
    collection,
    addDoc
} from 'firebase/firestore';



import { db } from '../../services/firebase/Firebase.js'

import CheckoutForm from '../CheckoutForm/CheckoutForm.js'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total(),
                date: Timestamp.fromDate(new Date())
            }

            console.log(objOrder)
                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h1> Se está generando su orden</h1>
    }

    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout