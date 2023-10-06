import React, { useState } from 'react'
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { useCartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart'


const Cart = ({product}) => {
 const {cart, totalPrice, clearCart} = useCartContext()
 const {orderId, setOrderId} = useState("")


/*  const order = {
    buyer: {
      name: "Tomás",
      email: "tomas@gmail.com",
      phone: 123456,
      adress: "Caballito - CABA"
    },
    items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})) ,
    total: totalPrice()
 }

 const handleClick = () => {
  const db = getFirestore()
  const orderCollection = collection(db,"orders")
  addDoc(orderCollection, order)
    .then(({id}) => console.log(id))
 } */

  if(cart.length === 0){
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to="/">Hacer compras</Link>
      </>
    )
  }

  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product}/>)
      }
      <div className="text-center p-3 bg-slate-50   rounded-md mt-3">
            <div className="flex text-center justify-center">
     
                <span className="border-2 w-2/4 p-2 bg-white rounded-sm">Total: ${totalPrice()}</span>

            </div>
            <div className="mt-2  bg-red-500 text-white p-2 rounded-sm">
                <button className='' onClick={() => clearCart()}>Vaciar Carrito</button>
            </div>
            <div className="mt-2 bg-green-500 text-white p-2 rounded-sm">
                <Link className='' to="/checkout">Finalizar compra</Link>
            </div>
      </div>
    </>
  )
}

export default Cart