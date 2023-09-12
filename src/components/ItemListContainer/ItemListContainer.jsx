import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import { useState, useEffect, } from "react"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
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
        <ItemList products={products} />
    )
}

export default ItemListContainer