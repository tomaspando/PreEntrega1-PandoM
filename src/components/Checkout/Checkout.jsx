import React, {useContext, useState} from 'react'
import { useCartContext } from '../../Context/CartContext'
import {collection, addDoc} from "firebase/firestore";
import {db} from "../../firebase/config"
import Error from "../Error/Error"


const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("")
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [error, setError] = useState(false)





    const {cart, totalPrice,clearCart} = useCartContext()

    //const {register, handleSubmit} = useForm()

    const handleSubmit = e => {
      e.preventDefault()
    
      //Validación del formulario 
      if([nombre, telefono, email].includes("")) {
      setError(true)
      return
      } 
      
      setError(false)
      
      const pedido = {
        cliente: {nombre,telefono,email},
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

      
    }

    if(pedidoId) {
      return (
        <div className="container m-3 flex items-center justify-center flex-col">
          <h2 className='font-black text-3xl text-center m-3'>¡Muchas gracias por tu compra!</h2>
          <p className='text-xl text-center m-3'>Tu número de pedido es: <span className='font-bold'>{pedidoId}</span> </p>
        </div>
      )
    }

  return (
    <div className='container md:w-auto lg:w-2/5'>
        <h2 className='font-black text-3xl text-center m-3'>Finalizar Compra</h2>
        <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10' onSubmit={handleSubmit}>
          {error && <Error mensaje="Todos los campos son obligatorios"/>}
          <div className="mb-5">
            <label htmlFor="nombre" className='block text-gray-700 uppercase font-bold'>Nombre</label> 
            <input
            id='nombre' 
            type="text"
            placeholder='Ingrese su Nombre'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />

          </div>

          <div className="mb-5">
            <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>E-Mail</label> 
            <input
            id='email' 
            type="email"
            placeholder='Ingrese su E-Mail'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          </div>

          <div className="mb-5">
            <label htmlFor="telefono" className='block text-gray-700 uppercase font-bold'>Teléfono</label> 
            <input
            id='telefono' 
            type="number"
            placeholder='Ingrese su Telefono'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={telefono}
            onChange={e => setTelefono(e.target.value)}
          />
          </div>

            <button className='bg-green-500 w-full p-3 text-white uppercase font-bold hover:bg-green-600 cursor-pointer transition-all rounded-lg' type='submit'>Comprar</button>
        </form>

    </div>
  )
}

export default Checkout