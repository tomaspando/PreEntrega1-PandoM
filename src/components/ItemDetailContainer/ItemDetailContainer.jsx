import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


function ItemDetailContainer() {
    
    
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    let url = `https://fakestoreapi.com/products/category/${categoryId}`
    console.log(categoryId)
    if(categoryId === undefined) {
        url = "https://fakestoreapi.com/products?limit=8"
    }
    useEffect (() => {
        fetch(url)
            .then(res => res.json())
            .then(res => setProducts(res))
    },[categoryId])

    console.log(url)

    return (
        <div className='grid gap-4 grid-cols-3 grid-rows-3'>{products.map(product => (
            <ItemDetail key={product.id} product={product}/>
        ))}</div>
    )
}

export default ItemDetailContainer