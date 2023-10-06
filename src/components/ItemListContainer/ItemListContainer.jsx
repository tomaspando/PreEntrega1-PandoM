import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import ItemCount from "../ItemCount/ItemCount"
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"
import {db} from "../../firebase/config"
import ItemList from "../ItemList/ItemList"
import { useState, useEffect, } from "react"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
/*     if(categoryId === undefined) {
        url = "https://fakestoreapi.com/products?limit=8"
    }  */
    useEffect (() => {
        //const querydb = getFirestore()
        const queryCollection = collection(db, "productos")
        if(categoryId){
            const queryFilter = query(queryCollection, where("category","==",categoryId))
            getDocs(queryFilter)
                .then(res => setProducts(res.docs.map(product => ({id:product.id, ...product.data()}))))
        } else {
            getDocs(queryCollection)
                .then(res => setProducts(res.docs.map(product => ({id:product.id, ...product.data()}))))
        }
    },[categoryId])


    return (
        <ItemList products={products} />
    )
}

export default ItemListContainer