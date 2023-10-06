import ItemList from '../ItemDetailContainer/ItemDetailContainer'
import { Button, Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const Item = ({product}) => {
  const nombre = useContext(CartContext)


  return (
    <div className='flex items-center justify-center min-h-screen container mx-auto w-50'>        
        <div className='rounded-xl shadow-lg'>
          <div className='p-5 flex flex-col'>
            <div className='rounded-xl overflow-hidden'>
              <img src={product.image}></img>
            </div>
            <h5 className='text-2xl md:text-3xl font-medium mt-3'>{product.title}</h5>
            <p className='text-slate-500 text-lg mt-3 '>{product.description}</p>
            <Link to={`/item/${product.id}`} className='text-center bg-red-500 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-red-500 focus:scale-95 transition-all duration-200 ease-out'>Ver Más</Link>
          </div>
        </div>
    </div>
  )
}

export default Item