import React from 'react'
import { useCartContext } from '../../Context/CartContext'

const ItemCart = ({product}) => {
  const {removeProduct} = useCartContext()
  return (
    <div className='flex border-rose-500 mb-20 mt-10 container'>
      <img className='max-w-xs' src={product.image} alt={product.title} />
      <div>
        <p>Título: {product.title}</p>
        <p>Cantidad: {product.quantity}</p>
        <p>Precio: ${product.price}</p>
        <p>Subtotal:${product.quantity * product.price}</p>
        <button className='mt-2 bg-red-500 text-white p-2 rounded-sm' onClick={() => removeProduct(product.id)}>Eliminar</button>
      </div>
    </div>
  )
}

export default ItemCart