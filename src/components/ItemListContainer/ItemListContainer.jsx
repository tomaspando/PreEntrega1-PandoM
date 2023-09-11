import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemDetailContainer/>
        </div>
    )
}

export default ItemListContainer