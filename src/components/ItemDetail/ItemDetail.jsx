import ItemList from '../ItemDetailContainer/ItemDetailContainer'
import { Button, Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCartContext } from '../../Context/CartContext'


const ItemDetail = ({products}) => {
  const [goToCart, setGoToCart] = useState(false)
  const {addProduct} = useCartContext()

  const onAdd = (quantity) => {
    setGoToCart(true)
    addProduct(products, quantity)
  }
  
  return (
    <div className='container flex items-center justify-center min-h-screen w-screen'>        
        <div className='rounded-xl shadow-lg'>
          <div className='p-5 flex flex-col'>
            <div className='flex items-center justify-center rounded-xl overflow-hidden'>
              <img className='sm:w-2/5 md:w-2/5 lg:w-1/5' src={products.image}></img>
            </div>
            <h5 className='text-2xl md:text-3xl font-medium mt-3'>{products.title}</h5>
            <p className='text-slate-500 text-lg mt-3 '>{products.description}</p>
            <p className='text-slate-500 text-lg mt-3 '>${products.price}</p>
            
            {goToCart ? <Link className='mt-2 bg-red-500 text-white p-2 rounded-sm text-center' to="/cart"> Terminar compra </Link> : <ItemCount initial={1} stock={5} onAdd={onAdd}/>}
          </div>
        </div>
    </div>
  )
}

export default ItemDetail