import React, {useContext, useState} from 'react'
import { useCartContext } from '../../Context/CartContext'
import { useForm } from 'react-hook-form'
import {collection, addDoc} from "firebase/firestore";
import {db} from "../../firebase/config"

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("")

    const {cart, totalPrice,clearCart} = useCartContext()

    const {register, handleSubmit} = useForm()

    const comprar = data => {
      const pedido = {
        cliente: data,
        productos: cart,
        total: totalPrice()
      }

      console.log(pedido)

      const pedidosRef = collection(db, "pedidos")

      addDoc(pedidosRef, pedido)
        .then((doc) =>{
          setPedidoId(doc.id)
          console.log(pedidoId)
          clearCart()
        })

      if(pedidoId) {
        return (
          <div className="">
            <h1>Muchas gracias por tu compra</h1>
            <p>Tu numero de pedido es: {pedidoId}</p>
          </div>
        )
      }
    }

  return (
    <div className='container'>
        <h1>Finalizar Compra</h1>
        <form onSubmit={handleSubmit(comprar)}>
            <input type="text" placeholder='Ingresá tu nombre' {...register("nombre")} />
            <input type="email" placeholder='Ingresá tu e-mail' {...register("email")} />
            <input type="phone" placeholder='Ingresá tu teléfono' {...register("telefono")} />

            <button type='submit'>Comprar</button>
        </form>

    </div>
  )
}

export default Checkout