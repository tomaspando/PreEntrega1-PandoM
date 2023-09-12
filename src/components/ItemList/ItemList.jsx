import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
  return (
    <div className='grid gap-4 grid-cols-3 grid-rows-3'>{products.map(product => (
        <Item key={product.id} product={product}/>
    ))}</div>
  )
}

export default ItemList