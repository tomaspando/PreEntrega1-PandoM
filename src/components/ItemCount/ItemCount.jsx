import { useState } from "react"

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)

    function sumar() {
        if(count <stock){
            setCount(count+1)
        }
    }

    function restar() {
        if(count <= 1) {
            return
        }else {
            setCount(count-1)
        }
    }


    return (
        <div className="text-center p-3 bg-slate-50   rounded-md mt-3">
            <div className="flex justify-between">
                <button className="" onClick={restar}>-</button>
                <span className="border-2 w-2/4 p-2 bg-white rounded-sm">{count}</span>
                <button onClick={sumar}>+</button>
            </div>
            <div className="mt-2 bg-red-500 text-white p-2 rounded-sm">
                <button disabled={stock <=0} onClick={() => onAdd(count)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount