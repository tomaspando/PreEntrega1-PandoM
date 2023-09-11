import { useState } from "react"

const ItemCount = () => {

    const [count, setCount] = useState(0)

    function sumar() {
        if(count <5){
            setCount(count+1)
        }
    }

    function restar() {
        if(count === 0) {
            return
        }else {
            setCount(count-1)
        }
    }


    return (
        <div>
            <button onClick={restar}>-</button>
            <span>{count}</span>
            <button onClick={sumar}>+</button>
        </div>
    )
}

export default ItemCount