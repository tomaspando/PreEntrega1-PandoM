import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemById = () => {
    const [products, setProducts] = useState([])
    const {id} = useParams()
    let url = `https://fakestoreapi.com/products/${id}`
    console.log(id)
    console.log(url)
    useEffect (() => {
        fetch(url)
            .then(res => res.json())
            .then(res => setProducts(res))
    },[id])

    console.log(url)

    return (
        <div className='grid gap-4 grid-cols-3 grid-rows-3'>
            <ItemDetail key={products.id} product={products}/>
        </div>
    )
}

export default ItemById