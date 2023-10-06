import React from 'react'
import { useState, useEffect } from 'react'
import {getFirestore, doc, getDoc} from "firebase/firestore"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {db} from "../../firebase/config"



function ItemDetailContainer() {
    
    
    const [products, setProducts] = useState([])
    const {id} = useParams()
    
    useEffect (() => {
        //const querydb = getFirestore()
        const queryDoc = doc(db, "productos",id)
        getDoc(queryDoc)
            .then(res => setProducts({id: res.id, ...res.data()}))
    },[id])

    return (
        <div className='grid gap-4 grid-cols-3 grid-rows-3'>
            <ItemDetail key={products.id} products={products}/>
        </div>
    )
}

export default ItemDetailContainer