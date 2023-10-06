import React from 'react'
import { useCartContext } from '../../Context/CartContext'

const ItemCart = ({product}) => {
  const {removeProduct} = useCartContext()
  return (
    <div className='container md:w-auto lg:w-4/5 bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
      
      <div className='flex items-center justify-center'>
        <img className='sm:w-2/5 md:w-2/5 lg:w-1/5' src={product.image} alt={product.title} />

      </div>
      <div className=' text-center'>
        <p><span className='font-bold'>Producto:</span> {product.title}</p>
        <p> <span className='font-bold'>Cantidad:</span> {product.quantity}</p>
        <p><span className='font-bold'>Precio:</span> ${product.price}</p>
        <p><span className='font-bold'>Subtotal:</span>${product.quantity * product.price}</p>
        <button className='mt-2 bg-red-500 text-white p-2 rounded-lg' onClick={() => removeProduct(product.id)}>Eliminar</button>
      </div>
    </div>
  )
}

export default ItemCart